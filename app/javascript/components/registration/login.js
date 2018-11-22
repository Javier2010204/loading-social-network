import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component{

    render(){
        return(
            <MuiThemeProvider>
                <Formsy.Form>
                    <div>
                        <FormsyText
                        name="email"
                        required
                        validations="isEmail"
                        validationError="Asegurate de introducir un correo valido"
                        floatingLabelText="Correo electronico"></FormsyText>
                    </div>
                    <div>
                        <FormsyText
                        name="password"
                        required
                        type="password"
                        floatingLabelText="Contraseña"></FormsyText>
                    </div>
                    <div>
                        <RaisedButton
                        name="submit"
                        label="Iniciar Sesion"
                        ></RaisedButton>
                    </div>
                </Formsy.Form>
            </MuiThemeProvider>
        );
    }


}