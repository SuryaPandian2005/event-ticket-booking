import React, {useEffect,useState} from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products,setProducts] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3000/api/products')
            .then(response =>{
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!',error);
            });
    },[]);
    return(
        <div className='product-list'>
            <ul>
                {products.map(product =>(
                    <li key={product._id}>
                        <img src={product.imageUrl} alt={product.name}
                        className='product-image'/>
                        <div className='product-details'>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button className='add-to-cart'>Add to Cart</button>
                        </div>
                        </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductList;