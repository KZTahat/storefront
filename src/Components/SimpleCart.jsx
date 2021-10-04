import { connect } from "react-redux";
import { removeFromCart } from "../Store/products";
import "./components.css";

function SimpleCart(props) {
  return (
    <div id="cartItemsContainer">
      <ul>
        {props.products.cart.length > 0
          ? props.products.cart.map((product) => {
              return (
                <li>
                  {product.name}{"   "}
                  <button className='removeButton' onClick={() => props.removeFromCart(product.name)}>
                    X
                  </button>
                </li>
              );
            })
          : <div>The Cart Is Empty</div> }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
