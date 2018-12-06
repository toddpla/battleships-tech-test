import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import gameReducer from '../reducers/GameReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      game: gameReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store;
}
