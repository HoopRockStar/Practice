var my_alert = document.getElementById("myid1");
alert(my_alert.title);
var new_div = document.createElement("div");
var new_div_text = document.createTextNode("See you!");
new_div.appendChild(new_div_text);
my_alert.appendChild(new_div);
