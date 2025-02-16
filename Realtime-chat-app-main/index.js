const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex'); // 32 bytes = 64 hex characters
console.log(secretKey);
