/*
CONTEXT:
First array  = Array of objects returned from the server
Second array = Array of string with elements to assing as a property of the objects of the first array.

Iterate over the first array and set the values to the object with the help of a index variable 
to check if the second array ran out of elements to reset the index to interate it again.

USE CASE: To iterate an array with least elements that another array in a foreach

*/

 let secondArray = [
      'dark-blue-color',
      'light-blue-color',
      'light-green-color',
      'ligth-orange-color',
      'light-red-color',
      'light-purple-color',
    ];

    let auxIndex = 0;
    let totalColors = colorArray.length;

    this.firstArray.forEach((elem, index) => {
      if (index == 0) {
        elem.color = colorArray[auxIndex];
      } else if (index % totalColors == 0 && index > 0) {
        auxIndex = 0;
        elem.color = colorArray[auxIndex];
      } else {
        elem.color = colorArray[auxIndex];
      }
      auxIndex = auxIndex + 1;
    });


