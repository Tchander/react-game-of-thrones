import {HOUSES_NAMES} from "../../enums/houses";

interface IHouseMapCoordinates {
    top: number;
    left: number;
}

export interface IHouses {
    name: HOUSES_NAMES;
    title: string;
    mainHouse?: boolean;
    desktop: IHouseMapCoordinates;
}
