import React, { useState } from 'react';

function Register() {

    const [name, changeHandler] = useState('maria@mail.com');
   

      return (
        <>
            <div className='item'>
                <section id="register-page" className="content auth">
                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                    <form id="register">
                        <div className="container">
                            <div className="brand-logo"></div>
                            <h1>Register</h1>

                            <label htmlFor="email">Email:</label>
                            <input onChange={(e) => changeHandler()} type="email" id="email" name="email" placeholder="maria@email.com" />

                            {/* <label htmlFor="pass">Password:</label>
                            <input onChange={changeHandler('password')} type="password" name="password" id="register-password" />

                            <label htmlFor="con-pass">Confirm Password:</label> */}
                            {/* <input onChange={changeHandler} type="password" name="confirmpassword" id="confirmpassword" /> */}

                            <input className="btn submit" type="submit" value="Register" />


                        </div>
                    </form>

                </section>
            </div>

            <div className='item'>
                <section id="register-page" className="content auth">
                    <form id="register">
                        <div className="container">
                            <div className="brand-logo1"></div>
                            <h1>View Register</h1>

                            <label htmlFor="email">Email:</label>
                            {/* <input type="email" id="email" name="email" placeholder="maria@email.com" /> */}
                            <h1>{name}</h1>

                            <label htmlFor="pass">Password:</label>
                            {/* <h1>{allValues}</h1> */}


                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input type="password" name="confirm-password" id="confirm-password" />

                            <input className="btn submit" type="submit" value="Register" />
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Register;