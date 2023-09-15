

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function() {
    
    const inputKeyword = document.querySelector('.input-keyword');
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bogor?unitGroup=metric&key=TPBNKHG36TN3BMD7HNGDY5KZW&contentType=json`)
        .then(response => response.json()).then(response => {
            const detailWeather = response;

        });
});

// Request ke api udah lumayan, udah berbentuk object juga.