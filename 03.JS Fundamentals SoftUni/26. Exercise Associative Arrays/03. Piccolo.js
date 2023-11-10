// 3. Piccolo

// Write a function that:

// · Records a car number for every car that enters the parking lot

// · Removes a car number when the car goes out

// · Input will be an array of strings in format [direction, carNumber]

// Print the output with all car numbers which are in the parking lot sorted in ascending by number.

// If the parking lot is empty, print: "Parking Lot is Empty".

function piccolo(arr) {
  let parkingLot = [];
  for (let each of arr) {
    //console.log(each);
    let [dir, carNumber] = each.split(", ");
    //console.log(dir);
    //console.log(carNumber);
    if (dir == "IN") {
      if (parkingLot.indexOf(carNumber) == -1) {
        parkingLot.push(carNumber);
      }
    } else {
      let carIndex = parkingLot.indexOf(carNumber);
      if (carIndex >= 0) {
        parkingLot.splice(carIndex, 1);
      }
    }
  }
  if (parkingLot.length > 0) {
    parkingLot.sort();
    console.log(parkingLot.join("\n"));
  } else {
    console.log(`Parking Lot is Empty`);
  }
}

piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
