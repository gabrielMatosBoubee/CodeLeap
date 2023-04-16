import { POPUP } from "../../actions";

const inicialState = {
    isPopUpOpen: false,
  };
  
  const popUp = (state = inicialState, action: any) => {
    switch (action.type) {
    case POPUP:
      return ({
          isPopUpOpen: action.payload,
      });
    default:
      return state;
    }
  };
  
  export default popUp;