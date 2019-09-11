let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === "/Users/gauri_dandi/Documents/Northeastern/2019-2020/DS4200/Homeworks/H1/homework-assignment-1-gdandi04/images/city-picture.jpeg") {
		myImage.setAttribute('src', "/Users/gauri_dandi/Documents/Northeastern/2019-2020/DS4200/Homeworks/H1/homework-assignment-1-gdandi04/images/city2.jpeg");
	} else {
		myImage.setAttribute('src', "/Users/gauri_dandi/Documents/Northeastern/2019-2020/DS4200/Homeworks/H1/homework-assignment-1-gdandi04/images/city-picture.jpeg");
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