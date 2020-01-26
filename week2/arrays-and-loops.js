// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	// your code here

	var result = arr.map((value) => {
		return value.toString();
	});
	return result;

}

console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
	// your code here

	var names;

	var result = arr.map((value) => {

		names = value["name"];
		return names;
	});

	return result;

}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	// your code here

	var newValues = arr.filter((value) => {
		return value["age"] >= 80;

	});

	var agesOnly;

	var result = newValues.map((value) => {

		agesOnly = value["age"];
		return agesOnly;
	});

	return result;

}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]
