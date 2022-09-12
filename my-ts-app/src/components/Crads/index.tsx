import React, { useState } from 'react';
import './cards.css';
import { cardfore, cards, CardsColor, cardsSec, cardthree, data, UserData } from './utils';

function Cards() {
    const [user, setUser] = useState<UserData>(data);
    const [cardsToRender, setCards] = useState(cards);
    const [cardsToRenderSec, setCardsSec] = useState(cardsSec);
    const [cardsToRenderThree, setCardsThree] = useState(cardthree);
    const [cardsToRenderFore, setCardsFore] = useState(cardfore);

    function removeFromCards(x: any, id: any, set: any, value: any) {
        value === 1 ? setCards(cardsToRender.filter(item => item.id !== id))
            : value === 2 ? setCardsSec(cardsToRenderSec.filter(item => item.id !== id))
                : value === 3 ? setCardsThree(cardsToRenderThree.filter(item => item.id !== id))
                    : value === 4 ? setCardsFore(cardsToRenderFore.filter(item => item.id !== id))
                        : console.log('test')
    }

    function handleClick(x: any, setToUser: React.Dispatch<React.SetStateAction<UserData>>, value: any) {
        user.carrr && user.cardsValue && setToUser({
            carrr: [x, ...user.carrr],
            cardsValue: { ...user.cardsValue }
        })
        removeFromCards(x, x.id, setToUser, value)
    }

    function renderCards(cards: any, value?: number) {
        let retVal = [];
        for (let i = 0; i <= 3; i++) {
            cards[i] && cards[i].id && retVal.push(
                <div className={`item ${cards[i].color}`}
                    onClick={() => (handleClick(cards[i], setUser, value))} >
                    <div className='lable'>
                        <div>
                            <span>
                                {cards[i].color === CardsColor.RED ? '❤️' : cards[i].color === CardsColor.BLACK ? '♣️' :  cards[i].color === CardsColor.WHITE ? '💠' : cards[i].color === CardsColor.GREEN ? '🍀' : cards[i].color === CardsColor.BLUE ? '🦋' : cards[i].color }
                            </span>
                        </div>
                        <div>
                            <span className='cards-lvl'>
                                {cards[i].lvl}
                            </span>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <div>
                            <span>
                                {cards[i].id}
                            </span>
                        </div>
                        <div>
                            <span>
                                {cards[i].value}
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
        return retVal;
    }

    function renderUserCard(cards: any, color: string): any {
        const data = setCardValueee()
        let length = cards.length;
        let retVal = [];
        console.log(data)
        for (let i = 0; i <= length; i++) {
            cards[i] && cards[i].id && cards[i].color === color && retVal.push(
                <div className={`user-${color}-cards`}>
                    <div className={`item ${cards[i].color}`}>
                        <span>{cards[i].id}</span>
                        <span>{cards[i].color}</span>
                    </div>
                </div>
            )
        }
        return retVal;
    }
    function renderMainCard() {
        const data = setCardValueee()
        for (const property in data) {
            console.log(property)
        }
    }
    renderMainCard()

    function setCardValueee(): object {
        let data = {
            black: 0,
            red: 0,
            blue: 0,
            white: 0,
            green: 0,
        }
        const checkfornumber = () => {
            let retVal = [];
            if (user.carrr) {
                for (let index = 0; index < user.carrr.length; index++) {
                    retVal.push((user.carrr[index].color))
                }
            }
            return retVal;
        }
        checkfornumber().forEach((elm: any) => {
            if (elm === 'red') {
                data.red++
            }
            if (elm === 'black') {
                data.black++
            }
            if (elm === 'blue') {
                data.blue++
            }
            if (elm === 'white') {
                data.white++
            }
            if (elm === 'green') {
                data.green++
            }
        });
        return data;
    }

    function asdfasdf(x: any) {
        const tt = x;
        let red = 0;

        if (user.carrr) {
            for (let index = 0; index < user.carrr.length; index++) {
                const t = user.carrr[index].color;

                // user && user.carrr && user.carrr[index].color === 'red' ? red++ : console.log(false);
                if (t) {
                    console.log(t)
                    // red ++
                }
            }

        }
        return red;
    }
    // console.log(checkfornumber())
    // console.log(asdfasdf(checkfornumber))
    console.log(user)

    return (
        <div className='page'>
            <div className='card-component'>
                <div className='top-cards'>
                    <div className='main-container small'>
                        <div className='items'>
                            {renderCards(cardsToRenderFore, 4)}
                        </div>
                    </div>
                </div>
                <div className='main-container'>
                    <div className='kupa'>
                        kupa = {renderCards(cardsToRender).length ? cardsToRender.length - renderCards(cardsToRender).length : 0}
                    </div>
                    <div className='items'>
                        {renderCards(cardsToRender, 1)}
                    </div>
                </div>
                <div className='main-container'>
                    <div className='kupa'>
                        kupa = {renderCards(cardsToRenderSec).length ? cardsToRenderSec.length - renderCards(cardsToRenderSec).length : 0}
                    </div>
                    <div className='items'>
                        {renderCards(cardsToRenderSec, 2)}
                    </div>
                </div>
                <div className='main-container'>
                    <div className='kupa'>
                        kupa = {renderCards(cardsToRenderThree).length ? cardsToRenderThree.length - renderCards(cardsToRenderThree).length : 0}
                    </div>
                    <div className='items'>
                        {renderCards(cardsToRenderThree, 3)}
                    </div>
                </div>
            </div>
            <div className='user-area'>
                user area
                <div className='user-cards'>
                    {/* {checkfornumber()} */}
                    {renderUserCard(user.carrr, CardsColor.RED)}
                    {renderUserCard(user.carrr, CardsColor.BLACK)}
                    {renderUserCard(user.carrr, CardsColor.GREEN)}
                    {renderUserCard(user.carrr, CardsColor.BLUE)}
                    {renderUserCard(user.carrr, CardsColor.WHITE)}
                </div>
            </div>
        </div>

    );
}

export default Cards;
