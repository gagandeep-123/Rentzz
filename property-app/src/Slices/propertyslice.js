import { createSlice } from "@reduxjs/toolkit";

const propertyslice = createSlice({
  name: "property",
  initialState: {
    list: [],
    typefilters: [],
      budgetfilters: "",
    location:""
  },
    reducers: {
    addLocation: (state, action) => {
        state.location = action.payload;      
    },
    
    addlist: (state, action) => {
      state.list = action.payload;
    },
    addTypeFilter: (state, action) => {
      state.typefilters = action.payload;
    },
    addBudgetFilter: (state, action) => {
      state.budgetfilters = action.payload;
    },
  },
});
export const { addlist, addTypeFilter, addBudgetFilter, addLocation } =
  propertyslice.actions;

export default propertyslice.reducer;
