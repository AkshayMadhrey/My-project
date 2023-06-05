import React from "react";
import './Login.css';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa';


function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [userInfo, SetUserInfo] = useState()

    const onSubmit = (data) => {
        // SetUserInfo(data);
        console.log(data);
    }
    const registerOptions = {
        username: {
            required: "UserNameRequired",
            maxLength: {
                value: 10,
                message: "length should be 10"
            }
        },
        password: {
            required: "Password must be more than 4 characters",
            maxLength: {
                value: 8,
                message: "length should be 8"
            }
        }

    }
    return (
        <div className="main">
            <div className="parent">
                <div className="container">
                    {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="heading">
                            <h2>
                                <span>L</span>ogin
                                <span> I</span>n
                            </h2>
                        </div>
                        <div className="ui divider">
                            <div className="ui form">

                                <div className="field">
                                    <label>Username</label><br></br>
                                    <input type="text" name="username" placeholder="username"
                                        {...register("username", registerOptions.username)} />
                                </div>
                                <p>{errors?.username && errors.username.message}</p>
                                <div className="field">
                                    <label>Password</label><br></br>
                                    <input type="password" name="password" placeholder="password"
                                        {...register("password", registerOptions.password)} />
                                </div>
                                <p>{errors?.password && errors.password.message}</p>
                                <div className="link">
                                    <a href="#">Forget password</a>
                                </div>

                                

                                <div className="social-media">
                                    <div className="submit-button">
                                    <button className="fluid-ui-button-blue">Submit</button>
                                    </div>
                                    <div className="facebook">
                                    <a href="https://www.facebook.com/akshay.madhrey"
                                        target="_madhrey">
                                        <FaFacebookSquare className="facebook" />
                                    </a>
                                    </div>
                                    <div className="youtube">
                                    <a href="https://www.youtube.com/@akshaymadhrey2072"
                                        target="_madhrey">
                                        <FaYoutubeSquare className="youtube" />
                                    </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );

}
export default LoginPage;