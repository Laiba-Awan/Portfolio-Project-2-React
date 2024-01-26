import React from "react";
import "../review/Reviews.css";
import { ReviewsData } from "../../mockData";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function Reviews() {
  return (
    <div className="bg-reviews text-center text-white pt-5 pb-5">
      <h5>2,157 have said how good Elegence</h5>
      <h4 className="mb-4">Our happy clients say about us</h4>
      <Container>
        <Row className="d-flex justify-content-center">
          {ReviewsData.map((item, index) => (
            <Col key={`${index}`} xs="12" lg="3" md="4">
              <Card className="card card-settings mb-5 mx-3 mx-lg-0 mx-md-0">
                <CardBody>
                <div className="stars">
                <CardTitle tag="h5" className="m-0">{item.name}</CardTitle>
                {[...Array(5)].map((_, index) => {
                  return <span key={index}>&#9733;</span>;
                })}
              </div>
                  <CardSubtitle className="mb-2 mt-2 text-muted" tag="h6">
                    {item.text}
                  </CardSubtitle>                  
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <h6 className="review-bottom">Check all 2,157 reviews</h6>
    </div>
  );
}

export default Reviews;
