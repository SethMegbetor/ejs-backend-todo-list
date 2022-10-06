const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let myDate = new Date();
  // res.sendStatus(today.getDay());
  let currentDay = myDate.getDay();
  // res.send(`today is: ${currentDay}`);

  let day = "";
  // if (currentDay === 6 || currentDay === 0) {
  //   day = "Weekend";
  // } else {
  //   day = "Weekday";
  // }
  // res.render("list", { kindOfDay: day });

  switch (currentDay) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 0:
      day = "Sunday";
      break;

    default:
      res.write("Error: current day is " + currentDay);
      break;
  }
  res.render("list", { kindOfDay: day });

  // let today = new Date();

  // let options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // let dayNumber = today.getDay();
  // let dayName = days[dayNumber];
  // console.log(dayNumber);
  // console.log(dayName);

  // console.log(today.toLocaleDateString("en-US", options));
});

app.listen(PORT, () => {
  console.log(`Server started. Listening on ${PORT}`);
});
