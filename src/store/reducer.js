/**
 * Created by berry on 17/1/10.
 */

import {ADD_DATA} from './action'

const initialState = {
  data: []
}

function appStore (state = initialState, action) {
  if (action.type === ADD_DATA) {
    let id = state.data.length + 1
    return object.assign({}, state, {
      data: state.data.concat(action.data)
    })
  }

  return state
}

export default appStore
