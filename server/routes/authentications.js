const express = require("express");
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require("bcryptjs"); //encrypt passwords
const db = require("../models");
const config = require('../secrets');

router.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
router.use(express.json());

const jwt = require("jwt-simple"); //used to create a jwt
const passport = require('passport');
require('../config/passAuth'); //import all of passport auth stuff

let requireSignin = passport.authenticate('local', {session: false});

/**
 * This function return a jwt
 */
const token = (user) => {
    
    let timestamp = new Date().getTime();  //current time

    return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}


router.get("/", (req, res) => {
  res.send("server running locally");
});

router.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
/**
 * logging in with credentials
 */
router.post("/signin", requireSignin, (req, res) => {
  //validate user

  //send token
  // console.log(req.user);
  res.json({token: token(req.user),id: req.user.id, firstName: req.user.firstName, lastName: req.user.lastName})

});

/**
 * registering a new user in our database and send back a jwt
 */
router.post("/signup", async (req, res) => {
  //body-parse to scrape info
  //email, password, firstName, lastName
  let firstName = req.body.firstName 
  let lastName = req.body.lastName
  let email = req.body.email;
  //encrypt: bcrypt
  let password = bcrypt.hashSync(req.body.password, 8);

  //models- store in database
  try {
    let records = await db.user.findAll({ where: { email: email } });

    if (records.length === 0) {
      //add a new record

      let user = await db.user.create({firstName: firstName, lastName: lastName, email: email, password: password});

      let jwtToken = token(user); //token returns a jwt

      return res.json({token: jwtToken}); //passing a jwt to client

    } else {
      //send back an error

      return res.status(422).send({error: 'Email already exists'});
    }
  } catch (error) {
      //send back error, can't access database
      return res.status(423).send({error: `Can't access database`});
  }

  //create jwt token

  //send back a token
});

module.exports = router;
