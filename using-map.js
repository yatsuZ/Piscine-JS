const citiesOnly = (L) =>{
    let l = []
    l = L.map(x=> x.city )
    return l
}
// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ])) // -> ['Los Angeles', 'San Francisco']