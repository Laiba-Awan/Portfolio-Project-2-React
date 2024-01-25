import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BestSellProducts, NewArrivals } from "../../mockData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";
import Footer from "../../components/footer/Footer";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "reactstrap";

function ProductDetail({ images }) {
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
  return (
    <div>
      <Container fluid className="bg-detail-pg text-white p-0">
        <Container className="mb-5 pt-5">
          {loading ? <Spinner color="warning"></Spinner> : null}
          <Row className="">
            <Col xs="12" sm="4" lg="6">
              <Row>
                <Col lg="9" className="d-flex justify-content-center mb-lg-4">
                  <img
                    src={productImg}
                    alt="product-img"
                    className="detail-img"
                  />
                </Col>
              </Row>
              <Row>
                {product.images &&
                  product.images.map((item, index) => {
                    return (
                      <Col lg="2" className="me-2 ms-1 d-flex flex-column">
                        <img
                          className="img-small"
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
            <Col xs="12" sm="4" lg="6" className="mt-lg-5 pt-lg-3">
              <h2 className="product-title">{product.name}</h2>

              <h5 className="mb-2 text-white" tag="h6">
                Rs {product.price}
              </h5>
              <p>{product.description}</p>
              <p>{product.Formulation}</p>
              <p>{product.Usage}</p>
              <p>{product.rating}</p>

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
