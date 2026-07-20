import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..');
const articlesDir = join(blogDir, 'content', 'articles');
const files = readdirSync(articlesDir, { encoding: 'utf-8' }).filter(f => f.endsWith('.md'));

const articles = [];
for (const file of files) {
  let raw = readFileSync(join(articlesDir, file), 'utf-8');
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  
  const fmMatch = raw.match(/---\r?\n([\s\S]*?)\r?\n---/);
  const frontmatter = fmMatch ? fmMatch[1] : '';
  const body = raw.replace(/---[\s\S]*?\n---\r?\n/, '');

  const lines = {};
  frontmatter.split(/\r?\n/).forEach(line => {
    const m = line.match(/^(\w+):(.*)$/);
    if (m) lines[m[1]] = m[2].trim();
  });

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
    body: body.trim(),
  });
}

articles.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
// Also save individual article JSON files
for (const article of articles) {
  writeFileSync(join(blogDir, 'public', article.path + '.json'), JSON.stringify(article, null, 2));
}
writeFileSync(join(blogDir, 'public', 'articles.json'), JSON.stringify(articles, null, 2));
console.log('Generated articles.json with ' + articles.length + ' articles');
// Also save to project root for module import
writeFileSync(join(blogDir, 'articles.json'), JSON.stringify(articles, null, 2));