import { taskFirst, taskNext } from './0-constants.js';

if (!process.env.SKIP_LOG) {
  console.log(`${taskFirst()} ${taskNext()}`);
}
