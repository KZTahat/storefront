let initialState = {
  products: [
    {
      category: "food",
      name: "Carrote",
      description: "Carrote Description goes here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKigLZ9DtiV9H2SmlgVEQOvUka8NVEjwwIw&usqp=CAU",
      price: 3,
      count: 20,
    },
    {
      category: "electronics",
      name: "Smart Phone",
      description: "Smart Phone Description goes here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrqfscT98_NCUcsUDOh_p5VX4MqFbz9Gapg&usqp=CAU",
      price: 270,
      count: 13,
    },
    {
      category: "food",
      name: "Beef",
      description: "Beef Description goes here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfwj1M5KVCVbZ8c5y_QHrBFQPnTy8xJvbVQ&usqp=CAU",
      price: 9,
      count: 87,
    },
    {
      category: "electronics",
      name: "Laptop",
      description: "laptop Description goes here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoOlm0BGQdKMjTpATVm2F9r7iO65I-e90EYw&usqp=CAU",
      price: 499,
      count: 9,
    },
    {
      category: "food",
      name: "Cereal",
      description: "Cereal Description goes here",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhQKTykf8w7eOYLz3qjxtByK0PxMJBfma6Q&usqp=CAU",
      price: 6,
      count: 40,
    },
  ],
  cart: [],
};

export default (state = initialState, action) => {
  let products;
  let cart;
  switch (action.type) {
    case "ADDTOCART":
      products = state.products;
      cart = state.cart;
      state.products.map((product) => {
        if (product.name == action.payload && !state.cart.includes(product)) {
          cart.push(product);
          product.count = product.count - 1;
        }
      });
      return { products, cart };
    case "REMOVEFROMCART":
      products = state.products.map((product) => {
        if (product.name === action.payload) {
          product.count = product.count + 1;
        }
        return product;
      });
      cart = state.cart.filter((item) => {
        if (item.name !== action.payload) {
          return item;
        }
      });
      return { products, cart };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const addToCart = (name) => {
  return {
    type: "ADDTOCART",
    payload: name,
  };
};

export const removeFromCart = (name) => {
  return {
    type: "REMOVEFROMCART",
    payload: name,
  };
};
