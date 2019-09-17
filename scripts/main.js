let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === "images/city-picture.jpeg") {
		myImage.setAttribute('src', "images/city2.jpeg");
	} else {
		myImage.setAttribute('src', "images/city-picture.jpeg");
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'Hi, ' + myName + '!';
	}
}

myButton.onclick = function() {
	setUserName();
}