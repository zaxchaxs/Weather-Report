

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function() {
    
    const inputKeyword = document.querySelector('.input-keyword');
    const loaders = document.getElementById('loaders')
    showLoaders();
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputKeyword.value}?unitGroup=metric&key=TPBNKHG36TN3BMD7HNGDY5KZW&contentType=json`)
        .then(response => response.json()).then(response => {
            delLoaders();
            const aboutWeather = response;
            const details = secondBox(aboutWeather);

            const detailWeather = document.querySelector('.detailsWeather');
            detailWeather.innerHTML = details;
        });

        function showLoaders() {
            loaders.classList.remove('delLoaders')
        };
        function delLoaders() {
            loaders.classList.add('delLoaders')
        }
    });

// Request ke api udah lumayan, udah berbentuk object juga.






function secondBox(details) {
    return `<div class="addresGroup">
                <h2>Weather prediction in ${details.address}</h2>
                <p>${details.resolvedAddress}</p>
            </div>
            <div class="detailWheater">
                <form action="">
                    <table>
                        <tr>
                            <td>Date</td>
                            <td> : </td>
                            <td>${details.days[0].datetime}</td>
                        </tr>
                        <tr>
                            <td>Weather Prediction</td>
                            <td> : </td>
                            <td>${details.days[0].conditions}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td> : </td>
                            <td>${details.days[0].temp} Celcius</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td> : </td>
                            <td>${details.description}</td>
                        </tr>
                    </table>
                </form>
                <div class="imagesSecondBox">
                    <img src="image/statusWeather-icon/${details.days[0].icon}.gif" alt="Weather Icon">
                </div>
            </div>`
}