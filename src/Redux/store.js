import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    
  },
});

console.log(store.getState());
