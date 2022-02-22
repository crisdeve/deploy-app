import React from 'react'

const stateReducer = (state , action) => {
  
  switch (action.type) {

    case 'EVENT_INCRESEAM':
      return {
        ...state,
        test: state.test + 1
      }
    
    case 'EVENT_DECRESEAM':
      return {
        ...state,
        test: state.test - 1
      }
    
    case 'HANDLE_TEXT_CHANGE':
      const { name , value, stateCurrent } = action.payload;
      return {
        ...state,
        [stateCurrent] : {...state[stateCurrent], [name] : value }
      }

    case 'CHANGE_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload
      }

      default:
        return state;
  }
}

export default stateReducer
