import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventsList from './components/EventsList';
import EventPage from './components/EventPage';
import { Provider, connect } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

const store = ConfigureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const mapNavigationStateToProps = (Wrapper) => {
  return class extends Component {
    static navigationOptions = Wrapper.navigationOptions;
    render() {
      const {navigation: {state: {params}}} = this.props;
      return <Wrapper {...params} {...this.props} />
    }
  }
}

const AppNavigator = StackNavigator({
  EventsList: { screen: EventsList },
  EventPage: {
    screen: EventPage
  }
})
