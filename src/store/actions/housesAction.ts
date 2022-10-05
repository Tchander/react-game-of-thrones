import axios from '../../axios';
import {AppDispatch} from '../index';
import {IHouse} from '../../types';
import {housesSlice} from "../slices/housesSlice";
import {ENDPOINTS} from "../../enums";

export const fetchHouses = (name?: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(housesSlice.actions.fetching());
            const { data }: {data: IHouse[]} = await axios.get(ENDPOINTS.HOUSES, {
                params: {
                    name,
                }
            });
            dispatch(housesSlice.actions.fetchSuccess({data, name}));
        } catch (e) {
            dispatch(housesSlice.actions.fetchError(e as Error));
        }
    };
};
