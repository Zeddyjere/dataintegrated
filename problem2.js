// Flaten the array 
let exampleArray = [1,2,[3,4,[5,6], 7, [8, 9]]]; 

// Function to flatten the array
const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

flatten(exampleArray); 