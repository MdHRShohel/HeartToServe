import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore } from 'redux'
import formReducer from './reducers/formReducres'

const store = createStore(formReducer, composeWithDevTools())

export default store