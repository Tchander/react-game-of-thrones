import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {fetchHouses} from '../../store/actions/housesAction';

interface State {
    name: string;
}

const House = () => {
    const dispatch = useAppDispatch();
    const {state}: {state: State} = useLocation();

    useEffect(() => {
        dispatch(fetchHouses(state.name));
    }, );

    return (
        <div>
            {state.name}
        </div>
    );
};

export default House;