import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import Products from './products';
import ProductPreview from './ProductPreview';

const Home = () => {

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get("http://localhost:8080/product");
        setProducts(data);
    }
    fetchProducts()
  },[])

  const [imgno, setImgNo] = useState(0);

  const banner_images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PCA/PD/PC_Hero_PCA_Deals-revealed_2x._CB631715389_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/pd/heros/CEPC_Electronics_GW_Graphics_PD22_3000x1200._CB631565460_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PD/GWhero_Unrec/D51521741_WLA_GW_Hero_Unrec_PD22_PC_Hero_3000x1200_1._CB631542086_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Primeday/GW/Heros/Leadup/V1/1_Tallhero_3000x1200._CB631569847_.jpg" ,
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/PD22/Graphics/New_Hero/Teaser/HK_3000x1200_PC-2._CB631544672_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/Teaser/Rev-1/PC_3000-Eng-Unrec-Day1._CB631559769_.jpg"
  ];
  
  const [bannerImage, setBannerImage] = useState(banner_images[imgno]);

  useEffect(() => {
    setBannerImage(banner_images[imgno]);
    console.log(imgno)
  },[imgno])
  
//   console.log(Products);
    
  return (
    <div className="home">
        <div className="banner">
            <button className="bannerButtonLeft" onClick={() => {
                imgno>0 ? setImgNo(imgno-1) : setImgNo(5);
            }}>
                <ArrowBackIosOutlinedIcon className="arrowicon"/>
            </button>
            <div className="banner_image">
                <img src={bannerImage} alt="banner" className="banner_images"/>
            </div>
            <button className="bannerButtonRight" onClick={() =>{
                imgno<5 ?  setImgNo(imgno+1) : setImgNo(0);
                
            }}>
                <ArrowForwardIosOutlinedIcon className="arrowicon"/>
            </button>
        </div>
        {/* <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide style={{objectFit : 'cover'}}><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PCA/PD/PC_Hero_PCA_Deals-revealed_2x._CB631715389_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/pd/heros/CEPC_Electronics_GW_Graphics_PD22_3000x1200._CB631565460_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PD/GWhero_Unrec/D51521741_WLA_GW_Hero_Unrec_PD22_PC_Hero_3000x1200_1._CB631542086_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Primeday/GW/Heros/Leadup/V1/1_Tallhero_3000x1200._CB631569847_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/PD22/Graphics/New_Hero/Teaser/HK_3000x1200_PC-2._CB631544672_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/Teaser/Rev-1/PC_3000-Eng-Unrec-Day1._CB631559769_.jpg" className="banner_images" alt="banner" /></SwiperSlide>
        </Swiper> */}
        <div className="Home_products">
            {
                Products.map(product => (
                    <ProductPreview product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home


// import React from 'react'


// function Home() {
  
//     // const images = [
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PCA/PD/PC_Hero_PCA_Deals-revealed_2x._CB631715389_.jpg"},
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/laptop/pd/heros/CEPC_Electronics_GW_Graphics_PD22_3000x1200._CB631565460_.jpg"},
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PD/GWhero_Unrec/D51521741_WLA_GW_Hero_Unrec_PD22_PC_Hero_3000x1200_1._CB631542086_.jpg"},
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Primeday/GW/Heros/Leadup/V1/1_Tallhero_3000x1200._CB631569847_.jpg"},
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/PD22/Graphics/New_Hero/Teaser/HK_3000x1200_PC-2._CB631544672_.jpg"},
//     //     {url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/PD22/Teaser/Rev-1/PC_3000-Eng-Unrec-Day1._CB631559769_.jpg"}
//     // ]
  
//   return (
    
//   )
// }

// export default Home
