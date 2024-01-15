import React from 'react'
import Card from 'react-bootstrap/Card';
import { CardImg,CardImgOverlay } from 'react-bootstrap';
// import './App.css'

export default function Cards() {
  return (
    <main className="container my-5">
        <div className='row'>
            <div className="col-lg-10">
            <Card  className="cardCalc" style={{backgroundColor:'whitesmoke', fontFamily:'Times New Roman', textDecoration:'none'}}>
            <CardImg
      alt="Card image cap"
      src="img/travel.jpg"
      style={{
        height: 100
      }}
      width="100%"
    />
    <CardImgOverlay>
            <a href="https://emicalculator.net/">
                <Card.Body>
                <Card.Title>Personal Loan EMI Calculator</Card.Title>
                <Card.Text>
                    Calculator your monthly outgo with our loan calculator
                </Card.Text>
                </Card.Body>
            </a>
            </CardImgOverlay>
            </Card>
            <Card  className="cardCalc" style={{backgroundColor:'whitesmoke', fontFamily:'Times New Roman', textDecoration:'none'}}>
            <CardImg
      alt="Card image cap"
      src="img/travel.jpg"
      style={{
        height: 100
      }}
      width="100%"
    />
    <CardImgOverlay>
            <a href="https://www.bankbazaar.com/home-loan/emi-calculator.html">
                <Card.Body>
                <Card.Title>Home Loan EMI Calculator</Card.Title>
                <Card.Text>
                   Calculate your monthly expense toward owing home
                </Card.Text>
                </Card.Body>
                </a>
                </CardImgOverlay>
            </Card>
            <Card  className="cardCalc text-reset" style={{backgroundColor:'whitesmoke', fontFamily:'Times New Roman', textDecoration:'none'}}>
            <CardImg
      alt="Card image cap"
      src="img/travel.jpg"
      style={{
        height: 100
      }}
      width="100%"
    />
    <CardImgOverlay>
            <a href="https://cleartax.in/s/rd-calculator">
                <Card.Body>
                <Card.Title>RD Calculator</Card.Title>
                <Card.Text>
                    Start Small, Save regularly, enjoy great interest rate
                </Card.Text>
                </Card.Body>
            </a>
            </CardImgOverlay>
            </Card>
            </div>
        </div>
  </main>
  )
}
