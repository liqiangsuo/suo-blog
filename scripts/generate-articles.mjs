import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const blogDir = 'C:/codex_learn/codex_list/blog';
const articlesDir = join(blogDir, 'content', 'articles');
const files = readdirSync(articlesDir, { encoding: 'utf-8' }).filter(f => f.endsWith('.md'));

const articles = [];
for (const file of files) {
  let raw = readFileSync(join(articlesDir, file), 'utf-8');
  // Strip BOM
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  
  // Match frontmatter (without ^ to handle any leading chars)
  const fmMatch = raw.match(/---\r?\n([\s\S]*?)\r?\n---/);
  const frontmatter = fmMatch ? fmMatch[1] : '';
  const body = raw.replace(/---[\s\S]*?\n---\r?\n/, '');

  // Use multiline regex with named fields
  const lines = {};
  frontmatter.split(/\r?\n/).forEach(line => {
    const m = line.match(/^(\w+):(.*)$/);
    if (m) lines[m[1]] = m[2].trim();
  });

  // Parse tags
  let tags = [];
  if (lines.tags) {
    tags = lines.tags.replace(/[\[\]]/g, '').split(',').map(t => t.trim()).filter(Boolean);
  }

  articles.push({
    title: lines.title || '',
    description: lines.description || '',
    date: lines.date || '',
    tags,
    path: file.replace(/\.md$/, ''),
    wordCount: body.length,
  });
}

articles.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
const outPath = join(blogDir, 'public', 'articles.json');
writeFileSync(outPath, JSON.stringify(articles, null, 2));
console.log('Generated ' + outPath + ' with ' + articles.length + ' articles');