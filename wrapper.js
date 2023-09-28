import pty from 'node-pty';
import dotenv from 'dotenv';


dotenv.config();
const privateKey = process.env.PRIVATE_KEY;

function runLilypad(module, version, argument) {
  const command = 'lilypad';
  const args = ['run', `${module}:${version}`, `${argument}`];
  
  const ptyProcess = pty.spawn(command, args, {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env
  });

  ptyProcess.on('data', (data) => {
    console.log(data);
  });

  ptyProcess.on('exit', (exitCode) => {
    console.log(`Process exited with code ${exitCode}`);
  });
}

export default runLilypad;
