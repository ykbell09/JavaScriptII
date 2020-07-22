/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function() {

  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a hotel object constructor
  function Hotel(name, roomRate, discount) {
    this.name = name;
    this.roomRate = roomRate;
    this.discount = discount;
    this.offerPrice = () => {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return Math.round(offerRate);
    }
  };

  // Instantiate an array to hold the hotel objects
  const hotels = new Array;

  // Create hotel objects
  const parksideHotel = new Hotel('Parkside', 199.75, 12);
  const hiltonHotel = new Hotel('Hilton', 245.50, 7.5);
  const hyattHotel = new Hotel('Hyatt', 310.00, 10);
  const lincolnHotel = new Hotel('Lincoln', 225, 8);
  
  // push hotel objects to the hotels array
  hotels.push(parksideHotel, hiltonHotel, hyattHotel, lincolnHotel);

  // prompt the user to select a hotel by number and validate the number
  const selectHotel = () => {
    let selectedHotel = window.prompt('please enter a hotel number 0 through 3');
    if (selectedHotel >= hotels.length) {
      window.alert('you did not enter a valid hotel number');
      selectHotel();
    } else {
      return selectedHotel;
    }
  };
  let selectedHotel = selectHotel();

  // Write out the hotel name, standard rate, and the special rate
  let hotelName, roomRate, specialRate, discountRate;                    // Declare variables

  hotelName = document.getElementById('hotelName');        // Get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');
  discountRate = document.getElementById('discountRate');

  hotelName.textContent = hotels[selectedHotel].name;                      // Write hotel name
  roomRate.textContent = '$' + hotels[selectedHotel].roomRate.toFixed(2); // Write room rate
  specialRate.textContent = '$' + hotels[selectedHotel].offerPrice();      // Write offer price
  discountRate.textContent = hotels[selectedHotel].discount + '% off';        // Write discount rate
    
  
  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
}());