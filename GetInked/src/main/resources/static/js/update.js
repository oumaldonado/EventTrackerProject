window.addEventListener('load', function(e) {
	console.log('document loaded');
	find();
});
function update(tattooId){
	
	
	let form = document.updateTattooForm;

    let updatedTattoo = {
        id: tattooId,
        designName: form.designName.value,
        artistName: form.artistName.value,
        meaning: form.meaning.value,
        style: form.style.value,
        imageUrl: form.imageUrl.value
    }

    let xhr = new XMLHttpRequest();

    xhr.open('PUT', 'api/tattoos/' + updatedTattoo.id);  
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let updatedTattoo = JSON.parse(xhr.responseText);
                displayTattoo(updatedTattoo);
            } else {
                console.error("PUT request failed.");
                console.error(xhr.status + ': ' + xhr.responseText);
            }
        }
    }

    let updatedTattooJSON = JSON.stringify(updatedTattoo);
    xhr.send(updatedTattooJSON);

	
}