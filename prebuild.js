const path = require('path');
const fs = require('fs-extra');

const distDir = path.join(process.cwd(), 'dist');

fs.removeSync(distDir);