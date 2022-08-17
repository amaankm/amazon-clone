import React from 'react'
import './Category.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Category = () => {
  return (
    <div className="home_nav">
        <div className="home_menu">
            <MenuOutlinedIcon className="home_menuIcon"/>
            <div className="home_menuText">All</div>
        </div>
        <ul className="home_category">
            <li className="home_categoryElements">Best Seller</li>
            <li className="home_categoryElements">Customer Service</li>
            <li className="home_categoryElements">Mobiles</li>
            <li className="home_categoryElements">Today's Deals</li>
            <li className="home_categoryElements">Electronics</li>
            <li className="home_categoryElements">Fashion</li>
            <li className="home_categoryElements">Books</li>
            <li className="home_categoryElements">New Releases</li>
            <li className="home_categoryElements">Home &amp; kitchen</li>
            <li className="home_categoryElements">Computers</li>
            <li className="home_categoryElements">Coupons</li>
            <li className="home_categoryElements">Toys &amp; Games</li>
            <li className="home_categoryElements">Sell</li>
            <li className="home_categoryElements">Car &amp; Motorbike</li>

        </ul>
    </div>
  )
}

export default Category

