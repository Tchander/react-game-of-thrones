import axios from '../../axios';
import {AppDispatch} from '../index';
import {IHouses} from '../../types';
import {housesSlice} from "../slices/housesSlice";

export const fetchHouses = (name?: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(housesSlice.actions.fetching());
            const { data }: {data: IHouses[]} = await axios.get('houses', {
                params: {
                    name,
                }
            });
            dispatch(housesSlice.actions.fetchSuccess(data));
        } catch (e) {
            dispatch(housesSlice.actions.fetchError(e as Error));
        }
    };
};
