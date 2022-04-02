function dogYears(Planet,Age_Second) {
    if (Planet == "earth"){
        return (Math.floor((Age_Second/31557600)*100)/100)*7
    }else if (Planet == "mercury"){
        return (Math.floor((Age_Second/mercury.Time)*100)/100)*7-0.01
    }else if (Planet == "venus"){
        return (Math.floor((Age_Second/venus.Time)*100)/100)*7-0.01
    }else if (Planet == "mars"){
        return (Math.floor((Age_Second/mars.Time)*100)/100)*7-0.01
    }else if (Planet == "jupiter"){
        return (Math.floor((Age_Second/jupiter.Time)*100)/100)*7-0.01
    }else if (Planet == "saturn") {
        return (Math.floor((Age_Second/saturn.Time)*100)/100)*7-0.01
    }else if (Planet == "uranus") {
        return (Math.floor((Age_Second/uranus.Time)*100)/100)*7-0.01
    }else if (Planet == "neptune"){
        return (Math.floor((Age_Second/neptune.Time)*100)/100)*7-0.01
    }
}

const earth ={
    Orbite: 1,
    Time :31557600
}
const mercury ={
    Orbite: 0.2408467,
    Time : earth.Time * 0.2408467
}
const venus ={
    Orbite: 0.61519726,
    Time :earth.Time* 0.61519726
}
const mars ={
    Orbite: 1.8808158,
    Time : earth.Time* 1.8808158
}
const jupiter ={
    Orbite: 11.862615,
    Time :earth.Time* 11.862615
}
const saturn ={
    Orbite: 29.447498,
    Time : earth.Time* 29.447498
}
const uranus ={
    Orbite: 84.016846,
    Time :earth.Time*84.016846
}
const neptune ={
    Orbite: 164.79132,
    Time : earth.Time*164.79132
}
//je me suis trompé de commit
//console.log(dogYears('earth', 1000000000), 221.82)

// mercury : orbital period 0.2408467 Earth years
// venus : orbital period 0.61519726 Earth years
// earth : orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
// mars : orbital period 1.8808158 Earth years
// jupiter : orbital period 11.862615 Earth years
// saturn : orbital period 29.447498 Earth years
// uranus : orbital period 84.016846 Earth years
// neptune : orbital period 164.79132 Earth years