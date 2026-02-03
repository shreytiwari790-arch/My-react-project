import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ios from '../../Food_Assets/assets/shop/appstore.png'
import googleplay from '../../Food_Assets/assets/shop/googleplay.png'
import { Link } from 'react-router-dom'
import download from '../../Food_Assets/assets/shop/e-shop.png'

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
              <Link to="/">
                <img src={ios} alt="ios" className="img-fluid me-3" />
              </Link>
              <Link to="/">
                <img src={googleplay} alt="ios" className="img-fluid me-3" />
              </Link>
            </Col>
            <Col lg={6}>
            <img src={download} alt="download" className="img-fluid me-3"/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section5
