import { connect } from "react-redux";
import "./components.css";

function Header(props) {
  return (
    <>
      <div id="header">
        <span>Khaled's Store</span>
        <span onClick={props.showSimpleCart} style={{ cursor: "pointer" }}>
          Cart ({props.products.cart.length})
        </span>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Header);
