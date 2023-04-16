import { NICKNAME } from "../../actions";

const inicialState = {
    nickname: '',
  };
  
  const nickname = (state = inicialState, action: any) => {
    switch (action.type) {
    case NICKNAME:
      return ({
          nickname: action.payload,
      });
    default:
      return state;
    }
  };
  
  export default nickname;