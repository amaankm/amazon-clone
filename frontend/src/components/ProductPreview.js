import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import {NavLink} from 'react-router-dom'

const styles = {
    product : { 
        background : "#fffffe",
        color : "#0F1111",
        padding : "min(2vw, 20px)",
        margin : "min(1vw, 10px)",
        width : "max(min(26vw, 350px), 65px)",
        height : "max(min(40vw, 400px), 100px)",
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-evenly",
        fontSize : "min(1vw, 14px)"
    },
    image : {
        width : "max(min(25vw, 300px), 62.5px)",
        objectFit: "contain",
        padding : "0",
        alignSelf : "center",
    },
    name : {
        textOverflow : 'ellipsis',
        overflow : 'hidden',
        whiteSpace : 'nowrap',
        padding : 'min(0.5vw, 5px) 0 0 0',
        fontSize : "min(2vw, 14px)"
    },
    price : {
        fontSize : "min(2vw, 20px)",
        fontWeight : "light",
        padding : "min(0.5vw, 5px)",
    },
    star : {
        color : "#fea21c",
        borderColor : "#e49650",
        fontSize : "min(2vw, 14px)",
        padding : '0',
        margin : '0'
    }
}

const ProductPreview = ({product}) => {
  return (
    <a href={`/product/${product._id}`} className="product" style={styles.product}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div className="name" style={styles.name}>{product.name}</div>
      <div className="price" style={styles.price}><sup>₹</sup>{product.price}</div>
      <div style={{padding: '0 10px'}}>
        { product.rating > 0.25  ? product.rating > 0.75 ? <StarRoundedIcon style={styles.star} /> : <StarHalfRoundedIcon style={styles.star} /> : <StarBorderRoundedIcon style={styles.star} /> }
        { product.rating > 1.25  ? product.rating > 1.75 ? <StarRoundedIcon style={styles.star} /> : <StarHalfRoundedIcon style={styles.star} /> : <StarBorderRoundedIcon style={styles.star} /> }
        { product.rating > 2.25  ? product.rating > 2.75 ? <StarRoundedIcon style={styles.star} /> : <StarHalfRoundedIcon style={styles.star} /> : <StarBorderRoundedIcon style={styles.star} /> }
        { product.rating > 3.25  ? product.rating > 3.75 ? <StarRoundedIcon style={styles.star} /> : <StarHalfRoundedIcon style={styles.star} /> : <StarBorderRoundedIcon style={styles.star} /> }
        { product.rating > 4.25  ? product.rating > 4.75 ? <StarRoundedIcon style={styles.star} /> : <StarHalfRoundedIcon style={styles.star} /> : <StarBorderRoundedIcon style={styles.star} /> }
      </div>
    </a>
  )
}

export default ProductPreview

