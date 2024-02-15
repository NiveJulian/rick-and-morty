import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/Actions/actions';
const { card, cardContent, btn, link, fav } = styles

export default function Card(
   {id, name, species, gender , image, onClose}
   ) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()
   const myFavorites = useSelector((state)=>state.myFavorites);
 
   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         dispatch(addFav(myChar))
      }
   }


   return (
      <div className={card}>
            <img src={image} alt="Character" />
               <div className={cardContent}>
                  {
                     onClose ? (
                        <button className={btn} onClick={() => onClose(id) && handleFavorite}>X</button>
                     ) : (
                        ""
                     )
                  }
                  {
                     isFav ? (
                        <button className={fav} onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className={fav} onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <Link className={link} to={`/detail/${id}`}>
                     <h2>Name: {name}</h2>
                     <h2>Species: {species}</h2>
                     <h2>Gender: {gender}</h2>
                  </Link>
               </div>
      </div>
   );
}
