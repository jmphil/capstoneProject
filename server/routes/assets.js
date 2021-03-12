const express = require("express");
const router = express.Router();
const db = require("../models");

router.use(express.urlencoded({ extended: false })); //scrape email and pass from request header
router.use(express.json());

router.post("/assets", async (req, res) => {
    let checking = req.body.checking
    let savings= req.body.savings
    let investments= req.body.investments;
    let userId = req.body.userId;
    
    console.log(req.user);

    try {
        let records = await db.data.findAll({ where: { userId: userId } });
    
        if (records.length === 0) {
          //add a new record
    
        let asset = await db.data.create({checking: checking, savings: savings, investments: investments, userId: userId});
    
        
    
        return res.json(asset); 
    
        } else if(records.length === 1) {

          let updatedRecord = await db.data.update({checking: checking, savings: savings, investments: investments}, {where: {userId: userId}});
          let record = await db.data.findAll({ where: { userId: userId } });
          return res.json(record[0])  
            
        }
        else {
            return res.status(422).send({error: 'Asset already exists'});
        }
      } catch (error) {
          //send back error, can't access database
          return res.status(423).send({error: `Can't access database`});
      }
    // res.json({token: token(req.user),id: req.user.id, firstName: req.user.firstName, lastName: req.user.lastName})

});
//get data from db for user
router.get("/assets/:id", async (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  try{
    let records = await db.data.findAll({ where: { userId: userId } });
    console.log(records);
    if (records.length === 0){
      return res.status(422).send({error: 'No record found'});
    }
    else {
      return res.json(records[0])
    }
  }
  catch(error){
    return res.status(423).send({error: `Can't access database`});
  }
});

module.exports = router