import React from 'react';
import WebpackerReact from 'webpacker-react';
import {Login} from '../components/registration/login';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Registration extends React.Component{

    render(){
        return <Login name="Javier Santa Cruz"/>;
    }
}

WebpackerReact.setup({Registration});