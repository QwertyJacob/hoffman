#!/usr/bin/env python3
import json
import re

with open('docs/content-bundle.js', 'r', encoding='utf-8') as f:
    raw = f.read()

prefix = 'window.HOFFMAN_CHAPTERS = '
start_idx = raw.find(prefix) + len(prefix)
end_idx = raw.rfind(';')
chapters = json.loads(raw[start_idx:end_idx].strip())

print(f'=== Testing Math Tokenizer across {len(chapters)} Chapters ===')
for ch in chapters:
    text = ch['markdown']
    
    # 1. Code fences
    code_blocks = re.findall(r'```[\s\S]*?```', text)
    text_clean = re.sub(r'```[\s\S]*?```', '%%CODEBLOCK%%', text)
    
    # 2. Inline code
    inline_codes = re.findall(r'`[^`\n]+`', text_clean)
    text_clean = re.sub(r'`[^`\n]+`', '%%INLINECODE%%', text_clean)
    
    # 3. Display math $$...$$
    math_blocks = re.findall(r'\$\$([\s\S]*?)\$\$', text_clean)
    text_clean = re.sub(r'\$\$([\s\S]*?)\$\$', '%%MATHBLOCK%%', text_clean)
    
    # 4. Inline math $...$
    math_inlines = re.findall(r'(?:^|[^\\])\$([^\s$](?:[^$\n]*?[^\s$])?)\$', text_clean)
    text_clean = re.sub(r'(?:^|[^\\])\$([^\s$](?:[^$\n]*?[^\s$])?)\$', '%%MATHINLINE%%', text_clean)
    
    # Check for leftover stray '$'
    stray_dollars = re.findall(r'(?<!\\)\$', text_clean)
    
    print(f"{ch['id']}: {len(math_blocks)} display blocks, {len(math_inlines)} inline math, stray $: {len(stray_dollars)}")
    if stray_dollars:
        for m in re.finditer(r'.{0,30}\$.{0,30}', text_clean):
            print('   [!] Stray Context:', repr(m.group(0)))

print("=== Verification complete ===")
