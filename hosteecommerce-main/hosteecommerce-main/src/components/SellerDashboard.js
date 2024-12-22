import React, { useState } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', images: [] });

    const fetchProducts = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    };

    const addProduct = async () => {
        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('price', newProduct.price);
        formData.append('description', newProduct.description);
        newProduct.images.forEach((image) => formData.append('images', image));

        await axios.post('/api/products/add', formData);
        fetchProducts();
    };

    const handleFileChange = (e) => {
        setNewProduct({ ...newProduct, images: Array.from(e.target.files) });
    };

    return (
        <div>
            <h1>Seller Dashboard</h1>
            <input type="text" placeholder="Product Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="number" placeholder="Price" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <textarea placeholder="Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={addProduct}>Add Product</button>
        </div>
    );
};

export default SellerDashboard;
