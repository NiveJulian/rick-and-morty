import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'
const { fav, cards } = styles

export default function Favorites(){
    const myFavorites = useSelector((state)=>state.myFavorites);
    return(
        <div className={fav}>
            <h1>Your Favorites Characters</h1>
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