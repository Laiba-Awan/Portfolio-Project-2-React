import React from "react";
import "../review/Reviews.css";
import { ReviewsData } from "../../mockData";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

function Reviews() {
  return (
    <div className="bg-reviews text-center text-white pt-lg-5 pb-lg-5">
      <h5>2,157 have said how good RareBlocks</h5>
      <h4>Our happy clients say about us</h4>
      <Container>
        <h2 className="text-center">Albums List</h2>
        <Row className="d-flex justify-content-center">
          {ReviewsData.map((item, index) => (
            <Col key={`${index}`} xs="12" lg="3" md="4">
              <Card className="card card-settings mb-5">
                <CardBody>
                  <CardText>{item.rating}</CardText>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Rs{item.text}
                  </CardSubtitle>

                  <CardTitle tag="h5">{item.name}</CardTitle>
                  {/* <img className="image-card" alt="Sample" src={item.imgUrl} /> */}
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
