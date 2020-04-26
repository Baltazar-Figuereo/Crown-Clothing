import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import "./sign-up-styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        
        const { value, name} = event.target;
        
        this.setState({[name]: value })
    }

    handleSumbit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSumbit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;



