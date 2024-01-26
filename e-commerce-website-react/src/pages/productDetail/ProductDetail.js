import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BestSellProducts, NewArrivals } from "../../mockData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";
import Footer from "../../components/footer/Footer";
import StarRating from "./StarRating";

import { Spinner, Container, Row, Col, Button } from "reactstrap";

function ProductDetail() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [productImg, setProductImg] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const singleProduct = [...BestSellProducts, ...NewArrivals].find(
        (item) => item.id === id
      );
      if (singleProduct) {
        setLoading(false);
        setProduct(singleProduct);
        setProductImg(singleProduct.imgUrl);
      }
    }, 1000);
  }, [id]);
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleImgChange = (item) => {
    setProductImg(item);
  };
  const CalculateTotal = () => {
    return product.price * quantity;
  };
  return (
    <div>
      <Container fluid className="bg-detail-pg text-white p-0">
        <Container className="mb-5 pt-5">
          {loading ? <Spinner color="warning"></Spinner> : null}
          <Row>
            <Col xs="12" sm="4" lg="6" md="12">
              <Row>
                <Col lg="9" className="d-flex justify-content-center mb-lg-4">
                  <img
                    src={productImg}
                    alt="product-img"
                    className="detail-img"
                  />
                </Col>
              </Row>
              <Row className="d-flex justify-content-lg-start justify-content-center ms-lg-1">
                {product.images &&
                  product.images.map((item, index) => {
                    return (
                      <Col
                        lg="2"
                        className="me-lg-2 me-md-2 p-0 mt-3 img-col ms-lg-1 ms-1 mb-md-4 mb-4"
                      >
                        <img
                          className="img-small mb-2"
                          src={item}
                          alt={item.name}
                          key={index}
                          onClick={() => handleImgChange(item)}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </Col>
            <Col
              xs="12"
              sm="4"
              lg="6"
              md="12"
              className="mt-lg-1 pt-lg-3 px-3 px-lg-0"
            >
              <div className="stars">
               <StarRating stars={product.rating} />
              </div>
              <h2 className="product-title mt-3">{product.name}</h2>
              <h5 className="mb-2 mt-2 text-white" tag="h6">
                Rs {product.price}
              </h5>
              <h5 className="mb-1 mt-3">Description:</h5>
              <p>{product.description}</p>
              <h5 className="mb-1 mt-3">Formulation:</h5>
              <p>{product.Formulation}</p>
              <h5 className="mb-1 mt-3">Usage Instruction:</h5>
              <p>{product.Usage}</p>
              <h3 className="mb-lg-3 mb-2 mt-lg-5 mt-5 mt-md-5 mb-md-2">
                Total: Rs{CalculateTotal()}
              </h3>
              <Button
                className="btn-inc"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </Button>
              <Button className="btn-inc">{quantity}</Button>
              <Button
                className="btn-inc"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Button onClick={handleAddToCart} className="btn-cart ms-3">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </div>
  );
}

export default ProductDetail;
