//---------------------------VALIDATE PRODUCT VALUE

export const validateData = (body) => {

    const values = Object.entries(body)

        for (let i = 0; i<values.length; i++){
        const key = values[i][0]
        const value = values[i][1]

    switch(key){
        case "image":
        const urlReg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/
        if(!urlReg.test(value)) return false
        
        break;

        case "description":
        case "name":
            if(!isNaN(value)) return false
            if(value.trim().length < 2) return false 
        break;

        case "price":
        if(isNaN(value)) return false
        if(value < 0) return false
        if(value > 3000) return false
        break

        default:
        break;
    }    
    }

    return true
}

//------------------------------VALIDATE USER VALUE

export const validateDataUser = (body) => {

    const values = Object.entries(body)

        for (let i = 0; i<values.length; i++){
        const key = values[i][0]
        const value = values[i][1]

    switch(key){
        case "email":
        const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!emailReg.test(value)) return false
        
        break;

        case "lastName":
        case "name":
        if(!isNaN(value)) return false
        if(value.trim().length < 2) return false 
        break;

        case "password":
        if(value.trim().length < 6) return false 
        const passReg = /(?=.*[a-z]){2}(?=.*[0-9]){2}/
        if(!passReg.test(value)) return false
        break

        default:
        break;
    }    
    }

    return true
}

