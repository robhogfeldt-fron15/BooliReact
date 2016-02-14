'use strict';
var crypto = require('crypto');
var shasum = crypto.createHash('sha1');

var myAuth = {};
myAuth.callerId = 'boolireact';
myAuth.time = Math.round(Date.now() / 1000);
myAuth.unique = crypto.randomBytes(Math.ceil(16/2)).toString('hex').slice(0, 16);
myAuth.hash = shasum.update(myAuth.callerId + myAuth.time + '2daKX1MRh2mJdOtcEif5AFh9Cq9DPOonu75q9ufX' + myAuth.unique).digest('hex');

export default myAuth;
