import axios from 'axios';

const endpointUrl = process.env.REACT_APP_STORE_API_URL + "/product";

export const productsApiService = {


    getAllProducts: async() => {
        const response = await axios.get(endpointUrl);
        return response.data;
    },

    getProduct: async(productId) => {
        console.log("getProduct")
        const response = await axios.get(endpointUrl + "/" + productId);
        return response.data;
    }

}