// import React from 'react'
// import MyNavbar from './components/MyNavbar'

// export default function App() {
//   return (
//     <div>
//       <MyNavbar />
//     </div>
//   )
// import App from'App.css';
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import Content from './components/Content';
// import HeaderBar from './components/HeaderBar';
// import MyNavbar from './components/MyNavbar';
// import { CardBody, CardFooter, CardHeader } from 'react-bootstrap';

// Navbar component
// const Navbar = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container">
//       <a className="navbar-brand" href="#Nav">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#home">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#about">
//               About
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

// HeaderBar component
// const HeaderBar = () => (
//   <header className="bg-primary text-white text-center py-5">
//     <h1>Welcome to My Website</h1>
//   </header>
// );

// Card component
// const Card = ({ header,img, content }) => (
//   <div className="card" style={{fontFamily:'Times New Roman'}}>
//     <div className='card-header' >
//       <h4>{header}</h4>
//     </div>
//     <div className="card-body p-0" >
//       <img src={img} width='100%' />
//     </div>
//     <div className="card-footer">
//       <p>{content}</p>
//     </div>
//   </div>
// );

// AdSection component with Images
// const AdSection = () => {
//   return (
//     <aside className="bg-light text-center py-4  ">
//       <div className="d-md-flex justify-content-md-between" >
//         <img src='ads/ibaco.jpg' alt="Ad 1" className="img-fluid mb-3 " />
//         <img src="ads/vtech.jpeg" alt="Ad 2" className="img-fluid mb-3 " />
//         <img src="ads/swiggy.jpg" alt="Ad 3" className="img-fluid mb-3 " />
//         <img src="ads/lic.jpg" alt="Ad 4" className="img-fluid " />
//       </div>
//     </aside>
//   );
// };

// Content component with Carousel
// const Content = () => {
//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     prevArrow: <button className="slick-prev">Previous</button>,
//     nextArrow: <button className="slick-next">Next</button>,
//   };

//   return (
//     <main className="container my-5">
//       <div className="row">
//         <div className="col-lg-10">
//           <div className='row g-5'>
//             <div className='col g-5'>
//               <h3>Lastest Offers</h3>
//             <Slider {...carouselSettings}>
//             <Card header="Credit Card" content="Grab the exclusive offers now" img="img/Credit.jpeg" />
//             <Card header="Fixed Deposit" content="Limeted Period Offer!" img="img/fixed-deposit.jpg" />
//             <Card header="NetBanking" content="Save big across popular" img="img/netbanking.jpeg" />
//             <Card header="Electronics" content="Avail exciting offers via SmartBuy" img="img/electronic.jpeg" />
//             <Card header="Travel" content="Fly with ease this holiday season" img="img/travel.jpg" />
//             <Card header="Easy EMI" content="Spend less, Save More" img="img/easyemijpeg.jpeg" />
//           </Slider>
//             </div>
//             <div className='col g-5 cardxx'>
//             <h3>Way To Bank</h3>
//             <Slider {...carouselSettings}>
//             <Card header="Social Media" content="Chatting, sharing and banking" img="img/Credit.jpeg" />
//             <Card header="Cardless Cash" content="Instant & Secure mode of cash" img="img/fixed-deposit.jpg" />
//             <Card header="SMS Banking" content="Banking services are now a text away!" img="img/netbanking.jpeg" />
//             <Card header="DoorStep" content="Doorstep Banking Services" img="img/electronic.jpeg" />
//             <Card header="UPI Payment" content="Instant and Easy payments " img="img/travel.jpg" />
//             <Card header="Bank Person" content="Banking services are just a voice call" img="img/easyemijpeg.jpeg" />
//           </Slider>
//             </div>
//           </div>
//         </div>
//         <div className="Ad col-lg-2  ">
//           <AdSection />
//         </div>
//       </div>
//     </main>
//   );
// };

// Main App component
// const App = () => (
//   <div>
//     <MyNavbar />
//     <HeaderBar />
//     <Content />
//   </div>
// );

// export default App;




// ---------------------------------------------------------

import React from 'react';
import './App.css'
import LogIn from './components/LogIn';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import HeaderBar from './components/HeaderBar';
import MyNavbar from './components/MyNavbar';
import FooterBar from './components/FooterBar';
import Home from './components/Home';
import Demo from './components/Demo';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        
      </Routes>
    </BrowserRouter>

      {/* <MyNavbar />
      <HeaderBar />
      <Content />
      <FooterBar />
      <LogIn /> */}

</>
  );
};


export default App;