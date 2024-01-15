

window.addEventListener('load', function(evt) {
	console.log('page loaded, DOM complete')
	init();
	
});
function init() {

	loadTattooList();



}
function loadTattooList() {

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/tattoos');

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let tattooList = JSON.parse(xhr.responseText);
				console.log(tattooList);
				displayTattoos(tattooList);
			}

		}

	};

	xhr.send();
}
function displayTattoos(tattooList) {
	let dataDiv = document.getElementById('tattooListDiv');
	dataDiv.textContent = '';

	for (let tattoo of tattooList) {
		let designName = document.createElement('h3');
		designName.textContent = tattoo.designName;
		dataDiv.appendChild(designName);

		let meaning = document.createElement('blockquote');
		meaning.textContent = tattoo.meaning;
		dataDiv.appendChild(meaning);

		// Create a div for the image
		let imageDiv = document.createElement('div');

		// Create an img element for the image
		let imageElement = document.createElement('img');
		imageElement.src = tattoo.imageUrl;
		imageElement.alt = 'Tattoo Image'; // Add alt text for accessibility

		// Set a specific width and height for the images
		imageElement.style.width = '200px'; // Adjust the width as needed
		imageElement.style.height = '150px'; // Adjust the height as needed

		// Append the image element to the image div
		imageDiv.appendChild(imageElement);

		// Append the image div before the list
		dataDiv.appendChild(imageDiv);

		let list = document.createElement('ul');

		let listItem1 = document.createElement('li');
		let listItem2 = document.createElement('li');

		listItem1.textContent = 'Artist: ' + tattoo.artist;
		listItem2.textContent = 'Style: ' + tattoo.style;

		list.appendChild(listItem1);
		list.appendChild(listItem2);
		dataDiv.appendChild(list);
	}
}

