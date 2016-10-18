//data
var streetNumber = [1, 250, 770, 3630];
var streetName = ["Infinite Loop", "South 850 East", "Broadway", "South Geyer Rd"];
var cityName = ["Cupertino", "Lehi", "New York", "St Louis"];
var stateName = ["CA", "UT", "NY", "MO"];
var zipCode = [95014, 84043, 10003, 63127];
var address = [streetNumber, streetName, cityName, stateName, zipCode]


function nextRandom(number) {
  return Math.floor((Math.random() * number));
}

function print() {
  //random count
  var random1 = nextRandom(streetNumber.length);
  var random2 = nextRandom(streetName.length);
  var random3 = nextRandom(cityName.length);
  var random4 = nextRandom(stateName.length);
  var random5 = nextRandom(zipCode.length);
  var randomAddress = streetNumber[random1] + " " + streetName[random2] + ", " + cityName[random3] + " " + stateName[random4] + ", " + zipCode[random5];
  console.log(randomAddress);
}

print();


// questions:
// can i dry up the random number generation?
