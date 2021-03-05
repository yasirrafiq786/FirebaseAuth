import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress = () => {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(() => {
            this.setState({error: 'You failed miserably'});
            this.setState({loading: false});
          });
      });
  };

  onLoginSuccess = () => {
    this.setState({email: '', password: '', loading: false, error: ''});
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            style={{height: 20, width: 100}}
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            style={{height: 20, width: 100}}
            placeholder="password"
            secureTextEntry={true}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.state.loading ? (
            <Spinner size="small" />
          ) : (
            <Button onPress={this.onButtonPress}>Login</Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
