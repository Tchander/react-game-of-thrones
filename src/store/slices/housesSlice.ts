import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IHousesState, IHousesSuccess} from '../../types';
import {STORE_NAMES} from '../../enums';

const initialState: IHousesState = {
    loading: false,
    error: '',
    houses: [],
    house: null,
}

export const housesSlice = createSlice({
    name: STORE_NAMES.HOUSES,
    initialState,
    reducers: {
        fetching(state: IHousesState) {
            state.loading = true;
        },
        fetchSuccess(state: IHousesState, action: PayloadAction<IHousesSuccess>) {
            state.loading = false
            if (action.payload.name && action.payload.data.length === 1) {
                state.house = action.payload.data[0];
            } else {
                state.houses = action.payload.data;
            }
        },
        fetchError(state: IHousesState, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    },
})

export default housesSlice.reducer;
