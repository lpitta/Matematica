var sum = 0;
  var num;
  num = prompt("Enter new value, or 0 to end");
  while (num != 0) {
    sum = sum + parseInt(num);
    num = prompt("Enter new value, or 0 to end");
  }
  alert("Soma final = " + sum);
