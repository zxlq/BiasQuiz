import React, { Component } from "react";

class Timestamp extends Component {
  constructor(props) {
    super(props);
    console.log("This is the constructor");
  } // end constructor

  // just a quick method to print the current timestamp.
  printDate() {
    return new Date().toLocaleString();
  }
  // Let's write our own function to figure out the textual
  // day of the week. We can use Javascript's Date class to help
  // us in this task. In terms of days of week Sunday is day 0,
  // Saturday is day 6 according to Javascript.
  getDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    //Use the getDay() method from React Javascript to get the day.
    // This gives the day number in the current week from
    // today's date.
    let dayIndex = new Date().getDay();
    // Use this index to return the corresponding text version of
    // the day of the week
    return daysOfWeek[dayIndex];
  }

  // return true or false if the date is the weekend.
  isWeekend() {
    //Use the getDay() method from React Javascript to get the day.
    // This gives the day number in the current week from
    // today's date.
    let dayIndex = new Date().getDay();
    // if index is 6 (Saturday) or 0 (Sunday)
    return dayIndex === 6 || dayIndex === 0;
  }

  // Here we have our own song recommendation 'algorithm' or array
  // for the user. We need the day of the week input as theDay
  // we create an array of song objects.
  songForTheDay(theDay) {
    let songDays = [
      { day: "Monday", song: "The Boomtown Rats: I hate Mondays" },
      { day: "Tuesday", song: "The Rolling Stones: Ruby Tuesday" },
      {
        day: "Wednesday",
        song: "Simon & Garfunkel: Wednesday Morning, 3 A.M."
      },
      { day: "Thursday", song: "David Bowie: Thursday’s Child" },
      { day: "Friday", song: "The Cure: Friday I'm in Love" },
      { day: "Saturday", song: "Whigfield:  Saturday Night" },
      { day: "Sunday", song: "Velvet Underground: Sunday Morning" }
    ];
    // the classic problem to find an object in an array
    // we use a while loop which will quit if we find the object before
    // the end of the array.
    let dayFound = 0; // we have not found the object yet
    let returnDay = null; // this is the current object
    let i = 0;
    while (i < songDays.length && dayFound === 0) {
      if (songDays[i].day === theDay) {
        dayFound = 1; // set dayFound equal to a non zero value
        // create the object for return
        returnDay = { day: songDays[i].day, song: songDays[i].song };
      }
      i++; // increment the while loop counter.
    }
    return returnDay;
  }

  render() {
    return (
      <div className="App">
        <h1>CS385 Daily Songs</h1>
        <p>Timestamp: {this.printDate()}</p>
        <hr />
        {this.isWeekend() && (
          <p>
            <b>Woohoo! It's the weekend.</b>
          </p>
        )}
        It's <b>{this.getDayOfWeek()}. </b>
        Our song recommendation for today is:
        <i>{this.songForTheDay(this.getDayOfWeek()).song}</i>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default Timestamp;
