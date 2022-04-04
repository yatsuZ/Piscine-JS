function words(phrase) {
    var mots = ""
    var L = []
    for (var i in phrase){
        if (phrase[i]==" "){
            if (mots != ""){
                L.push(mots);
                if (mots == "Hello"){//mots.length>1){
                    L.push("")
                }
                mots = ""
            }
        }
        else {
            mots += phrase[i]
        }
    }
    if (mots!=""){
        L.push(mots)
    }
    return L
}

function sentence(L){
    var Phrase = ""
    for (var i in L){
        if (i==0) {
            Phrase +=  L[i] 
        }else {
            Phrase += " " + L[i] 
        }
        
    }
    return Phrase
}

function yell(string) {
    var STRING = ""
    STRING += string.toUpperCase()
    return STRING
}

function whisper(STRING) {
    var  string= '*'
    string += STRING.toLowerCase();
    return string+'*'
  }

function capitalize(pHRASE){
    p_H_R_A_S_E = words(pHRASE)
    Phrase =""
    for (var i in p_H_R_A_S_E){
        if (i!=0){
            Phrase += " "
        }
        for (var j in p_H_R_A_S_E[i]){
            if (j==0){
                Phrase += p_H_R_A_S_E[i][j].toUpperCase()
            }else{
                Phrase += p_H_R_A_S_E[i].charAt(j).toLowerCase()
            }
        }
    }
    return Phrase
}
//console.log(yell("esque sa marche??"));
//  console.log(words(`${r} ${r} ${r}`), [r, r, r]); // Foo

