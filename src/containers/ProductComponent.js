import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardGroup, Container, Row } from "react-bootstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category,description } = product;
    return (
      <div className="four wide column  text-decoration-none" key={id}>
        <Link to={`/product/${id}`}>
          {/* <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div> */}

          
            
            <CardGroup  Fluid="lg">
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title><h6  className=" text-decoration-none">{title}</h6>  </Card.Title>
                <h6>$ {price}</h6>
                
              </Card.Body>
              <Card.Footer>
                 {category}
              </Card.Footer>
            </Card>
          </CardGroup>
          

         

        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
