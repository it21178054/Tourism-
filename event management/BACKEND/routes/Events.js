const router = require("express").Router();
const { Router } = require("express");

let Event = require("../models/Event");

router.route("/add").post((req,res) => {

    const name = req.body.name;
   // const [dateString1, timeString1] = req.body.start.split('T');
    //const [dateString2, timeString2] = req.body.end.split('T');
    //const [year1, month1, day1] = dateString1.split('-');
    //const [hours1, minutes1, seconds1] = timeString1.split(':');
    //const date= new Date(year1, month1-1, day1, hours1, minutes1);
    const date=req.body.date;
    const place = req.body.place;
    const count = Number(req.body.count);
    const email = req.body.email;
    const telephone = Number(req.body.telephone);

    const newEvent = new Event({
        name,
        date,
        place,
        count,
        email,
        telephone
    })
    
    newEvent.save().then(() =>{
        res.json("User added")
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/get").get((req,res) =>{

    Event.find().then((Events) =>{
        res.json(Events)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { name,
         date,
          place,
           count,
            email, 
            telephone } = req.body;
  
    const updateEvent = {
      name,
      date,
      place,
      count,
      email,
      telephone,
    }
  
    const update = await Event.findByIdAndUpdate(userId, updateEvent)
    .then(() => {
       res.status(200).send({status: "user updated"})
       }).catch((err) =>{
         console.log(err);
         res.status(500).send({status: "Error with updating data", error: err.message});
     })
  })
  
router.route("/delete/:id").delete(async (req,res) =>{
    let UserId = req.params.id;
    await Event.findByIdAndDelete(UserId).then(() =>{
        res.status(200).send({status: "Event deleted"});
    }).catch((err) =>{
        console.log("err.message");
        res.status(500).send({status: "Error with deleting data", error: err.message});
    })
})

router.route("/:id").get(async(req, res) => {
    let UserId = req.params.id;
    const event = await Event.findById(UserId)
    .then((event) =>{
        res.status(200).send({status: "Event fetched", event})
    }).catch((err) =>{
        console.log("err.message");
        res.status(500).send({status: "Error with fetched data", error: err.message});
    })
})
router.route('/Event/check').post(async(req, res) => {

    const name = req.body.name;
    const [dateString1, timeString1] = req.body.start.split('T');
   // const [dateString2, timeString2] = req.body.end.split('T');
    const [year1, month1, day1] = dateString1.split('-');
    const [hours1, minutes1, seconds1] = timeString1.split(':');
    const date= new Date(year1, month1-1, day1, hours1, minutes1);
    const place = req.body.place;

    const newEvent = new Event({

        name,
        date,
        place
    })

    const EventBooking = req.body;
    const query = `SELECT * FROM Event WHERE id = ${EventBooking.id}`;


     // Query the database
     connection.query(query, (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error querying database');
        } else {
          res.send(results);
        }
      });
    });
  




module.exports = router;
