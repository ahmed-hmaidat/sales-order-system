const fs = require('fs');
const path = require('path');

// Load all queue files from the workers folder
const queuesPath = path.join(__dirname, 'workers');
fs.readdirSync(queuesPath).forEach((file) => {
    if (file.endsWith('.js')) {
        require(path.join(queuesPath, file));
    }
});

console.log('Worker is running and listening for jobs...');