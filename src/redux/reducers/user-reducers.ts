import { userActions } from '../actions'
  const {  SET_LOADING,
    GET_USERS,
    SET_USER_TITLE,
    CREATE_USER,
    DELETE_USER,
    CLEAR_USER_TITLE
   } = userActions;
  // Define your state here
  const initialState = {
    loading: false,
    users: [],
    title: ''
  }
  
  // This export default will control your state for your application
  export default(state = initialState, {type, payload}) => {
    switch(type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true
        }
      case GET_USERS:
        return {
          ...state,
          users: payload,
          loading: false
        }
      case SET_USER_TITLE:
        return {
          ...state,
      title: payload
        }
      case CREATE_USER:
        return {
      ...state,
      users: [payload, ...state.users],
      loading: false
        }
      case CLEAR_USER_TITLE:
        return {
          ...state,
      title: ''
        }
      case DELETE_USER:
        return {
          ...state,
      users: state.users.filter(USER => USER.id !== payload),
      loading: false
        }
      default:
        return state
    }
  }