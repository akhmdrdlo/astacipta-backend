import fs from 'fs';
import fetch from 'node-fetch';

const API_URL = 'http://localhost:1337/api/programs?populate=*';

async function exportData() {
  const res = await fetch(API_URL);
  const json = await res.json();

  fs.writeFileSync('programs.json', JSON.stringify(json.data, null, 2));
  console.log('✅ Data berhasil diexport ke programs.json');
}

exportData();
