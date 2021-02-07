import { userActions } from '../actions'
import { User } from '../../models/user';
const { SET_LOADING, GET_USERS } = userActions;
interface InitialState {
  loading: boolean,
  users: User[]
}
interface Options {
  type: string,
  payload: User[]
  }
  const initialState = {
    loading: false,
    users: []
  }
  export default(state = initialState, { type, payload } : Options): InitialState => {
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
      default:
        return state
    }
  }