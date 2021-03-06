//Set up some CSS
// document.body.style.background = "url('https://static.pexels.com/photos/29724/pexels-photo-29724.jpg') no-repeat fixed center";
// document.body.style.backgroundSize = "cover";
var cssFile = document.createElement("style");
cssFile.type = "text/css";
cssFile.innerHTML = ".node { display: inline-block; background-color: white; color: black; padding: 5px; float: left; border: solid 1px black; margin: 3px; box-shadow: 0 5px 9px 0}"+
				".header` { background-color: white; color: black; padding: 5px; text-align: center;  display: block; }" +
					"body { overflow-x:scroll; min-width: 30000px; }" +
					".spacer{ padding: 200px;}" +
					"a{ margin-left: 20px;}" +
					".c1{ background-color: rgb(79, 255, 228); }" +
					".c2{ background-color: rgb(79, 235, 228)}" +
					".c3{ background-color: rgb(79, 205, 228)}" +
					".c4{ background-color: rgb(79, 180, 228)}" +
					".c5{ background-color: rgb(79, 150, 228)}" +
					".c6{ background-color: rgb(79, 120, 228)}" +
					".c7{ background-color: rgb(79, 90, 228)}" +
					".c8{ background-color: rgb(79, 60, 228)}" +
					".c9{ background-color: rgb(79, 30, 228)}" +
					".c10{ background-color: rgb(79, 0, 228)}" +
					".c11{ background-color: rgb(79, 0, 228)}";

document.head.appendChild(cssFile);
document.querySelector('title').innerHTML = "The cool header";
var idCount = 0;
var answersDiv = document.createElement("div");
document.body.appendChild(answersDiv);
fibinacci(11);
addSpacer();
pel(11);
addSpacer();
trib(11);

function addSpacer(){
	var spacer = document.createElement("div");
	spacer.innerHTML = "-";
	spacer.classList.add("spacer");
	document.body.appendChild(spacer);
}

function createLearnLink(link){
	var myLink = document.createElement("a");
	myLink.href = link;
	myLink.innerHTML = "Learn More Here";
	answersDiv.appendChild(myLink);
}

function createDiv(idName,className,parentID){
	var newDiv = document.createElement("div");
	newDiv.id = idName;
    newDiv.classList.add(className);
	if(parentID == -1){
		document.body.appendChild(newDiv);
	}else{
		var parentDiv = document.getElementById(parentID);
		parentDiv.appendChild(newDiv);
	}
}
;
function fibinacci(i){
	var newDiv = document.createElement("div");
	newDiv.id = "headFib";
    newDiv.classList.add("fib");
    newDiv.classList.add("c" + i);
	document.body.appendChild(newDiv);
    var val = rFib(i,"headFib");
	answersDiv.appendChild(document.createTextNode("Fibinacci of " + i + ": " + val));
	createLearnLink("https://oeis.org/A000045");
	answersDiv.appendChild(document.createElement("br"));
}

function pel(i){
	var newDiv = document.createElement("div");
	newDiv.id = "headPel";
    newDiv.classList.add("pel");
    newDiv.classList.add("c" + i);
	document.body.appendChild(newDiv);
    var val = rPel(i,"headPel");
	answersDiv.appendChild(document.createTextNode("Pell of " + i + ": " + val));
	createLearnLink("https://oeis.org/A000129");
	answersDiv.appendChild(document.createElement("br"));
}

function trib(i){
	var newDiv = document.createElement("div");
	newDiv.id = "headTreb";
    newDiv.classList.add("trib");
    newDiv.classList.add("c" + i);
	document.body.appendChild(newDiv);
    var val = rTrib(i,"headTreb");
	answersDiv.appendChild(document.createTextNode("Tribinacci of " + i + ": " + val));
	createLearnLink("https://oeis.org/A000073");
	answersDiv.appendChild(document.createElement("br"));
}

function rFib(i,parentID){
	var newDiv = document.createElement("div");
    newDiv.innerHTML = "<div class='header'>rFib("+i+")</div>";
    newDiv.classList.add("node");
    newDiv.classList.add("c" + i);
	var myID = idCount + "_id";
	newDiv.id = myID;
	idCount ++;

	var parentDiv = document.getElementById(parentID);
	parentDiv.appendChild(newDiv);
    if(i == 0) {
		return 0;
	}

    if(i == 1) {
		return 1;
	}

	var child1 = rFib(i-1,myID);
	var child2 = rFib(i-2,myID);
	return child1 + child2;
}

function rPel(i,parentID){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<div class='header'>rPel("+i+")</div>";
    newDiv.classList.add("node");
    newDiv.classList.add("c" + i);
	var myID = idCount + "_id";
	newDiv.id = myID;
	idCount ++;

	var parentDiv = document.getElementById(parentID);
	parentDiv.appendChild(newDiv);
    if(i == 0) {
		return 0;
	}

    if(i == 1) {
		return 1;
	}

	var child1 = rPel(i-1,myID);
	var child2 = rPel(i-2,myID);
	return 2*child1 + child2;
}

function rTrib(i,parentID){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<div class='header'>rTreb("+i+")</div>";
    newDiv.classList.add("node");
    newDiv.classList.add("c" + i);
	var myID = idCount + "_id";
	newDiv.id = myID;
	idCount++;

	var parentDiv = document.getElementById(parentID);
	parentDiv.appendChild(newDiv);

    if(i <= 1) {
		return 0;
	}

    if(i == 2) {
		return 1;
	}
	var child1 = rTrib(i-1,myID);
	var child2 = rTrib(i-2,myID);
	var child3 = rTrib(i-3,myID);
	return child1 + child2 + child3;
}
