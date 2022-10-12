import {HOUSES_NAMES} from '../enums/houses';

export const getHouseNameFromUrl = (): { houseTitle: string, houseName: string } => {
    const path = window.location.pathname.split('/');
    const houseTitle = path[2];
    return { houseTitle: houseTitle, houseName: HOUSES_NAMES[houseTitle.toUpperCase() as keyof typeof HOUSES_NAMES] };
};
