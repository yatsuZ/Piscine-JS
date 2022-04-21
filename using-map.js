const citiesOnly = (farr = []) => {
    let arr = [];
    farr.map( obj => arr.push(obj['city']))
    return arr
}

const upperCasingStates = (farr = []) => {
    let arr = [];
    farr.map( i => {  
        let ws = '';  
        let w = i;
        let words = w.split(' ');
        var map = Array.prototype.map;
        // var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
        let a = map.call(words, function(x) {
            return String(x).charAt(0).toUpperCase() + x.substr(1);
        })
        arr.push((a.join(' ')))
    });
    return arr
}
// console.log(upperCasingStates(['alabama','new jersey','alaska','new york','california','new Hampshire','ohio','texas','west virginia']))
const fahrenheitToCelsius = (farr = []) => {
    return farr.map(fdeg => String(Math.floor((Number((fdeg.replace('°F', ''))) - 32) * ((5/9)))) + '°C')
}
// console.log(fahrenheitToCelsius([
//     '30°C',
//     '37°C',
//     '5°C',
//     '12°C',
//     '-13°C',
//     '21°C',
//     '-19°C',
//   ]))
const trimTemp = (farr = []) => {
    let arr = farr.map(obj => {obj.temperature.trim()
    return obj;
    )
    return arr;
}
console.log(trimTemp([
    {
        city: 'Los Angeles',
        state: 'california',
        region: 'West',
        temperature: '         101°F ',
      },
  ]) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */)
const tempForecasts = (farr = []) => {
    return farr.map(obj => s = String(Math.round((Number((obj['temperature'].replace('°F', ''))) - 32) * ((5/9)))) + '°Clsius in '+ obj['city']+ ', '+ obj['state'].charAt(0).toUpperCase() + obj['state'].slice(1))
}
// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]))

 // -> ['38°Celsius in Pasadena, California']