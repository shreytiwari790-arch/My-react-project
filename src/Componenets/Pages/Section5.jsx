import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import ios from '../../Food_Assets/assets/shop/appstore.png'
import googleplay from '../../Food_Assets/assets/shop/googleplay.png'
import { Link } from 'react-router-dom'
import download from '../../Food_Assets/assets/shop/e-shop.png'
import brand1 from "../../Food_Assets/assets/brands/brand-11.png"
import brand2 from "../../Food_Assets/assets/brands/brand-12.png"
import brand3 from "../../Food_Assets/assets/brands/brand-13.png"
import brand4 from "../../Food_Assets/assets/brands/brand-14.png"
import brand5 from "../../Food_Assets/assets/brands/brand-15.png"
import brand6 from "../../Food_Assets/assets/brands/brand-16.png"
import "../../styles/Section5style.css"



const Section5 = () => {
  return (
    <div>
      <section className="shopsection">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>Save upto 20%</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className='d-flex justify-content-center gap-2'>
                <Link to="/">
                  <img src={ios} alt="ios" className="img-fluid me-3 store" />
                </Link>
                <Link to="/">
                  <img src={googleplay} alt="ios" className="img-fluid me-3 store " />
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={download} alt="download" className="img-fluid me-3 store" />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Carousel indicators={false}>
              <Carousel.Item>
                <div className="d-flex justify-content-center gap-4">
                  <img src={brand1} alt="brand1" />
                  <img src={brand2} alt="brand2" />
                  <img src={brand3} alt="brand3" />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex justify-content-center gap-4">
                  <img src={brand4} alt="brand4" />
                  <img src={brand5} alt="brand5" />
                  <img src={brand6} alt="brand6" />
                </div>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section5
