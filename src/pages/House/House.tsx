import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchHouses} from '../../store/actions/housesAction';
import SectionContent from '../../components/_common/SectionContent/SectionContent';
import {getHouseNameFromUrl} from '../../helpers';
import {ROUTER_PATHS} from '../../enums';
import cl from "../Houses/Houses.module.scss";

interface State {
    name: string;
    title: string;
}

const House = () => {
    const dispatch = useAppDispatch();
    const router = useNavigate();
    const [image, setImage] = useState('');
    const {state}: {state: State} = useLocation();
    const {house} = useAppSelector(state => state.houses);

    useEffect( () => {
        let houseName = '';
        if (state?.name) {
            houseName = state.name;
            setImage(state.title);
        } else {
            const houseInfo = getHouseNameFromUrl();
            houseName = houseInfo.houseName;
            setImage(houseInfo.houseTitle);
        }
        if (!houseName) {
            router(ROUTER_PATHS.HOME);
        }
        dispatch(fetchHouses(houseName));
    }, []);

    return (
        <SectionContent>
            {house &&
                <>
                    <img
                        src={require(`../../assets/images/houses/${image}.webp`)}
                        alt={image}
                    />
                    <div>{house.name}</div>
                    <div>{house.region}</div>
                </>
            }
        </SectionContent>
    );
};

export default House;
