import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/Section2Styles.css";
import Pizza from "../../Food_Assets/assets/about/pizza.png"
import Salad from "../../Food_Assets/assets/about/salad.png"
import Delivery from "../../Food_Assets/assets/about/Delivery-bike.png"
// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
  },
  // Add more mock data objects as needed
];
const Section2 = () => {
  return (
    <>
    <section className="section2">
      <div className="section2-container">
        <h1 className="section2-title">
          The burger tastes better when you eat it with your family
        </h1>

        <p className="section2-text">
          Porta semper lacus cursus, feugiat primis ultrice a ligula risus
          auctor an tempus feugiat dolor lacinia cubilia curae integer
          orci congue and metus integer primis in integer metus
        </p>
        <Link to="/" className="btn order_now btn_red">Explore full menu</Link>
      </div>
    </section>
    <section className="about-wrapper">
        <Container>
            <Row>{mockData.map((cardData,index)=>{
                return (
                    <Col md={6} lg={4}>
                        <div className="about-box text-center">
                            <div className="about-icon">
                                <img src={cardData.image} alt="image" className="img-fluid" key={index}/>
                                <div className="inner">
                                    <h1>{cardData.title}</h1>
                                    <p>{cardData.paragraph}</p> -
                                </div>
                                 
                            </div>
                        </div>
                    
                </Col>

                );
            })}

            </Row>
        </Container>
    </section>
    </>
    
  );
};

export default Section2;
