//this is a combination of my two reducers
import {combineReducers} from 'redux';
import visibilityFilter from './visibilityFilter'
import todos from './todos';

export default combineReducers({todos, visibilityFilter}); //pass my two exported reducers as arguments of combineReducers