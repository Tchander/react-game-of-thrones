import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IHouses, IHousesState} from '../../types';
import {STORE_NAMES} from '../../enums';

const initialState: IHousesState = {
    loading: false,
    error: '',
    houses: [],
}

export const housesSlice = createSlice({
    name: STORE_NAMES.HOUSES,
    initialState,
    reducers: {
        fetching(state: IHousesState) {
            state.loading = true;
        },
        fetchSuccess(state: IHousesState, action: PayloadAction<IHouses[]>) {
            state.loading = false
            state.houses = action.payload;
        },
        fetchError(state: IHousesState, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        }
    },
})

export default housesSlice.reducer;
