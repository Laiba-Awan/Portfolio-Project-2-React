import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../../redux/cart";
import { Button } from "react-scroll";
import "../cart/cart.css";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import Footer from "../../components/footer/Footer";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Input,
  FormGroup,
  Label,

} from "reactstrap";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const { cart, user } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  // const { id } = useParams();
  const dispatch = useDispatch();

  const getTotal = () => {
    let price = 0;
    cart.map((item) => {
      price += item.price;
    });
    return price;
  };

  const handleDlt = (item) => {
    dispatch(removeFromCart(item.id));
  };
  const handleEmpty = () => {
    if (cart.length > 0) {
      dispatch(emptyCart());
      toast.success("Removed all the items from cart!");
    } else {
      toast.error("Cart is already Empty!");
    }
  };
  return (
    <>
      <Container fluid className="bg-cart text-white mb-5">
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
          <ModalHeader toggle={() => setModalOpen(false)}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <input type="text" placeholder="" />
            <input type="text" />
            <input type="text" />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => toast.success("Order Placed!")}
            >
              Order Placed!
            </Button>
            <Button color="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {user ? (
          <Container>
            <Row className="mt-5">
              <Col xs="12" sm="4" lg="8" className="col-br">
                <Row className="header-cart">
                  <Col lg="6 mt-3 text-center pb-3">
                    <h5>Product</h5>{" "}
                  </Col>
                  <Col lg="2" className="pt-3 pb-2">
                    <h5>Price</h5>
                  </Col>
                  <Col lg="2" className="pt-3 pb-2">
                    <h5>Quantity</h5>
                  </Col>
                  <Col lg="2" className="pt-3 pb-2">
                    <h5>Sub Total</h5>
                  </Col>
                </Row>
                {cart.map((item) => (
                  <Row
                    key={item.id}
                    className="d-flex col-br flex-row align-items-center justify-content-center"
                  >
                    <Col
                      className="d-flex flex-row my-2 align-items-center"
                      lg="6"
                    >
                      <img
                        className="image img-cart"
                        alt="Sample"
                        src={item.imgUrl}
                      />
                      <h5 className="ps-3 mb-0 pt-1 heading-cart">
                        {item.name}
                      </h5>
                    </Col>
                    <Col lg="2">
                      <h5 className="mb-2 " tag="h6">
                        Rs {item.price}
                      </h5>
                    </Col>
                    <Col lg="2">
                      <Button
                        className="btn-dec text-white"
                        onClick={() => {
                          if (quantity > 1) setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </Button>
                      <Button className="btn-dec text-white">{quantity}</Button>
                      <Button
                        className="btn-dec text-white"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </Col>
                    <Col></Col>
                    <Col>
                      <TiDelete
                        className="dlt-btn"
                        onClick={() => handleDlt(item)}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>
              <Col lg="4" className="col-br">
                <Row className="header-cart text-center">
                  <Col>
                    <h2 className="mt-3">Cart Total</h2>
                  </Col>
                </Row>
                <h3 className="mt-3">Total: {getTotal()}</h3>
                <hr />
                <h5 className="text-cart">Estimate Shopping</h5>
                <FormGroup>
                  <Label for="exampleSelect">Choose Country</Label>
                  <Input id="exampleSelect" name="select" className="input-cart" type="select">
                    <option>Pakistan</option>
                    <option>USA</option>
                  </Input>
                </FormGroup>
                <Input type="text" placeholder="Postal / zip Code" className="cart-input mb-3"/>
                <p>Taxes, shipping and discounts codes calculated at checkout</p>
                <Button
                  className="btns-cart me-2 ms-4"
                  onClick={() => setModalOpen(true)}
                >
                  Proceed to Checkout
                </Button>
                <Button className="btns-cart-empty mb-3" onClick={handleEmpty}>
                  Empty Cart
                </Button>
              </Col>
            </Row>
          </Container>
        ) : (
          <p> please login to Continue.</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
