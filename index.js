function getDogImage() {
    const userNum = $('input').val();
    fetch(`https://dog.ceo/api/breeds/image/random/` + userNum)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => ('Something went wrong, please try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

function logResponse() {
    watchForm();
}

$(logResponse);