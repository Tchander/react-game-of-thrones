import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {fetchHouses} from '../../store/actions/housesAction';
import {useAppDispatch} from '../../hooks';
import SectionContent from '../../components/_common/SectionContent/SectionContent';
import cl from './Houses.module.scss';
import {HOUSES} from "../../const-data/houses";
import {HOUSES_NAMES} from "../../enums/houses";
import {ROUTER_PATHS} from "../../enums";

const Houses = () => {
    const router = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHouses());
    });

    const goToChosenHouse = (name: HOUSES_NAMES, title: string): void => {
        router(`${ROUTER_PATHS.HOUSES}/${title.toLowerCase()}`,{state: {name: name}});
    }

    return(
        <SectionContent>
            <div className={cl.map}>
                <img
                    className={cl.map__background}
                    src={require('../../assets/images/background_small.webp')}
                    alt="background"
                />
                {HOUSES.map((house) =>
                    <div
                        style={{top: house.desktop.top, left: house.desktop.left}}
                        className={cl.map__emblemWrapper}
                        key={house.title}
                        onClick={() => goToChosenHouse(house.name, house.title)}
                    >
                        <img
                            className={cl.map__emblem}
                            src={require(`../../assets/images/houses/${house.title.toLowerCase()}.png`)}
                            alt={house.title}
                        />
                    </div>
                )}
            </div>
        </SectionContent>
    );
};

export default Houses;