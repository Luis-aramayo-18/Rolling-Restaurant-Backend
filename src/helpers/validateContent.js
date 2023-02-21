//--------------------------VALIDATE PRODUCT

const keys = {
    POST_PRODUCT:["image","name","description","precio","categoria"]
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

//-----------------------VALIDATE USER

const keysUsers = {
    POST_USER:["name","lastName","email","password"]
}

export const validateContentUser = (type,body) =>{

    const bodyKeys = Object.keys(body)
    const expectedKeys = keysUsers[type]

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

//------------------------------VALIDATE ORDER
const keysOrder = {
    POST_ORDER:["mesa","categoria","name","description","cantidad","price","subtot","estado","email","isActive"]
}

export const validateContentOrder = (type,body) =>{

    const bodyKeys = Object.keys(body)
    const expectedKeys = keysOrder[type]

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