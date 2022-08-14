function quick_Sort(arr) {
	if (arr.length <= 1) { 
		return arr;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
		let pivot = arr.pop();
		

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] <= pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

let myArray = [3, 0, 2, 5, -1, 4, 1 ];


console.log(quick_Sort([8,4,23,42,16,15]));
module.exports=quick_Sort;