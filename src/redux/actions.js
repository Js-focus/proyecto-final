// 1 Declarar la propiedad en el objeto actions
//2 Crear el case con la propiedad creada en 1 
//3 hacer la funcion que retorne la accion
//4 Despachar la funcion en un componente o un thunk

import axios from "axios"


export const actions ={
    setProducts: "SET_PRODUCTS",
    setIsLoading: "SET_IS_LOADING",
    setCategories: "SET_CATEGORIES",
    setQuantity: "SET-QUANTITY",
    setProductsCart: "SET_PRODUCTS_CART",
    setUserPurchases: "SET_USER_PURCHASES"
}



export const setProducts = products => ({
    type: actions.setProducts,
    payload: products
})

export const setIsLoading = isLoading => ({
    type:actions.setIsLoading,
    payload: isLoading
})

export const setCategories = categories => ({
    type: actions.setCategories,
    payload: categories
})

const getConfig = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});


export const setQuantity = quantity => ({
    type: actions.setQuantity,
    payload: quantity
})
export const setProductsCart = products => ({
    type: actions.setProductsCart,
    payload: products
})
export const setUserPurchases = purchases => ({
    type: actions.setUserPurchases,
    payload: purchases
})

export const getProductsThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => dispatch(setProducts(res.data.data)))
            .finally(()=> dispatch(setIsLoading(false)))
        }
}
export const getCategoriesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => dispatch(setCategories(res.data.data)))
            .finally(()=> dispatch(setIsLoading(false)))
    }
}
export const filterCategoryThunk = id => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`)
            .then(res => dispatch(setProducts(res.data.data)))
            .finally(()=> dispatch(setIsLoading(false)))
    }
}
export const filterNameThunk = (name) => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${name}`)
        .then(res => dispatch(setProducts(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));    
        
    }
}
export const loginThunk = credentials => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', credentials)
        .finally(() => dispatch(setIsLoading(false)));
    }
}

export const addProduct = arr => {
    return dispatch => {
        dispatch(setIsLoading(true));
        return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", arr, getConfig())
        .finally(()=> dispatch(setIsLoading(false)));

    }
}
export const getUserCartThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then(res => dispatch(setProductsCart(res.data.data.cart.products)))
        .catch(error => {
            if(error.response?.status === 404){
                console.log("El carrito esta vacio")
            }
        })
        .finally(dispatch(setIsLoading(false)))
    }
}
export const getUserPurchasesThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
        .then(res => dispatch(setUserPurchases(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)))
    }
}
export const deleteProductCartThunk = idProduct => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${idProduct}`, getConfig())
        .catch(error => console.log(error.response?.status))
        .finally(() => dispatch(setIsLoading(false)))
    }
}
export const purchaseCartThunk = body => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`, body , getConfig())
        .catch(error => console.log(error.response?.status))
        .finally(() => dispatch(setIsLoading(false)))
    }
}