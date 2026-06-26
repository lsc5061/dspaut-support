const fs = require('fs');
const path = require('path');
const base = path.join(process.cwd(), 'src', 'content', 'manuals', 'en', 'Equipment_Manual', 'DEEPSOUND_P5');
const files = fs.readdirSync(base).filter(f => f.endsWith('.md'));
const items = files.map(file => {
  const content = fs.readFileSync(path.join(base, file), 'utf8');
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (match) {
    match[1].split(/\r?\n/).forEach(line => {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) {
        const key = m[1];
        const val = m[2].trim();
        data[key] = isNaN(Number(val)) ? val : Number(val);
      }
    });
  }
  return { file, data };
});
console.log(JSON.stringify(items, null, 2));
console.log('sorted', items.slice().sort((a,b)=>(a.data.order||0)-(b.data.order||0)).map(i=>`${i.file}(${i.data.order})`));
