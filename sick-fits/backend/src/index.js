const path = require('path');
require('dotenv').config({ path: path.join(process.cwd(), '.env') });
const createServer = require('./createServer');
const db = require('./db');
const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, (serverInfo) => {
  console.log(`Server is running on https://localhost:${serverInfo.port}`);
});
