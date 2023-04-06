

const keys = {
    POST_PRODUCT:["image","name","description","precio","categoria"]
}

export const validateContent = (type,body) =>{

    const bodyKeys = Object.keys(body)
    const expectedKeys = keys[type]

    if(expectedKeys.length !== bodyKeys.length){
        return false;
    }

    expectedKeys.forEach((key) => {
        if(!bodyKeys.includes(key)){
            return false
        }
    });
   
    return true;
}


const keysUsers = {
    POST_USER:["name","lastName","email","password"]
}

export const validateContentUser = (type,body) =>{

    const bodyKeys = Object.keys(body)
    const expectedKeys = keysUsers[type]

    if(expectedKeys.length !== bodyKeys.length){
        return false;
    }

    expectedKeys.forEach((key) => {
        if(!bodyKeys.includes(key)){
            return false
        }
    });
   
    return true;
}
