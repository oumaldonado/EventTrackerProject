window.addEventListener('load', function(e) {
    console.log('document loaded');
    find();
});

function update(tattooId) {
   

        let form = document.updateTattooForm;

        let header = document.createElement('h3');
        header.textContent = 'Tattoo Id: ' + tattooId;
        form.appendChild(header);

        // Create input elements
        var designNameInput = createInput("text", "designName", "Design Name");
        var artistInput = createInput("text", "artist", "Artist Name");
        var meaningInput = createInput("text", "meaning", "Meaning Of Tattoo");
        var styleInput = createInput("text", "style", "Style");
        var imageUrlInput = createInput("text", "imageUrl", "Image Url");

        // Create the submit button
        var submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.name = "update";
        submitButton.textContent = "Update";

        // Append elements to the form
        form.appendChild(designNameInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
        form.appendChild(artistInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
        form.appendChild(meaningInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
        form.appendChild(styleInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
        form.appendChild(imageUrlInput);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
        form.appendChild(submitButton);

        // Append the form to the body
        document.body.appendChild(form);

        // Function to create input elements
        function createInput(type, id, placeholder) {
            var input = document.createElement("input");
            input.setAttribute("type", type);
            input.id = id;
            input.placeholder = placeholder;
            return input;
        }
         document.updateTattooForm.update.addEventListener('click', function(event) {
        event.preventDefault();

        let updatedTattoo = {
            id: tattooId,
            designName: form.designName.value,
            artistName: form.artist.value, // Fixed the property name
            meaning: form.meaning.value,
            style: form.style.value,
            dateStarted: null,
            dateFinished: null,
            enabled: true,
            imageUrl: form.imageUrl.value
        };

        let xhr = new XMLHttpRequest();

        xhr.open('PUT', 'api/tattoos/' + tattooId);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let updatedTattoo = JSON.parse(xhr.responseText);
                    displayTattoo(updatedTattoo);
                } else {
                    console.error("PUT request failed.");
                    console.error(xhr.status + ': ' + xhr.responseText);
                }
            }
        };

        let updatedTattooJSON = JSON.stringify(updatedTattoo);
        xhr.send(updatedTattooJSON);
    });
}




function find() {
    document.updateTattooId.find.addEventListener('click', function(event) {
        event.preventDefault();
        let tattId = document.updateTattooId.id.value;
        if (!isNaN(tattId) && tattId > 0) {
            console.log("Tattoo ID: " + tattId);
            update(tattId);
        }
    });
}
