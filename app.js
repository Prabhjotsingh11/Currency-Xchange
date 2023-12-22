let apiKey='cba6bb80b4440f12e802f03e';
let outputButton = document.getElementById('button');
let outputValue = document.getElementById('output');
let fromCountry = document.getElementById('country1');
let toCountry = document.getElementById('country2');

outputButton.addEventListener('click', getExchange);

function getExchange(){
    let c1 = fromCountry.value;
    let c2 = toCountry.value;
    console.log(c1)
    console.log(c2)
    const url = `https://v6.exchangerate-api.com/v6/cba6bb80b4440f12e802f03e/pair/${c1}/${c2}`;
    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(result){
        const conversionRate = result.conversion_rate;
        outputValue.innerHTML = `${conversionRate}`; 
    })
}