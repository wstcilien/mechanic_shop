const initialState ={
    id:0,
    firstName:"",
    address:{},
    email:"",
    number:0,
    userName:"",
    passWord:"",
    cars:[],
    lastName:"",
    isLoggedIn:false,
    token:""

}
export function userReducer(state = initialState, action) {
    const body = action.action;
	switch (action.type) {
		case "LOGOUT_USER":
			return {
				...initialState
			};

		case "UPDATE_ID":
			return {
				...state,
				id: action.payload
			};
        case "SIGNIN_USER":
            return{
                ...state,
                firstName:body.firstName,
                address:body.address,
                email:body.email,
                number:body.number,
                userName:body.userName,
                passWord:body.passWord, 
                cars:body.cars,
                lastName:body.lastName,
                isLoggedIn:true
            }    

		case "UPDATE_USERNAME":
			return {
				...state,
				userName: action.payload
			};

		case "UPDATE_NAME_FIRST":
			return {
				...state,
				firstName: action.payload
			};

		case "UPDATE_NAME_LAST":
			return {
				...state,
				lastName: action.payload
			};

		case "UPDATE_EMAIL":
			return {
				...state,
				email: action.payload
			};
		default:
			return state;
	}
}
