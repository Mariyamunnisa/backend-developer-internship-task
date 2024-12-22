const axios = require('axios');

const getShippingRates = async (payload) => {
    const response = await axios.post(
        'https://apiv2.shiprocket.in/v1/external/courier/serviceability',
        payload,
        { headers: { Authorization: `Bearer ${process.env.SHIPROCKET_TOKEN}` } }
    );
    return response.data;
};

module.exports = { getShippingRates };
