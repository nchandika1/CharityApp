const db = require("../models");

db.sequelize.sync({force: true}).then(function(){
  console.log("CONNECTED to MySQL dB");
}

const userSeed = [
  {
    email: "naga@naga.com",
    first: "Naga",
    last: "Chandika",
    addrLine1: "125 Bored Ln"
    city: "Melbourne",
    state: "CA",
    zipCode: "99999"
  },
  {
    email: "sudhit@sudhit.com",
    first: "Sudhit",
    last: "Rao",
    addrLine1: "125 Hillview Ln"
    city: "Hillview",
    state: "CA",
    zipCode: "99000"
  }
];

db.User
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
