let exampleTestCase = [1,5,6,7,34,10,300]; 

// Make a function to get the profit that takes in an array
const getProfit = (arr) => {
	let profits = []; 
	// If only one value in the array then we print out zero 
	if(arr.length === 1) {
		return 0;
	} else {
		// Loop through this array
		for(let i = 0; i < arr.length; i++) {
			// For each value, we want to check the next couple of values till the end of array. 
			for(let j = arr[i + 1]; j < arr.length; j++) {
				// Subtract the values to get the profit and push to profits
				let profit = arr[j] - arr[i]; 
				profits.push(profit);
			}
		}
		if(Math.max(...profits) > 0) {
			return Math.max(...profits); 
		} else {
			// If profits are a neg value then print out -1
			return -1; 
		}
	}
}