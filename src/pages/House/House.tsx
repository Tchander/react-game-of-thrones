import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchHouses} from '../../store/actions/housesAction';
import SectionContent from '../../components/_common/SectionContent/SectionContent';
import {getHouseNameFromUrl} from '../../helpers';
import {ROUTER_PATHS} from '../../enums';
import cl from './House.module.scss';

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
                <div className={cl.house}>
                    <div className={cl.house__name}>{house.name}</div>
                    <img
                        className={cl.house__image}
                        src={require(`../../assets/images/houses/${image}.webp`)}
                        alt={image}
                    />
                </div>
            }
        </SectionContent>
    );
};

export default House;
