import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../public/fontawesome/css/all.min.css";

import MyNav from "./MyNav";
import "./Header.css";

function Header() {
  return (
    <Row className="Hed">
      <Col lg={3} md={3} sm={2}>
        <div className="HedCol">
          <div>
            <i class="fa-solid fa-phone"></i>
          </div>
          <div>
            <div style={{ fontFamily: "cursive", fontSize: "14px" }}>
              Order Now
            </div>
            <div style={{ fontFamily: "cursive", fontSize: "28px" }}>
              01235964
            </div>
          </div>
        </div>
      </Col>
      <Col lg={6} md={6} sm={3}>
        <MyNav />
      </Col>
      <Col
        lg={3}
        md={3}
        sm={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <i class="fa-solid fa-cart-shopping"> ( ) </i>
      </Col>
    </Row>
  );
}

export default Header;
