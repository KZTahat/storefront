import { connect } from "react-redux";
import { addToCart } from "../Store/products";
import "./components.css";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
function Products(props) {
  return (
    <>
      <div id="productsContainer">
        <h1 className="productsHeader">{props.categories.activeCategory}</h1>
        {props.categories.categories.map((category) => {
          if (category.normalizedName == props.categories.activeCategory) {
            return <h4 className="productsHeader">{category.description}</h4>;
          }
        })}
        <div>
          {props.products.products.map((product) => {
            if (product.category == props.categories.activeCategory) {
              return (
                <Card sx={{ maxWidth: 345 }} className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      {product.price}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In Stock: {product.count}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => props.addToCart(product.name)}
                    >
                      ADD TO CART
                    </Button>
                    <Button size="small">VIEW DETAILS</Button>
                  </CardActions>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
