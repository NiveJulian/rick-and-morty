import styles from './Form.module.css'
import { useState } from 'react';
import validator from './validation';
import loginImage from '../../util/img/image-login.jpg';
const { imagen, card, form } = styles

export default function Form({login}) {
    const [userData, setUserData] = useState({email:"", password:""})

    const [errors, setErrors] = useState({})
    
    const handleChange = (e) => {
        setErrors(validator({ ...userData, [e.target.name]: e.target.value }))
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return (
      <div className={card}>
        <img src={loginImage} className={imagen} alt="Login" />
        <form className={form} onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input 
                    type="text" 
                    onChange={handleChange} 
                    value={userData.email} 
                    name="email"
                    placeholder='example@example.com'
                    />
                    {
                        errors.e1 ? (
                            <p>{errors.e1}</p>
                        ) : errors.e2 ? (
                            <p>{errors.e2}</p>
                        ) : (
                            <p>{errors.e3}</p>
                        )
                    }
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    onChange={handleChange} 
                    value={userData.password} 
                    name="password" 
                    placeholder='******'
                />
                {
                        errors.p1 ? (
                            <p>{errors.p1}</p>
                        ) : (
                            <p>{errors.p2}</p>
                        )
                    }
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
   );
}
