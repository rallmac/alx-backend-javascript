const fs = require('fs');

async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data
          .trim()
          .split('\n')
          .filter((line) => line.trim() !== '');
        const header = lines[0].split(',');
        const students = lines.slice(1).map((line) => line.split(','));

        const fields = {};
        for (const student of students) {
          const field = student[header.indexOf('field')];
          const firstname = student[header.indexOf('firstname')];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        resolve(fields);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = readDatabase;
