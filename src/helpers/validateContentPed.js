  const keys = {
    POST_PEDIDO: ['mesa','categoria', 'name', 'description', 'cantidad', 'price', 'subtot', 'username'],
  };
  
  export const validateContentP = (type, body) => {
    const bodyKeys = Object.keys(body);
    const expectedKeys = keys[type];
    // puedo acceder a un campo de mi objeto con el nombre "campo" poniendo objeto["campo"]
  
    //   Compruebo cantidad de datos
    if (expectedKeys.length !== bodyKeys.length) {
      return false;
    }
  
    //   Compruebo cada campo
    expectedKeys.forEach((key) => {
      if (!bodyKeys.includes(key)) {
        return false;
      }
    });
  
    return true;
  };
  