import React from "react";
import { Card, Button } from "react-bootstrap";

const Cards = ({ image, title, paragraph, rating, price }) => {

  const renderRatingIcons = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = rating >= i + 1;

      return (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={filled ? "#ffc107" : "#ddd"}
          style={{ marginRight: "2px" }}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      );
    });
  };

  return (
    <Card className="h-100 shadow-sm">

      {/* Image */}
      <Card.Img variant="top" src={image} alt={title} />

      <Card.Body className="d-flex flex-column">

        {/* Title + Heart */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{title}</Card.Title>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            className="heart-icon"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01z" />
          </svg>

        </div>

        {/* Description */}
        <Card.Text className="text-muted mb-3" style={{ flexGrow: 1 }}>
          {paragraph}
        </Card.Text>

        {/* Rating */}
        <div className="mb-2 d-flex flex-row align-items-center">
          {renderRatingIcons(rating)}
        </div>

        {/* Price */}
        <h5 className="mt-auto mb-3">₹{price}</h5>

        {/* Button */}
        <Button variant="danger">Add to Cart</Button>

      </Card.Body>
    </Card>
  );
};

export default Cards;
