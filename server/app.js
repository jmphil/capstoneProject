
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(require('./routes/authentications'));
app.use(require('./routes/assets'));

app.listen(3001, ()=>{
    console.log(`listening on port 3001`);
})
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });


// const jwt = require('jwt-simple'); // create a jwt token

// user information 

// let userInfo = {
//     id: '12345',
//     userName: 'Veronica',
//     email: 'me@me.com'
// }

//create a function that returns a jwt token

// const token = (user) => {

//     let timestamp = new Date().getTime();  //current time
    
//     return jwt.encode({sub: user.id, name: user.userName, iat:timestamp}, "lskjdfls;j;lfkajdljlds"); //encode creates tokent
// }

/// call function and pass our user 

// let jwtToken = token(userInfo);

// console.log(jwtToken);

