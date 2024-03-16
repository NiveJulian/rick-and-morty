import Card from '../Card/Card';

import styles from './Cards.module.css'
const { cards } = styles

export default function Cards({characters, onClose}) {
   return <div className={cards}>
      {
         characters.map(({id, name, status, species, gender, origin , image}) => 
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
         )
      }
   </div>;
}
