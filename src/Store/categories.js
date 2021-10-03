let initialState = {
  categories: [
    {
      normalizedName: "electronics",
      displayName: "ELECTRONICS",
      description: "Electronics description goes here",
    },
    {
      normalizedName: "food",
      displayName: "FOOD",
      description: "Food description goes here",
    },
  ],
  activeCategory: "electronics",
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "changeActiveCat":
        let categories = state.categories;
      return { categories, activeCategory: payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// we will add the action here, but idealy we need to separate them into their own files
export const changeActiveCat = (name) => {
  return {
    type: "changeActiveCat",
    payload: name,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
