import React, { useContext } from 'react'
import Bun from './Bun'
import Patty from './Patty'
import Lettuce from './Lettuce'
import Cheese from './Cheese'
import Tomato from './Tomato'

import style from './burger.module.css'
import BurgerContext from '../../Contex/BurgerContext'

const Burger = () => {

    //const ingridients = ['patty', 'lettuce', 'bun', 'cheese', 'patty', 'tomato', 'cheese', 'bun', 'lettuce', 'patty']

    const ctx = useContext(BurgerContext)
    console.log(ctx)


    return (
        <div className={style.burger}>
            <Bun type="top" />
                {ctx.ingridients.map( (item, index) => {
                    switch (item) {
                        case 'patty':
                            return <Patty key={index} />
                        case 'lettuce':
                            return <Lettuce key={index} />
                        case 'bun':
                            return <Bun type="insert" key={index} />
                        case 'cheese':
                            return <Cheese key={index} />
                        case 'tomato':
                            return <Tomato key={index} />
                        default:
                            return null;
                    }
                })}
            <Bun />
        </div>   

    )

}

export default Burger