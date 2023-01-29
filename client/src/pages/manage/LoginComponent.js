import React from 'react';

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";



function LoginComponent() {
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {  
                    localStorage.setItem('accessToken', credentialResponse.credential);
                    window.location.reload(false);
                    }
                }
                onError={() => {
                    console.log("Login Failed");
                }}
                isSignedIn={true}
            />
        </GoogleOAuthProvider>
    );
};

export default LoginComponent;
