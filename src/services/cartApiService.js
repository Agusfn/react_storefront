import axios from 'axios';

const endpointUrl = process.env.REACT_APP_STORE_API_URL + "/cart";

const cartApiService = {

    addProduct: async(id, colorCode, storageCode) => {
        const response = await axios.post(endpointUrl, {
            id: id, 
            colorCode: colorCode, 
            storageCode: storageCode
        });
        return response.data;
    }

}

export default cartApiService;