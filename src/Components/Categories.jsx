import { connect } from "react-redux";
import { changeActiveCat } from "../Store/categories.store";
import "./components.css";

function Categories(props) {
  return (
    <>
      <div id="categoriesContainer">
        <ul>
          {props.categories.categories.map((category) => {
            return (
              <li
                key={category.normalizedName}
                className="categoriesList"
                onClick={() => props.changeActiveCat(category.normalizedName)}
              >
                {category.normalizedName}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = { changeActiveCat };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
