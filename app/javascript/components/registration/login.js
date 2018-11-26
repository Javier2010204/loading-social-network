import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';

//        ./bin/webpack --watch --progress --colors

export class Login extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            canSubmit: true,
            email: "",
            password: "",
            error: ""
        }

        this.enableSubmitBtn.bind(this);
        this.disableSubmitBtn.bind(this);

    }

    enableSubmitBtn(){
        this.setState({
            canSubmit:true
        });
    }

    disableSubmitBtn(){
        this.setState({
            canSubmit:false
        });
    }

    render(){
        return(
            <MuiThemeProvider>
                <Formsy.Form onValid={()=>this.enableSubmitBtn} onInvalid={this.disableSubmitBtn}>
                    <div>
                        <FormsyText
                        name="email"
                        required
                        validations="isEmail"
                        validationError="Asegurate de introducir un correo valido!"
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
                        disabled={!this.state.canSubmit}
                        name="submit"
                        label="Iniciar Sesion"
                        ></RaisedButton>
                    </div>
                </Formsy.Form>
            </MuiThemeProvider>
        );
    }


}