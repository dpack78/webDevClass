var idCount = 0;
var trebCount = 5;
var fibCount = 5;
var pelCount = 5;
$(function(){
	$(".range").change(function(){
		var type = $(this).attr("data-type");
		var val = $(this).val();
		console.log(type);
		switch(type){
			case "1":
				$("#fib_btn").html("fib("+val+")");
				fibCount = val;
				break;
			case "2":
				$("#pel_btn").html("pel("+val+")");
				pelCount = val;
				break;
			case "3":
				$("#treb_btn").html("treb("+val+")");
				trebCount = val;
				break;
			default:
				console.log("error");
				break;
		}
	});
});

function runButton(runType){
	console.log(runType);
	switch(runType){
		case 1:
			$("#headFib").empty();
			alert("The answer is: " + fibinacci(fibCount));
			break;
		case 2:
			$("#headPel").empty();
			alert("The answer is: " + pel(pelCount));
			break;
		case 3:
			$("#headTreb").empty();
			alert("The answer is: " + trib(trebCount));
			break;
		default:
			console.log("error 2");
			break;
	}
}

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
    return rFib(i,"headFib");
}

function pel(i){
    return rPel(i,"headPel");
}

function trib(i){
    return rTrib(i,"headTreb");
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
