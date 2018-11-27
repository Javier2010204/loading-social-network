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

    syncEmail(ev){
        let element = ev.target;
        let value = element.value;

        this.setState({
            email:value
        })
    }

    synPassword(ev){
        let element = ev.target;
        let value = element.value;

        this.setState({
            password:value
        })
    }

    render(){
        return(
            <MuiThemeProvider>
                <Formsy.Form onValid={()=>this.enableSubmitBtn} onInvalid={this.disableSubmitBtn}>
                    <p>{this.email}</p>
                    <div>
                        <FormsyText
                        onChange={(e)=> this.syncEmail(e)}
                        name="email"
                        required
                        validations="isEmail"
                        validationError="Asegurate de introducir un correo valido!"
                        floatingLabelText="Correo electronico"></FormsyText>
                    </div>
                    <div>
                        <FormsyText
                        onChange={(e)=> this.syncPassword(e)}
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