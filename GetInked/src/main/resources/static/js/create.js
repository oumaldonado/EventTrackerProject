window.addEventListener('load', function(evt) {
	console.log('page loaded, DOM complete')
	
	

document.createTattoo.create.addEventListener('click', function(event) {
    event.preventDefault();
    createTattoos();
});
	
});

function createTattoos() {
    let form = document.createTattoo;

    let tattoo = {
        designName: form.designName.value,
        artist: form.artist.value,
        meaning: form.meaning.value,
        style: form.style.value,
        imageUrl: form.imageUrl.value,
        dateStarted: null,
        dateFinished: null,
        enabled: true
    }

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'api/tattoos');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 201 || xhr.status === 200) {
				
                let tattoo = JSON.parse(xhr.responseText);
                displayTattoo(tattoo);
                
            } else {
                console.error("POST request failed.");
                console.error(xhr.status + ': ' + xhr.responseText);
                displayTattoo(tattoo);
            }
        }
    }

    let tattooJSON = JSON.stringify(tattoo);
    console.log(tattooJSON);
    
    xhr.send(tattooJSON);
}

function displayTattoo(tattoo) {
    // Implement your logic to display the tattoo details
    console.log("Tattoo created:", tattoo);
}