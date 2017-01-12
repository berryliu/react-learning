/**
 * Created by berry on 17/1/10.
 */

export const ADD_DATA = 'ADD_DATA'

export function addData(data){
  return {
    type: ADD_DATA,
    data
  }
}