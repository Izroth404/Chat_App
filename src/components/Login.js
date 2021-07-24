//Login.js
import React from 'react';
import { GoogleOutlined, FacebookOutlined, WechatOutlined} from '@ant-design/icons'
import { div } from 'prelude-ls';
import "firebase/app";
import { auth } from '../firebase';
import firebase from 'firebase/app';
 
const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <WechatOutlined style={{ fontSize:'100px' , color:'gray' }}/>
                <h2>Chatter-Box
                    <br/><br/> 
                    <div
                        className="login-button google"
                        onClick = { () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    >
                        <GoogleOutlined /> From Google
                    </div>
                    <br /> <br />
 
                    <div
                        className="login-button facebook"
                        onClick = { () => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
 
                    >
                        <FacebookOutlined /> From Facebook
                    </div>
                    <br /> <br />
 
                </h2>
            </div>
        </div>
    );
}
 
export default Login;
