const keys = {
    POST_PRODUCT:["image","name","description","precio"]
}

export const validateContent = (type,body) =>{

    const bodyKeys = Object.keys(body)
    const expectedKeys = keys[type]

    //compruebo cantidad de datos
    if(expectedKeys.length !== bodyKeys.length){
        return false;
    }

    //compruebo cada campo
    expectedKeys.forEach((key) => {
        if(!bodyKeys.includes(key)){
            return false
        }
    });
   
    return true;
}