/* @flow */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SInfo from 'react-native-sensitive-info';

export default class MessagesIconWithBadge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msgCount: ''
    };
  }

  componentWillMount() {
    SInfo.getItem('msgCount', {
      sharedPreferencesName: 'mySharedPrefs',
      keychainService: 'myKeychain'
    }).then(value => {
      console.log('<><>inMsg ' + value);
      this.setState({msgCount: value})
    });
  }

  render() {

    return (
      <View style={{
        zIndex: 0,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Icon name='ios-mail' size={22} color={this.props.tintColor}/>
        <View style={{
          position: 'absolute',
          top: 0,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
         <View style={{
              borderRadius: 10,
              width: 10,
              height: 10,
              backgroundColor: 'red',
              zIndex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 8
            }}>
            <Text style={{
              fontSize: 5,
              color: 'white'
            }}>{this.state.msgCount}</Text>
          </View>

        </View>

      </View>
    );
  }
}
