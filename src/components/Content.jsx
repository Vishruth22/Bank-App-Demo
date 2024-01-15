import React from 'react'
import Slider from 'react-slick';
import Demo from './Demo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import AdSection from './AdSection';

import { Link } from 'react-router-dom';
import Cards from './Cards';
const Content = () => {
    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <button className="slick-prev">Previous</button>,
      nextArrow: <button className="slick-next">Next</button>,
    };
    
    const Card = ({ header,img, content, linkTo }) => (
    //   <Link to={linkTo} className='card-link'>
        <div className="mycard card" style={{fontFamily:'Times New Roman'}}>
            
          <div className='card-header'>
            <h4>{header}</h4>
          </div>
          <div className="card-body p-0" >
            <img src={img} alt='card' width='100%' />
          </div>
          <div className="card-footer">
            <p>{content}</p>
          </div>
        </div>
        //  </Link> 
      );
      
  
    return (
      <main className="container my-5">
        <div className="row">
          <div className="col-lg-10">
            <div className='row g-5'>
              <div className='col g-5'>
                <h3>Lastest Offers</h3>
              <Slider {...carouselSettings}>
              <Card header="Credit Card" content="Grab the exclusive offers now" img="img/Credit.jpeg" linkTo={<Demo />}/>
              <Card header="Fixed Deposit" content="Limeted Period Offer!" img="img/fixed-deposit.jpg" />
              <Card header="NetBanking" content="Save big across popular" img="img/netbanking.jpeg" />
              <Card header="Electronics" content="Avail exciting offers via SmartBuy" img="img/electronic.jpeg" />
              <Card header="Travel" content="Fly with ease this holiday season" img="img/travel.jpg" />
              <Card header="Easy EMI" content="Spend less, Save More" img="img/easyemijpeg.jpeg" />
            </Slider>
              </div>
              <div className='col g-5 cardxx'>
              <h3>Way To Bank</h3>
              <Slider {...carouselSettings}>
              <Card header="Social Media" content="Chatting, sharing and banking" img="img/Credit.jpeg" />
              <Card header="Cardless Cash" content="Instant & Secure mode of cash" img="img/fixed-deposit.jpg" />
              <Card header="SMS Banking" content="Banking services are now a text away!" img="img/netbanking.jpeg" />
              <Card header="DoorStep" content="Doorstep Banking Services" img="img/electronic.jpeg" />
              <Card header="UPI Payment" content="Instant and Easy payments " img="img/travel.jpg" />
              <Card header="Bank Person" content="Banking services are just a voice call" img="img/easyemijpeg.jpeg" />
            </Slider>
              </div>
            </div>
            <Cards />
          </div>
          <div className="Ad col-lg-2  ">
            <AdSection />
          </div>
          
        </div>
      </main>
    );
  };
export default Content;
