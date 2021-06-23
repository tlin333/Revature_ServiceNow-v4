var input = "Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0"
var result = input.split('*')
var coldCities = []
var moderateCities = []
var hotCities = []

for (i = 0; i <= result.length - 1; i++){
  var temperatureCelsius = result[i].split('|')
  
  var resultCelsius = (temperatureCelsius[1] - 32) * (9/5)
  if(resultCelsius < 20)
    coldCities.push(result[i]+ " celsius = (" + resultCelsius.toFixed(1) + ")")
  else if(resultCelsius > 20 && resultCelsius < 30)
    moderateCities.push(result[i]+ " celsius = (" + resultCelsius.toFixed(1) + ")")
  else if(resultCelsius > 30)
    hotCities.push(result[i]+ " celsius = (" + resultCelsius.toFixed(1) + ")")
}

console.log("Cold Cities: " + coldCities)
console.log("Moderate Cities: " + moderateCities)
console.log("Hot Cities: " + hotCities)