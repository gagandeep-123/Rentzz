import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItems: (state, action) => {
                const ans = state.items.filter((ele) =>{
                    return ele.id != action.payload.id
                });
                state.items = ans;
            },
            clearCart: (state, action) => {
                state.items.length = 0;
            }

        }
    }
)
export const { addItem, removeItems, clearCart } = cartslice.actions;

export default cartslice.reducer;