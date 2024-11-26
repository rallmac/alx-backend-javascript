if (process.stdin.isTTY) {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });
} else {
  let input = '';

  process.stdin.on('data', (data) => {
    input += data.toString();
  });

  process.stdin.on('end', () => {
    const name = input.trim();
    process.stdout.write(`Your name is: ${name}\n`);
    console.log('This important software is now closing');
  });
}
