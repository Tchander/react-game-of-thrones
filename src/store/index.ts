import {combineReducers, configureStore} from '@reduxjs/toolkit';
import housesReducer from './slices/housesSlice';

const rootReducer = combineReducers({
    houses: housesReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
