import React, {useEffect} from 'react';
import {fetchHouses} from '../../store/actions/housesAction';
import {useAppDispatch} from '../../hooks';
import SectionContent from '../../components/_common/SectionContent/SectionContent';
import cl from './Houses.module.scss';
import {HOUSES} from "../../const-data/houses";

const Houses = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHouses());
    });

    return(
        <SectionContent>
            <div className={cl.map}>
                {HOUSES.map((house) =>
                    <div
                        style={{top: house.top, left: house.left}}
                        className={cl.map__emblemWrapper}
                    >
                        <img
                            className={cl.map__emblem}
                            src={require(`../../assets/images/houses/${house.image}.png`)}
                            alt={house.image}
                        />
                    </div>
                )}
            </div>
        </SectionContent>
    );
};

export default Houses;
