const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          throw new Error('Cannot load the database');
        }

        const header = lines[0].split(',');
        const students = lines.slice(1).map((line) => line.split(','));

        console.log(`Number of students: ${students.length}`);

        const fields = {};

        for (const student of students) {
          const field = student[header.indexOf('field')];
          const firstname = student[header.indexOf('firstname')];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        resolve();
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
