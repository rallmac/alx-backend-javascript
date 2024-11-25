const http = require('http');
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

        const fields = {};
        for (const student of students) {
          const field = student[header.indexOf('field')];
          const firstname = student[header.indexOf('firstname')];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }

        let output = `Number of students: ${students.length}\n`;
        for (const [field, names] of Object.entries(fields)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        resolve(output.trim());
      } catch (err) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const databasePath = process.argv[2];
      const studentList = await countStudents(databasePath);
      res.end(studentList);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
