import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignedIn, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignedIn ? 'google-sign-in' : ''} custom-button`} 
        {...otherProps} >
            {children}
        </button>
    )
}

export default CustomButton;