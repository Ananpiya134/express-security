const jwt = require('jsonwebtoken');


const payload = {
    message: "this is payload",
}

const secretKey = 'secret';

const token = jwt.sign(payload, secretKey, {
    expiresIn: 60
});

console.log(token);

const tokenToVerify = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoidGhpcyBpcyBwYXlsb2FkIiwiaWF0IjoxNjQ0NDc2MTkzLCJleHAiOjE2NDQ0NzYyNTN9.FOW05EBgvCl3quTAbjwDL1wiA_t38itcNZt5dR_VXMU"

try {
    const decoded = jwt.verify(tokenToVerify, 'secret');
    console.log(decoded);
} catch (err) {
    console.log(err.message);
}

