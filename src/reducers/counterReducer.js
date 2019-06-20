const counterReducer = (value = 0, action) => {
    switch(action.type)
      {
         case "INCREMENT":
               value = value + 1;
          break;
          case "DECREMENT":
                value = value -1;
           break;
           default:
           return value;
      }
   return value;
 }

 export default counterReducer
 
  