import { actions } from "./actions";

const INITIAL_STATE = {
    products: [],
    isLoading: false,
    categories: [],
    quantity: 1,
    productsCart: [],
    userPurchases: []
  
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
            case actions.setProducts:
                return {
                    ...state,
                    products: action.payload
                }
            case actions.setIsLoading:
                return{
                    ...state,
                    isLoading: action.payload
                }    
            case actions.setCategories:
                return{
                    ...state,
                    categories: action.payload
                }    
            case actions.setQuantity:
                return{
                    ...state,
                    quantity: action.payload
                }  
            case actions.setProductsCart:
                return{
                    ...state,
                    productsCart : action.payload
                } 
            case actions.setUserPurchases:
                return {
                    ...state,
                    userPurchases: action.payload
                }           
        default:
            return state;
    }
}

export default reducer;