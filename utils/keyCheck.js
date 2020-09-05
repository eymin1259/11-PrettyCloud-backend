const keyCheck = ( neededKey, reqBodyKeys) => {
    for (let i=0; i<neededKey.length; i++){
        if ( !reqBodyKeys.includes(neededKey[i]) ){
           return false
        }
    }
    return true;
}

module.exports = keyCheck;