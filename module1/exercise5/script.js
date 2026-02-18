let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original array:", myArray);


myArray[1] = "blueberry";  
myArray[4] = "fig";        
console.log("After replacing position 1 and 4:", myArray);


myArray.unshift("apricot");
console.log("After adding to beginning:", myArray);


myArray.pop();
console.log("After removing last element:", myArray);


console.log("Final array:", myArray);