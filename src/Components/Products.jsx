import { connect } from "react-redux";
import "./components.css";
function Products(props) {
  return (
    <>
      <div id="productsContainer">
        <h1 className='productsHeader'>{props.categories.activeCategory}</h1>
        {props.categories.categories.map((category) => {
          if (category.normalizedName == props.categories.activeCategory) {
            return <h4 className='productsHeader'>{category.description}</h4>;
          }
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Products);
