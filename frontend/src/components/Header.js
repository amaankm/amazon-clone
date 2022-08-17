import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <NavLink to="/" href="/"> 
            <img className='header_icon' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        </NavLink>   

        <div className="header_address">
            <FmdGoodOutlinedIcon className="header_addressIcon" />
            <div className="header_addressText">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Select your address</span>
            </div>
        </div>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
            <NavLink to="/signin" href="/signin" className="header_option">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Sign In</span>
            </NavLink>

            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>

            <div className="header_option">
                <AddShoppingCartOutlinedIcon className="header_optionBasketIcon" />
            </div>
        </div>
      
    </div>
  )
}

export default Header



// import React from 'react'

// function Header() {
//   return (
    
//   )
// }

// export default Header
