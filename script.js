

items = [];


function validateForm(){
	const emailRegex = (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
	
	
	if(document.form.fname.value == "" && document.form.lname.value == ""){
		alert("Name need");
		return false
	}
	
	if(email.value.match(emailRegex)){
		return true;
	}
	else{
		alert("Invalid Email");
		return false;
	}
	
	if(document.form.histroy.selectedIndex == ""){
		alert("Please your history of knowgele");
		return false;
	}
	
	if(document.form.Male.checked == false && document.form.Female.checked == false){
		alert("Select Gender");
		return false;
	}
	
}
/*function validateEmail(email){
	const emailRegex = (/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
	
	if(email.value.match(emailRegex)){
		return true;
	}
	else{
		alert("Invalid Email");
		return false;
	}
}*/

function handleClick(e){

if (e.checked && !items.includes(e.value))
{
items.push(e.value);
} else {
index = items.indexOf(e.value);
x = items.splice(index, 1);
}

//document.getElementById("displayArray").innerHTML = items;


//console.log(items.toString());
console.log(JSON.stringify(items))

}

function completeForm(){
	validateForm();
	//validateEmail();
	handleClick();
}


function createEventListener(){
	var submitBtn = document.getElementById("submit");
	if(submitBtn.addEventListener){
		submitBtn.addEventListener("click", completeForm(), false)
	}
	else if(submitBtn.attachEventListener){
		submitBtn.attachEventListener("onclick", false);
	}
}

var countdown = new Date("date").getTime();

var x = setInterval(function DateCountdown(){
	
	var now = new Date("date").getTime();
	
	var distance = countdown - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	/*document.getElementById("Time").innerHTML = days + hours
	+ minutes + "m" + seconds + "s";*/
	 if(distance < 0){
	clearInterval(x);
	document.getElementById("demo").innerHTML = "Time up";
  }
},1000)

function createEventListener(){
	var subBtn = document.getElementById("submit");
	if(subBtn.addEventListener){
		subBtn.addEventListener("click", DateCountdown, false);
	}
	else if(subBtn.attachEventListener){
			subBtn.attachEventListener("onclick",DateCountdown);
		}
}


