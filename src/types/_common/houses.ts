import {HOUSES_NAMES} from "../../enums/houses";

interface IHouseMapCoordinates {
    top: string;
    left: string;
}

export interface IHouses {
    name: HOUSES_NAMES;
    title: string;
    main?: boolean;
    desktop: IHouseMapCoordinates;
}
