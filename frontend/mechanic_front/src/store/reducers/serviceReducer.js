/** @format */

const initialState = [
  ]
;
export function serviceReducer(state = initialState, action) {
  const body = action.data;
  // console.log(body)

  switch (action.type) {
    case "ON_LOAD":
      return {
        ...state,body
      };
    default:
      return state;
  }
}
