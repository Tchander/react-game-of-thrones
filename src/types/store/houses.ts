export interface IHouse {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];
}

export interface IHousesState {
    loading: boolean;
    error: string;
    houses: IHouse[];
    house: IHouse | null;
}

export interface IHousesSuccess {
    data: IHouse[];
    name?: string;
}
