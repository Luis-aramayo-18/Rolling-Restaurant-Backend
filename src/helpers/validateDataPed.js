export const validateDataP = (body) => {
    const values = Object.entries(body);
  
    for (let i = 0; i < values.length; i++) {
      const key = values[i][0];
      const value = values[i][1];
  
      switch (key) {
        case 'description':
        case 'name':
        case 'categoria':    
          if (value.length < 2) return false;
          break;
          case 'mesa':
            case 'cantidad':
                case 'price':
                case 'subtot':
          if (isNaN(value)) return false;
          if (value < 0) return false;
          break;
        default:
          break;
      }
    }
  
    return true;
  };
  