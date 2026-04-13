import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import "../../styles/Section3.css"
// Images
import Image1 from "../../Food_Assets/assets/menu/burger-11.jpg"
import Image2 from "../../Food_Assets/assets/menu/burger-12.jpg"
import Image3 from "../../Food_Assets/assets/menu/burger-13.jpg"
import Image4 from "../../Food_Assets/assets/menu/burger-14.jpg"
import Image5 from "../../Food_Assets/assets/menu/burger-15.jpg"
import Image6 from "../../Food_Assets/assets/menu/burger-16.jpg"
import Image7 from "../../Food_Assets/assets/menu/burger-17.jpg"
import Image8 from "../../Food_Assets/assets/menu/burger-18.jpg"
import Ad1 from "../../Food_Assets/assets/menu/ads-1.jpg"
import Ad2 from "../../Food_Assets/assets/menu/ads-2.jpg"

// Card Component
import Cards from '../Layouts/Cards'
import { Link } from 'react-router-dom'
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

// Mock Data
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "Patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "Cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2,
    price: 89.12,
  },
]

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(
        <i key={`full-${i}`} className="bi bi-star-fill"></i>
      );
    } else if (rating >= 0.5) {
      stars.push(
        <i key={`half-${i}`} className="bi bi-star-half"></i>
      );
    } else {
      stars.push(
        <i key={`empty-${i}`} className="bi bi-star"></i>
      );
    }
    rating -= 1;
  }

  return stars;
};

const Section3 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-5">
      <Container>

        {/* Section Heading */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }} className="innertext text-center">
            <h2 className="fw-bold">OUR CRAZY BURGERZ</h2>
            <p className=" para ">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>

        {/* Cards Grid */}
        <Row>
          {loading ? (
            <Col xs={12} className="text-center py-5">
              <Spinner animation="border" variant="danger" />
            </Col>
          ) : (
            products.map((item) => (
              <Col
                key={item.id}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className="mb-4"
              >
                <Cards
                  image={item.image}
                  title={item.name || "Unnamed Item"}
                  paragraph={item.description || "No description available."}
                  rating={item.rating || 0}
                  price={item.price || "0.00"}
                  renderRatingIcons={renderRatingIcons}
                />
              </Col>
            ))
          )}
        </Row>
        <Row className='pt-5'>
          <Col sm={6} lg={5}>
          <div className='ads-box ads_img mb-5 mb-md-0'>
            <h4 className='mb-0'>Get yourself free</h4>
            <h5>Cheese frie</h5>
            <Link to="/" className='btttn btn_red'>
            Learn More
            </Link>
          </div>
          </Col>
          <Col sm={6} lg={7}>
          <div className='ads-box ads_img2'>
            <h4 className='mb-0'>Get yourself free</h4>
            <h5>Cheese fries</h5>
            <Link to="/" className='btttn btn_red'>
            Learn More
            </Link>4
          </div>
          </Col>
        </Row>


      </Container>
    </section>
  )
}

export default Section3
