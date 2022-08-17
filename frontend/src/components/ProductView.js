import React from 'react';
import {useState, useEffect} from 'react'
// import Products from './products'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Category from './Category';
import './ProductView.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import Footer from './Footer';
import axios from 'axios';


const ProductView = () => {
  
    const [Product, setProduct] = useState([{
      "_id": "",
        "name": "",
        "image": "",
        "images": [
            "",
            "",
            "",
            "",
            "",
            "",
            ""
            
        ],
        "description": [
            "", 
            "", 
            "", 
            ""
        ],
        "category": "",
        "price": 0,
       " rating": 0,
        "numReviews": 0
    }]);
    useEffect(() => {
      const fetchProduct = async () => {
        const {data} = await axios.get(`http://localhost:8080/product/${id}`);
        setProduct(data);
        setDisp(data.image);
      }
      fetchProduct()
      console.log('hi');
    },[]);
    
    const {id} = useParams();
    console.log(id)
    // const Product = Products.find((p) => p._id === id)
    
    
    const [quan,setQuan] = useState(1);
    
    console.log(Product.length, Product);
    
    const [disp, setDisp] = useState(Product.image);

    return (
    <div>
      <Header/>
      <Category/>
      <div className="productview">
        <div className="image">
          <div className="images">
            { Product.images && Product.images.map((el,index)=> 
                <img src={el} key={index} alt={Product.name} onClick={ (e) => {
                  setDisp(e.target.src);
                    console.log(e.target.src)
                  }} 
                  className='imageop'/>
            )}
          </div>
          <img src={disp} alt={Product.name} className="disp"/>
        </div>
        <div className="description">
            <div className="name">{Product.name}</div>
            <div className="ratrev">
                <div className="rating">
                    { Product.rating > 0.25  ? Product.rating > 0.75  ? <StarRoundedIcon className="star"/> : <StarHalfRoundedIcon className="star"/> : <StarBorderRoundedIcon className="star"/> }
                    { Product.rating > 1.25  ? Product.rating > 1.75  ? <StarRoundedIcon className="star"/> : <StarHalfRoundedIcon className="star"/> : <StarBorderRoundedIcon className="star"/> }
                    { Product.rating > 2.25  ? Product.rating > 2.75  ? <StarRoundedIcon className="star"/> : <StarHalfRoundedIcon className="star"/> : <StarBorderRoundedIcon className="star"/> }
                    { Product.rating > 3.25  ? Product.rating > 3.75  ? <StarRoundedIcon className="star"/> : <StarHalfRoundedIcon className="star"/> : <StarBorderRoundedIcon className="star"/> }
                    { Product.rating > 4.25  ? Product.rating > 4.75  ? <StarRoundedIcon className="star"/> : <StarHalfRoundedIcon className="star"/> : <StarBorderRoundedIcon className="star"/> }
                </div>
                <div className="numrev"  id='link'>{Product.numReviews} ratings</div>
            </div>
            <hr style={{backgroundColor: '#ededed', border: '.5px solid #ededed'}}/>
            <div className="price">
              <sup style={{fontSize: '18px', fontWeight: 'light'}}>₹</sup>{Product.price && Product.price.toLocaleString('en-IN')}
              <p style={{fontSize: '14px', padding: '20px 0 5px 0'}}>Inclusive of all taxes</p>
            </div>
            <hr style={{backgroundColor: '#ededed', border: '.5px solid #ededed'}}/>
            <ul className="desc">
              <h3 style={{fontWeight: 'bold', fontSize: '16px', padding: '5px 0 10px 0'}}>About this item</h3>
              {Product.description && Product.description.map((el,index)=> <li key={index} className="descli">{el}</li>)}
            </ul>
        </div>
        <div className="order">
            <div className="price">
              <sup style={{fontSize: '18px', fontWeight: 'light'}}>₹</sup>{(Product.price*quan).toLocaleString('en-IN')}
            </div>
            <p style={{padding: '10px 0'}} id='link'>FREE delivery</p>
            <div className="quantity">
                <p>Quantity: &nbsp;</p>
                <span>
                  <button className="quanbtnl" onClick={() => {
                    quan > 1 && setQuan(quan-1)
                  }}>-
                  </button>&nbsp;{quan}&nbsp;
                  <button className="quanbtnr" onClick={() => {
                    setQuan(quan+1)
                  }}>+</button></span>
            </div>
            <button className="addcart">Add to cart</button><br/>
            <button className="buynow">Buy now</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductView
