//les differentes formules pour avoir accés à la valeur acceleration
// a = acceleration
// a = F/m
// a = Δv/Δt
// a = 2d/t^2


// const val ={ 
//     f: 10,// F = force
//     Δv: 100,// Δv = final velocity - initial velocity
//     t:1, // t = time
//     d: 10 // d = distance
// }
//fonction qui retournel'acceleration grace à la deuxieme lois de newton
const getAcceleration = (Valeurs) =>{
    if (Valeurs.f != undefined && Valeurs.m != undefined){
//        console.log("avec force/masse");
        return Valeurs.f/Valeurs.m
    }else if (Valeurs.Δv != undefined && Valeurs.Δt != undefined){
//        console.log("avec delta,vitesse / delta, temps");
        return Valeurs.Δv/Valeurs.Δt
    }else if (Valeurs.t != undefined && Valeurs.d != undefined){
//        console.log("avec 2 fois distance /temps au carré");
        return 2*Valeurs.d/(Valeurs.t**2)
    }
    return "impossible"
}

// console.log(getAcceleration(val));
// console.log(2**2);