import React from 'react'
import './SpecialMenu.css'
import { data, images } from '../../Constants' 
import Menuitems from '../../Components/Menuitems/Menuitems'

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu"> 
      <div className="app__specialMenu-title">
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            <div className="app__specialMenu_menu_items">
               {data.wines.map((wine, index) =>(
                    <Menuitems key={wine.title + index} title={wine.title}  tags={wine.tags} price={wine.price}/>
               ))}
            </div>
        </div>

        <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center"> 
        <p className="app__specialMenu-menu_heading">Cocktails</p>
            <div className="app__specialMenu_menu_items">
                {data.cocktails.map((cocktail, index) => (
                    <Menuitems key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                ))}
            </div>
        </div>

      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu
