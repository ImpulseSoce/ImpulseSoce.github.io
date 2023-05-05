//loader text array of common programming puns
var content=[];
content[0]="What do programmers do when they’re hungry? They grab a byte.";
content[1]="Why do programmers like dark mode? Because light attracts bugs.";
content[2]="I like my coffee like I like my IDEs… Dark and free";
content[3]="Which Hogwarts house is able to communicate securely? SSLytheryn";
content[4]="Why do web developers wear glasses? To improve their site.";
content[5]="How many programmers does it take to change a light bulb? None – It’s a hardware problem";
content[6]="Debugging: Removing the needles from the haystack.";
content[7]="Feeding Developers";
content[8]="What is the object-oriented way to become wealthy? Inheritance.";
content[9]="What did the Java code say to the C code? You’ve got no class.";
content[10]="What do developers and air conditioners have in common? They both become useless with open windows.";


var loader = document.getElementById('load-text');
var contentIndex = 0;

//function to update the content of the div by choosing a random element from the above array 
function updateContent() {
  contentIndex = Math.floor(Math.random()*content.length);
  loader.innerHTML = content[contentIndex];
  
}

//setInterval(updateContent, 800);

updateContent();

//loader transition and visibility
window.onload = function() {
  setTimeout(function() {
    document.getElementById("load-cont").style.display = "none";
  }, 4500);
}