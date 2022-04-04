import React, { useContext } from "react"
import AddButton from './AddButton'
import MapItem from './MapItem.js'
import style from './controller.module.css'
import BurgerContext from "../../Contex/BurgerContext"

const Controller = () => {

    const ctx = useContext(BurgerContext)

    return (
        <>
            <div className={style.ingridients_selector}>
                <h5>Add Ingridients</h5>
                <div>
                    <AddButton label='Patty' clickHandler={()=>ctx.addIngridientsHandler('patty')} />
                    <AddButton label='Lettuce' clickHandler={()=>ctx.addIngridientsHandler('lettuce')} />
                    <AddButton label='Tomato' clickHandler={()=>ctx.addIngridientsHandler('tomato')} />
                    <AddButton label='Cheese' clickHandler={()=>ctx.addIngridientsHandler('cheese')} />
                    <AddButton label='Bun' clickHandler={()=>ctx.addIngridientsHandler('bun')} />
                </div> 
            </div>
            <div className={style.ingridients_map}>
                {ctx.ingridients.map((item, index) =>{
                    return(
                        <>
                            <MapItem 
                            label={item}
                            key={index}
                            removeHandler={() => ctx.removeIngridientsHandler(index)}
                            upHandler={() => ctx.moveUpIngridientsHandler(index)}
                            downHandler={() => ctx.moveDownIngridientsHandler(index)}
                            firstItem={index === 0}
                            lastItem={index === ctx.ingridients.length - 1} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Controller