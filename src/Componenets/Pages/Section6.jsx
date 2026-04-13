import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import brand1 from "../../Food_Assets/assets/brands/brand-11.png"
import brand2 from "../../Food_Assets/assets/brands/brand-12.png"
import brand3 from "../../Food_Assets/assets/brands/brand-13.png"
import brand4 from "../../Food_Assets/assets/brands/brand-14.png"
import brand5 from "../../Food_Assets/assets/brands/brand-15.png"
import brand6 from "../../Food_Assets/assets/brands/brand-16.png"
import user1 from "../../Food_Assets/assets/blog/review-author-1.jpg"  
import user2 from "../../Food_Assets/assets/blog/review-author-2.jpg" 
import user3 from "../../Food_Assets/assets/blog/review-author-3.jpg" 
import user4 from "../../Food_Assets/assets/blog/review-author-5.jpg" 
import "../../styles/Section6Styles.css"

const Section6 = () => {
    return (
        <div className='blogsection'>
            <section >
                <Container>
                    <Row>
                    <Col>
                        <Carousel indicators={false}>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center gap-4">
                                    <img src={user1} alt="brand1" />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, illo vitae? Dolor ducimus, maiores odit quaerat debitis sunt voluptatibus ab delectus illo quos veniam cupiditate est temporibus mollitia deserunt placeat.</p>
                                <div className='Rating'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h2>By Shrey Tiwari</h2>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="d-flex justify-content-center gap-4">
                                    <img src={user2} alt="brand1" />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, illo vitae? Dolor ducimus, maiores odit quaerat debitis sunt voluptatibus ab delectus illo quos veniam cupiditate est temporibus mollitia deserunt placeat.</p>
                                <div className='Rating'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h2>By Shrey Tiwari</h2>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="d-flex justify-content-center gap-4">
                                    <img src={user3} alt="brand1" />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, illo vitae? Dolor ducimus, maiores odit quaerat debitis sunt voluptatibus ab delectus illo quos veniam cupiditate est temporibus mollitia deserunt placeat.</p>
                                <div className='Rating'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h2>By Shrey Tiwari</h2>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="d-flex justify-content-center gap-4">
                                    <img src={user4} alt="brand1" />
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, illo vitae? Dolor ducimus, maiores odit quaerat debitis sunt voluptatibus ab delectus illo quos veniam cupiditate est temporibus mollitia deserunt placeat.</p>
                                <div className='Rating'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h2>By Shrey Tiwari</h2>
                            </Carousel.Item>

                            
                        </Carousel>

                        
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    )
}

export default Section6
