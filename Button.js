/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Button extends Component {
  getButtonStyle(buttonType) {
    if (buttonType === 'homeScreenButton') {
      return {
        viewStyle: {
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#FFF',
          height: 40,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15
        },
        textStyle: {
          color: '#FFF',
          fontSize: 17
        }
      };
    } else if (buttonType === 'logInButton') {
      return {
        viewStyle: {
          height: 40,
          width: 220,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          backgroundColor: '#2295bf',
          borderRadius: 10,
        },
        textStyle: {
          color: '#FFF',
          fontSize: 17
        }
      };
    }else if (buttonType === 'mybtn') {
      return {
        viewStyle: {
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#2293c0',
          height: 40,
          width: 140,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:5,
        },
        textStyle: {
          color: '#2293c0',
          fontSize: 17
        }
      };
    }else if (buttonType === 'profileBtn') {
      return {
        viewStyle: {
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#2293c0',
          height: 40,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15
        },
        textStyle: {
          color: '#2293c0',
          fontSize: 17
        }
      };
    }else if (buttonType === 'SubmitBtn') {
      return {
        viewStyle: {
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#2293c0',
          backgroundColor:'#2293c0',
          height: 35,
          width: 60,
          marginRight:10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        textStyle: {
          color: '#FFFFFF',
          fontSize: 17
        }
      };
    }

    return {
      viewStyle: {
        height: 40,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
      },
      textStyle: {
        color: '#AAA',
        fontSize: 15,
        fontWeight: 'bold'
      }
    };
  }

  render() {
    const buttonStyle = this.getButtonStyle(this.props.buttonType);
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={buttonStyle.viewStyle}>
          <Text style={buttonStyle.textStyle}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
