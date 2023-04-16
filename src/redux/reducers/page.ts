import { PAGE } from "../../actions";

const inicialState = {
    page: 1,
  };
  
  const pagination = (state = inicialState, action: any) => {
    switch (action.type) {
    case PAGE:
      return ({
          page: action.payload,
      });
    default:
      return state;
    }
  };
  
  export default pagination;