import { connect } from "react-redux";
import { changeActiveCat, reset } from "../Store/categories";
function Categories(props) {
  return (
    <>
      <div id="categoriesContainer">
        <ul>
          {props.categories.categories.map((category) => {
            return (
              <li
                key={category.normalizedName}
                className='categoriesList'
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

const mapDispatchToProps = { changeActiveCat, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
