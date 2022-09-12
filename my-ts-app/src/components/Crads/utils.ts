export interface CardsData {
    [key: string]: {
        id: number,
        lvl: number,
        color: string,
        priceToBuy: any,
        value: number,
        isUserHave: boolean
    };
}

export interface CardsProps {
    cards?: string;
    color?: string;
}

export enum CardsColor {
    BLACK = 'black',
    RED = 'red',
    BLUE = 'blue',
    WHITE = 'white',
    GREEN = 'green',
}

export interface CardsValue {
    black: number;
    red: number;
    blue: number;
    white: number;
    green: number;
}

export interface UserData {
    carrr?: CardsData[];
    cardsValue: CardsValue;
}

export const data: UserData = {
    carrr: [],
    cardsValue: {
        red: 0,
        black: 0,
        blue: 0,
        white: 0,
        green: 0,
    }
}

export const cards = [
    {
        id: 1,
        lvl: 1,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 2,
        lvl: 1,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 3,
        lvl: 1,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 4,
        lvl: 1,
        color: 'black',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 5,
        lvl: 1,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 6,
        lvl: 1,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 7,
        lvl: 1,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 8,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 9,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 10,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 11,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 2,
        isUserHave: true
    },
];
export const cardsSec = [
    {
        id: 1,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 2,
        lvl: 2,
        color: 'blue',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 3,
        lvl: 2,
        color: 'green',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 4,
        lvl: 2,
        color: 'black',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 5,
        lvl: 2,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 6,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 7,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 8,
        lvl: 2,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 9,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 10,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 11,
        lvl: 2,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 2,
        isUserHave: true
    },
];
export const cardthree = [
    {
        id: 1,
        lvl: 3,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 2,
        lvl: 3,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 3,
        lvl: 3,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 4,
        lvl: 3,
        color: 'black',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 5,
        lvl: 3,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 6,
        lvl: 3,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 7,
        lvl: 3,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 8,
        lvl: 3,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 9,
        lvl: 3,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 10,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 11,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 2,
        isUserHave: true
    },
];
export const cardfore = [
    {
        id: 1,
        lvl: 4,
        color: 'white',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 2,
        lvl: 4,
        color: 'blue',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 4,
        lvl: 4,
        color: 'green',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 4,
        lvl: 4,
        color: 'black',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 5,
        lvl: 4,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 6,
        lvl: 4,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 1,
        isUserHave: true
    },
    {
        id: 7,
        lvl: 4,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 8,
        lvl: 4,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 9,
        lvl: 4,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 10,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 0,
        isUserHave: true
    },
    {
        id: 11,
        color: 'red',
        priceToBuy: ['blue', 'red'],
        value: 2,
        isUserHave: true
    },
];