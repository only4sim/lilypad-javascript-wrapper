# Lilypad JavaScript Wrapper

This project provides a JavaScript wrapper to interact with the Lilypad CLI using Node.js. The wrapper utilizes the `node-pty` package to spawn a pseudo-terminal for executing the Lilypad CLI commands.

## Prerequisites

1. **Node.js**:
   Ensure you have Node.js installed (version 13.2.0 or later is recommended). You can download it from [here](https://nodejs.org/).

2. **Lilypad CLI**:
   Install the Lilypad CLI by following the [Lilypad Quick Start Guide](https://docs.lilypadnetwork.org/lilypad-v1-testnet/quick-start/install-run-requirements).

3. **npm (Node Package Manager)**:
   npm is distributed with Node.js - which means that when you download Node.js, you automatically get npm installed on your computer.

## Installation

1. **Clone the Repository**:
   Clone this repository to your local machine.

```bash
git clone <repository-url>
```

2. **Navigate to Project Directory**
Change directory to the project folder.
```bash
cd lilypad-javascript-wrapper
```

3. **Install Dependencies**
Install the required npm packages.
```bash
npm install
```

4. **Configure Environment Variables**
Create a .env file in the project root and define any necessary environment variables. For example:
```javascript
PRIVATE_KEY='your-private-key-here'
```
Replace 'your-private-key-here' with your actual private key.

## Usage
1. **Import the Wrapper**
Import the runLilypad function from wrapper.js in your script.
```javascript
import runLilypad from './wrapper.js';
```

2. **Use the Wrapper**
Call the runLilypad function, passing the version and argument as parameters.
```javascript
runLilypad('v0.9-lilypad1', 'an astronaut riding on a unicorn');
```

3. **Run Your Script**
Execute your script using Node.js.
```bash
node your-script.js
```
Replace your-script.js with the name of your script file.

For example, you can try to use the main.js.
```bash
node main.js
```

## Demo
[Lilypad JavaScript Wrapper](https://youtu.be/M5XvawL6kKI)

## Support
For issues with the Lilypad CLI, refer to the Lilypad documentation or reach out to the Lilypad community for support.

Contributing
Feel free to fork this repository, make changes, and open pull requests. Any contributions are welcome!