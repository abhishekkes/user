// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample users data (20 users)
const users = [
    { username: 'user1', password: 'password1', email: 'user1@example.com', usertype: 'admin', dob: '1990-01-01' },
    { username: 'user2', password: 'password2', email: 'user2@example.com', usertype: 'user', dob: '1985-05-10' },
    { username: 'user3', password: 'password3', email: 'user3@example.com', usertype: 'user', dob: '1992-06-15' },
    { username: 'user4', password: 'password4', email: 'user4@example.com', usertype: 'admin', dob: '1988-11-22' },
    { username: 'user5', password: 'password5', email: 'user5@example.com', usertype: 'user', dob: '1993-02-18' },
    { username: 'user6', password: 'password6', email: 'user6@example.com', usertype: 'admin', dob: '1991-03-25' },
    { username: 'user7', password: 'password7', email: 'user7@example.com', usertype: 'user', dob: '1994-08-30' },
    { username: 'user8', password: 'password8', email: 'user8@example.com', usertype: 'user', dob: '1995-12-17' },
    { username: 'user9', password: 'password9', email: 'user9@example.com', usertype: 'admin', dob: '1987-09-14' },
    { username: 'user10', password: 'password10', email: 'user10@example.com', usertype: 'user', dob: '1996-04-20' },
    { username: 'user11', password: 'password11', email: 'user11@example.com', usertype: 'user', dob: '1989-01-05' },
    { username: 'user12', password: 'password12', email: 'user12@example.com', usertype: 'admin', dob: '1993-10-11' },
    { username: 'user13', password: 'password13', email: 'user13@example.com', usertype: 'user', dob: '1984-07-08' },
    { username: 'user14', password: 'password14', email: 'user14@example.com', usertype: 'user', dob: '1990-02-23' },
    { username: 'user15', password: 'password15', email: 'user15@example.com', usertype: 'admin', dob: '1986-12-19' },
    { username: 'user16', password: 'password16', email: 'user16@example.com', usertype: 'user', dob: '1995-03-01' },
    { username: 'user17', password: 'password17', email: 'user17@example.com', usertype: 'user', dob: '1991-05-25' },
    { username: 'user18', password: 'password18', email: 'user18@example.com', usertype: 'admin', dob: '1989-08-14' },
    { username: 'user19', password: 'password19', email: 'user19@example.com', usertype: 'user', dob: '1993-04-08' },
    { username: 'user20', password: 'password20', email: 'user20@example.com', usertype: 'user', dob: '1988-06-22' }
];

// Endpoint to retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
