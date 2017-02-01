//counting sheep

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var count = 0;
  
  arrayOfSheep.forEach(function (el) {
    if (el) {
      count++;
    }
  });
  
  return count;
}

/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time required 
for all the customers to check out!

The function has two input variables:

    customers: an array (list in python) of positive integers representing 
    the queue. Each integer represents a customer, and its value is the 
    amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

The function should return an integer, the total time required.
*/

function findMinWait(tills) {
    var min = tills[0];
    var minPos = 0;
    
    for (var i = 1; i < tills.length; i++){
        if (tills[i] < min) {
            min = tills[i];
            var minPos = i;
        }
    }
    return minPos;
}

function queueTime(customers, n) {
  //TODO
  if (customers.length === 0) {
      return 0;
  }

  var tills = [];
  var i = 0;
  
  while (tills.length < n) {
    tills.push(customers[i]);
    i++;
  }

  for (var i = tills.length; i < customers.length; i++) {
      var nxtTill = findMinWait(tills);

      tills[nxtTill] += customers[i];
  }

  var max = tills[0];

  tills.forEach(function(el) {
      if (el > max) {
          max = el;
      }
  });

  return max;
}