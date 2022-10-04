import React, {useEffect} from 'react';
import {fetchHouses} from '../store/actions/housesAction';
import {useAppDispatch} from '../hooks';

const Houses = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHouses())
    });

    return <div>Houses</div>;
};

export default Houses;
