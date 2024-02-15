import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/Actions/actions";
const { fav, cards, selector, option, selectorContainer } = styles

export default function Favorites(){
    const dispatch= useDispatch();
    const [aux, setAux]= useState(false);
    const myFavorites = useSelector((state)=>state.myFavorites);

    const handleOrder= (e)=>{
        dispatch(orderCards(e.target.value));
        if (aux){
        setAux (false)}
        else{setAux(true)};
    }

    const handleFilter= (e)=>{
        dispatch(filterCards(e.target.value));
    }
    return(
        <div className={fav}>
            <h1>Your Favorites Characters</h1>
            <div className="selectorContainer">
                <select className={selector} onChange={handleOrder}>
                    <option className={option} value="A">Ascendente</option>
                    <option className={option} value="D">Descendente</option>
                </select>
                <select className={selector} onChange={handleFilter}>
                    <option className={option} value="Male">Male</option>
                    <option className={option} value="Female">Female</option>
                    <option className={option} value="Genderless">Genderless</option>
                    <option className={option} value="unknown">Unknown</option>
                    <option className={option} value="all">All</option>
                </select>
            </div>
            
            <div className={cards}>
                {
                myFavorites?.map((fav)=>(
                    <Card
                        id={fav.id}
                        key={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender} 
                        image={fav.image} 
                    />
                ))
                }
            </div>
        </div>
    );
}