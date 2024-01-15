import React from 'react'
import { Row, Col, DropdownHeader, Dropdown, DropdownMenu, DropdownItem } from 'react-bootstrap'



export default function FooterBar() {
  return (
    <div>
        <footer className="bg-dark text-white text-center py-5">
          <Row >
            <Col>
            <h6 className='text-uppercase fw-bold mb-4'>About Us</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Investor
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Overview
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  News Room
                </a>
              </p>
            </Col>
            <Col>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  penel Charges
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Imp Message
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Security
                </a>
              </p>
            </Col>
            <Col>
            <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home Loan
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rates
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Fees & Charges
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Car Loan
                </a>
              </p>
            </Col>
          </Row>
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#'>
          My App
        </a>
      </div>
        </footer>
    </div>
  )
}
