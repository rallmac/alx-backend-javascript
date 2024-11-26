process.stdout.write('Welcome to Holberton School, What is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
