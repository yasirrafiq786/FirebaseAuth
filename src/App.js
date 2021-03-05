import React, {Component} from 'react';
import firebase from 'firebase';
import {View} from 'react-native';
import {Header, Button, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    console.log(firebase.apps.length);
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBHpytQ3Zg7MqjLFkDyBv4iMrB-NdDLwy0',
        authDomain: 'fir-auth-test-40c21.firebaseapp.com',
        projectId: 'fir-auth-test-40c21',
        storageBucket: 'fir-auth-test-40c21.appspot.com',
        messagingSenderId: '495365361475',
        appId: '1:495365361475:web:ca68ac12135b1eb13c29f6',
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    console.log('sign out successful');
                  });
              }}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

    if (this.state.loggedIn) {
      return (
        <CardSection>
          <Button
            onPress={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  console.log('sign out successful');
                });
            }}>
            Log Out
          </Button>
        </CardSection>
      );
    }
    return <LoginForm />;
  };

  render() {
    return (
      <View>
        <Header headerText="Authentiction" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
