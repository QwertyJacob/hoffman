/**
 * Conscious Agents & Physics Unification - Application Engine
 * High-performance, responsive reader with two-pass math protection
 */

(function () {
  'use strict';

  // State
  let currentChapterIndex = 0;
  let chapters = window.HOFFMAN_CHAPTERS || [];
  let currentFontScale = parseFloat(localStorage.getItem('hoffman_font_scale')) || 1.0;
  let currentTheme = localStorage.getItem('hoffman_theme') || 'dark';

  // DOM Elements
  const progressBar = document.getElementById('progress-bar');
  const contentBody = document.getElementById('content-body');
  const loadingSpinner = document.getElementById('loading-spinner');
  const chaptersNav = document.getElementById('chapters-nav');
  const tocNav = document.getElementById('toc-nav');
  const currentChapterHeader = document.getElementById('current-chapter-header');
  const sidebar = document.getElementById('sidebar');
  const tocSidebar = document.getElementById('toc-sidebar');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const btnSidebarToggle = document.getElementById('btn-sidebar-toggle');
  const btnSidebarClose = document.getElementById('btn-sidebar-close');
  const btnTocToggle = document.getElementById('btn-toc-toggle');
  const btnTocClose = document.getElementById('btn-toc-close');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const btnFontDec = document.getElementById('btn-font-dec');
  const btnFontInc = document.getElementById('btn-font-inc');
  const btnFontReset = document.getElementById('btn-font-reset');
  const btnPrevChapter = document.getElementById('btn-prev-chapter');
  const btnNextChapter = document.getElementById('btn-next-chapter');
  const prevChapterTitle = document.getElementById('prev-chapter-title');
  const nextChapterTitle = document.getElementById('next-chapter-title');
  const btnBackToTop = document.getElementById('btn-back-to-top');
  const searchInput = document.getElementById('chapter-search');

  // Slugify helper for anchors
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/<[^>]*>/g, '') // strip HTML
      .replace(/[^\w\s-]/g, '') // remove non-alphanumeric except hyphen
      .trim()
      .replace(/[\s_-]+/g, '-') // collapse whitespace and underscores
      .replace(/^-+|-+$/g, '');
  }

  // --- Math Protection Engine ---
  function protectMathAndCode(markdown) {
    const codeBlocks = [];
    const inlineCodes = [];
    const mathBlocks = [];
    const mathInlines = [];

    // 1. Protect code fences ```...```
    let text = markdown.replace(/```[\s\S]*?```/g, function (match) {
      codeBlocks.push(match);
      return `%%CODEBLOCK_${codeBlocks.length - 1}%%`;
    });

    // 2. Protect inline code `...`
    text = text.replace(/`[^`\n]+`/g, function (match) {
      inlineCodes.push(match);
      return `%%INLINECODE_${inlineCodes.length - 1}%%`;
    });

    // 3. Protect display math $$...$$
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, function (match, math) {
      mathBlocks.push(math.trim());
      return `\n\n%%MATHBLOCK_${mathBlocks.length - 1}%%\n\n`;
    });

    // 4. Protect inline math $...$
    // Supports inline math including symbols, subscripts, superscripts
    text = text.replace(/(^|[^\\])\$([^\s$](?:[^$\n]*?[^\s$])?)\$/g, function (match, prefix, math) {
      mathInlines.push(math.trim());
      return `${prefix}%%MATHINLINE_${mathInlines.length - 1}%%`;
    });

    return {
      text,
      codeBlocks,
      inlineCodes,
      mathBlocks,
      mathInlines
    };
  }

  function restoreMathAndCode(html, tokens) {
    // 1. Restore inline math
    let result = html.replace(/%%MATHINLINE_(\d+)%%/g, function (_, idx) {
      const math = tokens.mathInlines[parseInt(idx, 10)];
      return `<span class="math-inline">$${math}$</span>`;
    });

    // 2. Restore display math
    result = result.replace(/<p>\s*%%MATHBLOCK_(\d+)%%\s*<\/p>/g, function (_, idx) {
      const math = tokens.mathBlocks[parseInt(idx, 10)];
      return `<div class="math-display">$$${math}$$</div>`;
    });
    result = result.replace(/%%MATHBLOCK_(\d+)%%/g, function (_, idx) {
      const math = tokens.mathBlocks[parseInt(idx, 10)];
      return `<div class="math-display">$$${math}$$</div>`;
    });

    // 3. Restore inline code
    result = result.replace(/%%INLINECODE_(\d+)%%/g, function (_, idx) {
      return tokens.inlineCodes[parseInt(idx, 10)];
    });

    // 4. Restore code blocks
    result = result.replace(/%%CODEBLOCK_(\d+)%%/g, function (_, idx) {
      return tokens.codeBlocks[parseInt(idx, 10)];
    });

    // 5. Transform Epistemic Badges (🟢 SOLID, 🟡 SKETCH, 🔴 ASPIRATION)
    result = result.replace(/🟢\s*(\*\*SOLID\*\*|SOLID)/g, '<span class="badge badge-solid"><span class="badge-dot"></span>SOLID</span>');
    result = result.replace(/🟡\s*(\*\*SKETCH\*\*|SKETCH)/g, '<span class="badge badge-sketch"><span class="badge-dot"></span>SKETCH</span>');
    result = result.replace(/🔴\s*(\*\*ASPIRATION\*\*|ASPIRATION)/g, '<span class="badge badge-aspiration"><span class="badge-dot"></span>ASPIRATION</span>');

    // 6. Transform YouTube video links to responsive embed player
    result = result.replace(
      /<p>(?:link to deep dive\s*:?\s*)?<a[^>]*href=["'](?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)["'][^>]*>.*?<\/a><\/p>/gi,
      function (_, videoId) {
        return `
          <div class="video-responsive">
            <iframe src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        `;
      }
    );

    return result;
  }

  // --- Configure Marked.js ---
  function configureMarked() {
    if (typeof marked === 'undefined') return;

    const renderer = new marked.Renderer();

    // Headings with slugs
    renderer.heading = function (text, level) {
      const slug = slugify(text);
      return `<h${level} id="${slug}" class="article-heading">${text}</h${level}>`;
    };

    // Tables with responsive wrapper
    renderer.table = function (header, body) {
      return `<div class="table-container"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
    };

    // Internal Markdown links rewrite
    renderer.link = function (href, title, text) {
      if (!href) return `<a href="#">${text}</a>`;

      // Map relative md links to hash routes
      const fileToId = {
        'conscious-agents-zero-to-hero.md': 'zero-to-hero',
        'chapter-ii-theory-of-conscious-agents.md': 'chapter-ii',
        'chapter-iii-bridge-to-physics.md': 'chapter-iii',
        'chapter-iv-the-frontier.md': 'chapter-iv',
        'other.md': 'other'
      };

      for (const [file, id] of Object.entries(fileToId)) {
        if (href.includes(file)) {
          const parts = href.split('#');
          const anchor = parts[1] ? `#${parts[1]}` : '';
          return `<a href="#${id}${anchor}" class="internal-link" ${title ? `title="${title}"` : ''}>${text}</a>`;
        }
      }

      // External links
      if (href.startsWith('http://') || href.startsWith('https://')) {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" ${title ? `title="${title}"` : ''}>${text}</a>`;
      }

      return `<a href="${href}" ${title ? `title="${title}"` : ''}>${text}</a>`;
    };

    marked.setOptions({
      renderer: renderer,
      gfm: true,
      breaks: false
    });
  }

  // --- Render Chapter ---
  function renderChapter(chapterId, targetAnchor) {
    const index = chapters.findIndex(c => c.id === chapterId);
    if (index === -1) {
      if (chapters.length > 0) renderChapter(chapters[0].id);
      return;
    }

    currentChapterIndex = index;
    const chapter = chapters[index];

    // Show loading
    loadingSpinner.style.display = 'flex';
    contentBody.style.opacity = '0';

    // Update Header
    currentChapterHeader.textContent = `${chapter.number}: ${chapter.title.split('—')[0].trim()}`;
    document.title = `${chapter.title} | Conscious Agents`;

    // Highlight Sidebar
    document.querySelectorAll('.chapter-nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.id === chapter.id);
    });

    // Update Next / Prev buttons
    if (index > 0) {
      btnPrevChapter.style.visibility = 'visible';
      prevChapterTitle.textContent = chapters[index - 1].label;
      btnPrevChapter.onclick = () => navigateToChapter(chapters[index - 1].id);
    } else {
      btnPrevChapter.style.visibility = 'hidden';
    }

    if (index < chapters.length - 1) {
      btnNextChapter.style.visibility = 'visible';
      nextChapterTitle.textContent = chapters[index + 1].label;
      btnNextChapter.onclick = () => navigateToChapter(chapters[index + 1].id);
    } else {
      btnNextChapter.style.visibility = 'hidden';
    }

    // Process Markdown with Math Protection
    setTimeout(() => {
      const tokens = protectMathAndCode(chapter.markdown);
      const rawHtml = marked.parse(tokens.text);
      const finalHtml = restoreMathAndCode(rawHtml, tokens);

      contentBody.innerHTML = finalHtml;

      // Build Table of Contents
      buildToC();

      // Trigger MathJax typeset
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetClear([contentBody]);
        window.MathJax.typesetPromise([contentBody])
          .then(() => {
            loadingSpinner.style.display = 'none';
            contentBody.style.opacity = '1';

            // Scroll to target anchor if specified
            if (targetAnchor) {
              const targetEl = document.getElementById(targetAnchor);
              if (targetEl) {
                setTimeout(() => {
                  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }
            } else {
              window.scrollTo({ top: 0, behavior: 'instant' });
            }
          })
          .catch(err => {
            console.warn('MathJax typeset error:', err);
            loadingSpinner.style.display = 'none';
            contentBody.style.opacity = '1';
          });
      } else {
        loadingSpinner.style.display = 'none';
        contentBody.style.opacity = '1';
        if (!targetAnchor) window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 20);
  }

  // --- Build Table of Contents & ScrollSpy ---
  let tocObserver = null;

  function buildToC() {
    tocNav.innerHTML = '';
    const headings = contentBody.querySelectorAll('h2, h3');

    if (headings.length === 0) {
      tocSidebar.style.display = 'none';
      btnTocToggle.style.display = 'none';
      return;
    }

    tocSidebar.style.display = '';
    btnTocToggle.style.display = '';

    if (tocObserver) tocObserver.disconnect();

    headings.forEach(h => {
      const slug = h.id;
      const level = h.tagName.toLowerCase();
      const link = document.createElement('a');
      link.href = `#${chapters[currentChapterIndex].id}#${slug}`;
      link.className = `toc-link level-${level}`;
      link.textContent = h.textContent.replace(/^[#\s]+/, '');
      link.dataset.target = slug;

      link.addEventListener('click', e => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, null, link.href);
        closeDrawers();
      });

      tocNav.appendChild(link);
    });

    // Setup IntersectionObserver for ScrollSpy
    tocObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document.querySelectorAll('.toc-link').forEach(link => {
              link.classList.toggle('active', link.dataset.target === id);
            });
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0
      }
    );

    headings.forEach(h => tocObserver.observe(h));
  }

  // --- Navigation & Router ---
  function navigateToChapter(chapterId, anchor) {
    const hash = anchor ? `#${chapterId}#${anchor}` : `#${chapterId}`;
    window.location.hash = hash;
    closeDrawers();
  }

  function handleRoute() {
    let hash = window.location.hash.slice(1);
    if (!hash) {
      if (chapters.length > 0) {
        window.location.hash = `#${chapters[0].id}`;
      }
      return;
    }

    const parts = hash.split('#');
    const chapterId = parts[0];
    const anchor = parts[1] || null;

    renderChapter(chapterId, anchor);
  }

  // --- Sidebar Chapters List ---
  function buildSidebar() {
    chaptersNav.innerHTML = '';
    chapters.forEach(ch => {
      const item = document.createElement('a');
      item.href = `#${ch.id}`;
      item.className = 'chapter-nav-item';
      item.dataset.id = ch.id;

      item.innerHTML = `
        <div class="chapter-badge-row">
          <span class="chapter-num">${ch.number}</span>
          <span class="chapter-readtime">${ch.readingTime}</span>
        </div>
        <span class="chapter-title">${ch.label}: ${ch.title.split('—')[0].replace(/Chapter [I|V|X]+:?/i, '').trim()}</span>
      `;

      item.addEventListener('click', e => {
        e.preventDefault();
        navigateToChapter(ch.id);
      });

      chaptersNav.appendChild(item);
    });
  }

  // --- Search / Filter ---
  function setupSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', e => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.chapter-nav-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // --- Drawers (Mobile & Tablet) ---
  function openSidebar() {
    sidebar.classList.add('active');
    drawerBackdrop.classList.add('active');
  }

  function openToc() {
    tocSidebar.classList.add('active');
    drawerBackdrop.classList.add('active');
  }

  function closeDrawers() {
    sidebar.classList.remove('active');
    tocSidebar.classList.remove('active');
    drawerBackdrop.classList.remove('active');
  }

  // --- Theme Controller ---
  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = `theme-${theme}`;
    localStorage.setItem('hoffman_theme', theme);
  }

  function cycleTheme() {
    const themes = ['dark', 'sepia', 'light'];
    const next = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    applyTheme(next);
  }

  // --- Font Size Controller ---
  function applyFontScale(scale) {
    currentFontScale = Math.min(Math.max(scale, 0.8), 1.4);
    document.documentElement.style.setProperty('--font-scale', `${currentFontScale}rem`);
    localStorage.setItem('hoffman_font_scale', currentFontScale);
    btnFontReset.textContent = `${Math.round(currentFontScale * 100)}%`;
  }

  // --- Reading Progress & Scroll Events ---
  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;

    // Back to top button visibility
    if (scrollTop > 400) {
      btnBackToTop.classList.add('visible');
    } else {
      btnBackToTop.classList.remove('visible');
    }
  }

  // --- Initialize Application ---
  function init() {
    configureMarked();
    applyTheme(currentTheme);
    applyFontScale(currentFontScale);
    buildSidebar();
    setupSearch();

    // Event Listeners
    btnSidebarToggle.addEventListener('click', openSidebar);
    btnSidebarClose.addEventListener('click', closeDrawers);
    btnTocToggle.addEventListener('click', openToc);
    btnTocClose.addEventListener('click', closeDrawers);
    drawerBackdrop.addEventListener('click', closeDrawers);

    btnThemeToggle.addEventListener('click', cycleTheme);
    btnFontDec.addEventListener('click', () => applyFontScale(currentFontScale - 0.05));
    btnFontInc.addEventListener('click', () => applyFontScale(currentFontScale + 0.05));
    btnFontReset.addEventListener('click', () => applyFontScale(1.0));

    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleRoute);

    // Initial Route
    handleRoute();
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
