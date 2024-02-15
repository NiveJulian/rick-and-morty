import axios from 'axios';
import styles from './Detail.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { container, card, details } = styles

export default function Detail() {
    const [character, setCharacter] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

   return (
      <div className={container}>
         <div className={card}>
            <div className={details}>
                <h2>Name | {character.name}</h2>
                <h2>Status | {character.status}</h2>
                <h2>Species | {character.species}</h2>
                <h2>Gender | {character.gender}</h2>
                <h2>Origin | {character.origin?.name}</h2>
            </div>
            <img src={character.image} />
         </div>
      </div>
   );
}
