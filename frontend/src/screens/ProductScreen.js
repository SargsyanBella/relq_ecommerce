import './ProductScreen.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

// Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart} from '../redux/actions/cartActions';



const ProductScreen = ({ history}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
 

    const productDetails = useSelector((state) => state.getProductDetails);
    const {loading, error, product} = productDetails;
    const {id} = useParams();

    useEffect(() => {
        if (product && id !== product._id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, product,id]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    };

 return (
     <div className='productscreen'>
        {loading ? (
        <h2>Loading...</h2>
        ) : error ? (
       <h2>{error}</h2> 
       ) : (
     <>
        <div className='productscreen_left'>
            <div className='left_image'>
              <img src={product.imageUrl} alt={product.name} />
            </div>

            <div className='left_info'>
                <p className='left_name'>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
           <div className='productscreen_right'>
             <div className='right_info'>
                <p>
                    Price: <span>${product.price}</span>
                </p>
                <p>
                    Status: <span>{product.countInStock > 0 ? "In Stock" : "out of Stock" }
                    </span>
                </p>
                <p>
                    Qty
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x+1} value={x+1}>
                                {x+1}
                                </option>
                        ))}
                    </select>
                </p>
                <p>
                    <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                </p>
            </div>
           </div>
           </>
       )}
        </div>
 );
};

export default ProductScreen;
