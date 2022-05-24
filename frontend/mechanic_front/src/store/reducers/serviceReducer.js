/** @format */

const initialState = {
  dropOff: [
    {
      id: 0,
      name: "Brake",
      imgURL: 0,
      rating: 3,
      products: ["adf", "adadd", "dhsdf"],
    },
    {
      id: 1,
      name: "Fluid",
      imgURL: 0,
      rating: 3,
      products: ["adf", "adadd", "dhsdf"],
    },
  ],
  order: [
    {
      id: 0,
      name: "Brake",
      imgURL: 0,
      rating: 3,
      products: ["adf", "adadd", "dhsdf"],
    },
  ],
};
export function serviceReducer(state = initialState, action) {
  const body = action.action;
  // console.log(body)

  switch (action.type) {
    case "ON_LOAD":
      return {
        ...state,
        dropOff: body.dropOff,
        order: body.order,
      };
    default:
      return state;
  }
}
