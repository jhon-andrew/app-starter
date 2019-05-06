import { createConnectedStore } from 'undux'
import effects from './effects'

export const initialState = {
  user: undefined
}

export default createConnectedStore(initialState, effects)
