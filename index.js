const bcrypt = require('bcryptjs');

const message = '123456';
const run = async () => {
    const hashed = await bcrypt.hash(message, 10);
    console.log(hashed);
};

const test = async () => {
    const isMatch = await bcrypt.compare(
        message,
        '$2a$10$uI56hs/red6TMuyAyyZgCeeSwY2yy1gWLBt8w4WM.b.qYMkV0WLai');
    console.log(isMatch);
};

run();
test();
