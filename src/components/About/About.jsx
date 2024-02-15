import styles from './About.module.css';
import aboutImage from '../../util/img/login2.png';
import footerImage from '../../util/img/footer.png';

const { card, cardBody, cardContent, imageContainer, cardFooter } = styles;

export default function About() {
    return (
        <div className={card}>
            <h1>Welcome to About</h1>
            <div className={cardBody}>
                <div className={imageContainer}>
                    <img src={aboutImage} alt="" />
                </div>
                <div className={cardContent}>
                  <h1>Hola! Soy julian y diseñé este Rick and Morty App</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel est, laboriosam ab enim maiores distinctio similique accusantium porro ullam incidunt quia fuga, explicabo numquam quidem debitis veritatis nesciunt! Enim?</p>
                </div>
            </div>
            <div className={cardFooter}>
               <img src={footerImage} alt=""/>
            </div>
        </div>
    );
}
