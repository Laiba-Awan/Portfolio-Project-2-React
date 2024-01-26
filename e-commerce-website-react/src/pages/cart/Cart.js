import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../../redux/cart";
import { Button } from "react-scroll";
import "../cart/cart.css";
import { useEffect, useState } from "react";
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
// import { useParams } from "react-router";

function Cart() {
  const { cart, user } = useSelector((state) => state);
  const [modalOpen, setModalOpen] = useState(false);
  // const [TotalPrice, SetTotalPrice] = useState(0);
  // const { id } = useParams();
  const dispatch = useDispatch();

  const getTotal = () => {
    let price = 0;
    cart.map((item) => {
      return (price += item.price);
    });
    return price;
  };

  // const handleTotalPrice = () => {
  //   let TotalPrice = 0;
  //   cart.map((item) => {
  //     return (TotalPrice += quantity * item.price);
  //   });
  //   SetTotalPrice(TotalPrice);
  // };

  // useEffect(() => {
  //   handleTotalPrice();
  // });

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
        {user ? (
          <Container>
            <Row className="mt-5">
              <Col xs="12" sm="4" lg="8" className="col-br">
                <Row className="header-cart d-flex justify-content-evenly">
                  <Col
                    lg="6"
                    xs="6"
                    md=""
                    className="col-cart-sm mt-3 text-center pb-3"
                  >
                    <h5 className="heading-t-br">Product</h5>{" "}
                  </Col>
                  <Col lg="3" xs="1" className="pt-3 pb-2 col2-cart-sm">
                    <h5 className="heading-t-br">Price</h5>
                  </Col>
                </Row>
                {cart.map((item) => (
                  <Row
                    key={item.id}
                    className="d-flex col-br flex-row align-items-center justify-content-center"
                    >
                    <Col
                      className="d-flex flex-lg-row  flex-column my-2 align-items-lg-center"
                      lg="6"
                    >
                      <img
                        className="image img-cart"
                        alt="Sample"
                        src={item.imgUrl}
                      />
                      <h5 className="ps-lg-3 mb-0 pt-1 heading-cart">
                        {item.name}
                      </h5>
                    </Col>
                    <Col lg="3" className="d-flex justify-content-end">
                      <h5 className="mb-2 item-price" tag="h6">
                        Rs {item.price}
                      </h5>
                    </Col>
                    <Col className="d-flex justify-content-center" lg="2">
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
                  className="cart-input mb-3"
                />
                <p>
                  Taxes, shipping and discounts codes calculated at checkout
                </p>
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
