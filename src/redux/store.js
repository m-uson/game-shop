import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gamesReducer from "./game/reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gamesReducer,
  },
});

export default store;
