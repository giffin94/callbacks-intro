// The second argument/parameter is expected to be a function


function findWaldo(arr, found, notFound) {
  arr.forEach(function(name, i) {
    if(name === "Waldo") {
      found(i);
    } else {
      notFound(i);
    }
  });
}



function actionWhenFound(i) {
  console.log("Found him at index: " + i + "!");
}

function actionWhenAbsent(i) {
  console.log("Waldo can't be found at index: " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston", "Waldo", "Waldo", "Waldo"], actionWhenFound, actionWhenAbsent);