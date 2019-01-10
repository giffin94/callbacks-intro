// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  var currentElement = 0;
  arr.forEach(function(name) {
    if(name === "Waldo") {
      found(currentElement);
    }
    currentElement++;
  });
}



function actionWhenFound(i) {
  console.log("Found him at index: " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo", "Waldo", "Waldo"], actionWhenFound);