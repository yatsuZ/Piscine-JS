const repeat = (S,N) => {
    if (N == 0){
        return ""
    }else {
        return S+repeat(S,N-1)
    }
}