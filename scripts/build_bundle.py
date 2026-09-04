#!/usr/bin/env python3
import json
import os
import shutil

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT_DIR, 'content')
DOCS_DIR = os.path.join(ROOT_DIR, 'docs')
DOCS_CONTENT_DIR = os.path.join(DOCS_DIR, 'content')

os.makedirs(DOCS_CONTENT_DIR, exist_ok=True)

CHAPTER_DEFINITIONS = [
    {
        "id": "zero-to-hero",
        "file": "conscious-agents-zero-to-hero.md",
        "label": "Zero to Hero",
        "number": "Toolkit & Tour",
        "title": "Conscious Agents & Physics Unification: Zero to Hero",
        "subtitle": "A from-scratch mathematical tour of Donald Hoffman & Chetan Prakash's theory"
    },
    {
        "id": "chapter-ii",
        "file": "chapter-ii-theory-of-conscious-agents.md",
        "label": "Chapter II",
        "number": "Chapter II",
        "title": "Chapter II — Theory of Conscious Agents",
        "subtitle": "Mathematical definition of Conscious Agents, Qualia Kernels, and Asymptotic Dynamics"
    },
    {
        "id": "chapter-iii",
        "file": "chapter-iii-bridge-to-physics.md",
        "label": "Chapter III",
        "number": "Chapter III",
        "title": "Chapter III — The Bridge to Physics",
        "subtitle": "From Markov Chains to Wavefunctions: Asymptotic Harmonic Functions & Free Particle Kinematics"
    },
    {
        "id": "chapter-iv",
        "file": "chapter-iv-the-frontier.md",
        "label": "Chapter IV",
        "number": "Chapter IV",
        "title": "Chapter IV — The Frontier: Toward the Forces",
        "subtitle": "Decorated Permutations, the Amplituhedron, Relativity, and Open Frontiers"
    },
    {
        "id": "other",
        "file": "other.md",
        "label": "Resources",
        "number": "Appendix",
        "title": "Deep Dive Video & Extended Discussions",
        "subtitle": "Recorded sessions with Hoffman, Prakash, Fields, Chis-Ciure, and Levin"
    }
]

def build():
    chapters = []
    
    for ch in CHAPTER_DEFINITIONS:
        src_path = os.path.join(CONTENT_DIR, ch["file"])
        dest_path = os.path.join(DOCS_CONTENT_DIR, ch["file"])
        shutil.copyfile(src_path, dest_path)
        
        with open(src_path, "r", encoding="utf-8") as f:
            raw_content = f.read()
            
        # Simple word count and reading time estimate
        words = len(raw_content.split())
        reading_time_mins = max(1, round(words / 200))
        
        chapters.append({
            "id": ch["id"],
            "file": ch["file"],
            "label": ch["label"],
            "number": ch["number"],
            "title": ch["title"],
            "subtitle": ch["subtitle"],
            "readingTime": f"{reading_time_mins} min read",
            "wordCount": words,
            "markdown": raw_content
        })
        print(f"Bundled: {ch['file']} ({words:,} words, ~{reading_time_mins} mins)")

    bundle_js_path = os.path.join(DOCS_DIR, "content-bundle.js")
    with open(bundle_js_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated content bundle for Hoffman Conscious Agents Tutorials\n")
        f.write("window.HOFFMAN_CHAPTERS = ")
        json.dump(chapters, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Successfully wrote {bundle_js_path} with {len(chapters)} chapters.")

if __name__ == '__main__':
    build()
