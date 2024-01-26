import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../../redux/cart";
import { useNavigate } from "react-router";
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
  const { cart } = useSelector((state) => state);
  const {LoggedIn} = useSelector((state)=> state.user);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () => {
    let price = 0;
    cart.map((item) => {
      return (price += item.price);
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
          <ModalHeader
            className="modal-bg text-white"
            toggle={() => setModalOpen(false)}
          >
            Check Out
          </ModalHeader>
          <ModalBody className="modal-bg">
            <FormGroup>
              <Label for="exampleAddress" className="text-white">
                Address
              </Label>
              <Input
                className="modal-bg"
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2" className="text-white">
                Address 2
              </Label>
              <Input
                className="modal-bg"
                id="exampleAddress2"
                name="address2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity" className="text-white">
                    City
                  </Label>
                  <Input id="exampleCity" name="city" className="modal-bg" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState" className="text-white">
                    State
                  </Label>
                  <Input id="exampleState" name="state" className="modal-bg" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip" className="text-white">
                    Zip
                  </Label>
                  <Input id="exampleZip" name="zip" className="modal-bg" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input
                id="exampleCheck"
                name="check"
                type="checkbox"
                className="checkbox"
              />
              <Label check for="exampleCheck" className="text-white">
                Cash on Delivery
              </Label>
            </FormGroup>
          </ModalBody>
          <ModalFooter className="modal-bg">
            <Button
              className="btn-modal-2"
              onClick={() => [
                toast.success("Order Placed!"),
                toast.success(
                  "Your Order #BT-3487 is in the Process! Thanks for Shopping!"
                ),
              ]}
            >
              Order Placed!
            </Button>
            <Button className="btn-modal" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {LoggedIn ? (
          <Container>
            <Row className="mt-5">
              <Col xs="12" sm="12" lg="8" className="col-br mb-5 mb-lg-0">
                <Row className="header-cart">
                  <Col lg="6" xs="6" md="8" className="col-cart-sm mt-3 pb-3 ms-lg-5">
                    <h5 className="heading-t-br">Product</h5>
                  </Col>
                  <Col
                    lg="3"
                    xs="2"
                    md="2"
                    className="pt-3 pb-2 col2-cart-sm d-flex justify-content-lg-center"
                  >
                    <h5 className="heading-t-br ps-lg-3 ms-lg-5 ps-md-1 ps-4">
                      Price
                    </h5>
                  </Col>
                </Row>
                {cart.map((item) => (
                  <Row
                    key={item.id}
                    className="d-flex col-br flex-row align-items-center justify-content-center"
                  >
                    <Col
                      className="d-flex flex-row ps-0 my-3 align-items-center"
                      lg="6"
                      xs="6"
                      md="6"
                    >
                      <img
                        className="image img-cart"
                        alt="Sample"
                        src={item.imgUrl}
                      />
                      <h5 className="ps-lg-3 mb-0 pt-1 ps-2 heading-cart">
                        {item.name}
                      </h5>
                    </Col>
                    <Col
                      lg="3"
                      md="3"
                      xs="3"
                      className="d-flex justify-content-end"
                    >
                      <h5 className="mb-0 item-price" tag="h6">
                        Rs {item.price}
                      </h5>
                    </Col>
                    <Col
                      className="d-flex justify-content-center"
                      lg="2"
                      xs="2"
                      md="2"
                    >
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
                <h5 className="text-cart mt-lg-3 mt-4">Estimate Shopping</h5>
                <FormGroup>
                  <Label for="exampleSelect">Choose Country</Label>
                  <Input
                    id="exampleSelect"
                    name="select"
                    className="input-cart"
                    type="select"
                  >
                    <option>Pakistan</option>
                    <option>USA</option>
                  </Input>
                </FormGroup>
                <Input
                  type="text"
                  placeholder="Postal / zip Code"
                  className="input-cart mb-3"
                />
                <p>
                  Taxes, shipping and discounts codes calculated at checkout
                </p>
                <hr />
                <h3 className="ms-lg-2 pb-2 pt-3">Total: {getTotal()}</h3>
                <Button
                  className="btns-cart me-2 ms-lg-2 mb-2 mb-lg-0"
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
          <div className="d-flex align-items-center justify-content-center flex-column">
          <p className="mt-5 pt-5 pb-2 cart-text">You must Login to View Cart!</p>
          <Button type="button" className="btns-cart-empty mb-5" onClick={()=>{navigate("/login")}}>Login</Button>
          </div>
          
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
