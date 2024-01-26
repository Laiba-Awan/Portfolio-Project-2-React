import React, { useEffect, useState } from "react";
import { BestSellProducts, NewArrivals } from "../../mockData";
import { addToCart } from "../../redux/cart";
import "../bestSelling/BestSelling.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function BestSelling() {
  const [activeTab, setActiveTab] = useState(0);
  const [ProductList, setProductList] = useState([""]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductList(BestSellProducts);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const onClickDetail = (id) => {
    navigate("/productdetail/" + id);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleTabChange = (tab) => {
    setLoading(true);
    setProductList([]);
    setTimeout(() => {
      setLoading(false);
      setActiveTab(tab);
      setProductList(tab === 0 ? BestSellProducts : NewArrivals);
      console.log("tabValue", activeTab);
    }, 1000);
  };
  return (
    <Container className="mt-lg-5 mt-5 text-center">
      {/* <Row>
        <Col
          className="d-flex flex-column align-items-lg-end align-items-center justify-content-center"
          xs={10}
          md={7}
          lg={8}
        > */}
      <div className="heading-sec">
        <h3 className="heading-Tp">Trending Products</h3>
        <Nav className="d-flex justify-content-center mb-lg-4 mb-4">
          <NavItem>
            <NavLink
              className="active tab-btns px-0"
              onClick={() => handleTabChange(0)}
            >
              Best Selling
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="tab-btns px-0"
              onClick={() => handleTabChange(1)}
            >
              New Arrivals
            </NavLink>
          </NavItem>
        </Nav>
      </div>

      {/* </Col> */}
      {/* <Col className="d-flex justify-content-end ms-auto mt-auto" xs={2} md={2} lg={3}>
          <img
            alt="skin care"
            src="../assets/skin care.png"
            className="spa-img"
          />
        </Col>
      </Row> */}

      {loading ? <Spinner color="warning"></Spinner> : null}
      <Row>
        {ProductList.map((item, index) => (
          <Col key={`${index}`} xs="12" lg="3" md="4">
            <Card
              className="card card-bg mb-lg-4 mb-3 ms-lg-0"
              onClick={() => onClickDetail(item.id)}
            >
              <img className="image-card" alt="Sample" src={item.imgUrl} />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rs{item.price}
                </CardSubtitle>
                <Button
                  // color="primary"
                  className="btn-cards btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </Button>
                {/* <Button color="primary" onClick={() => onClickDetail(item.id)}>
                  View Details
                </Button> */}
                {/* <CardText>
                  {item.description}
                </CardText> */}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BestSelling;
