/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import moment from 'moment';

//2017-07-20 06:16:52

export default class TimeAndDate extends Component {
  getDisplayTimeAndDate(isAttendant, lastChatItem, postedDate) {
    var dd ='';
    if (isAttendant === '0') {
    var datum = Date.parse(postedDate.replace(/-/g,"/"));
    console.log('<><><><><><>  '+datum/1000);
    dd = datum/1000;
    }else{
    dd = lastChatItem.sent_time;  
    }

          var d = new Date(dd * 1000),	// Convert the passed timestamp to milliseconds
          yyyy = d.getFullYear(),
          mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
          dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
          hh = d.getHours(),
          h = hh,
          min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
          ampm = 'AM',
          time;
        if (hh > 12) {
          h = hh - 12;
          ampm = 'PM';
        } else if (hh === 12) {
          h = 12;
          ampm = 'PM';
        } else if (hh == 0) {
          h = 12;
        }
        // ie: 2013-02-18, 8:35 AM	
        return time =  mm+ '-' + dd + '-' + yyyy + '  ' + h + ':' + min + ' ' + ampm;
        console.log("<><><><>  "+time);
         }
   
       render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timeTextStyle}>
          {this.getDisplayTimeAndDate(
            this.props.isAttendant,
            this.props.lastChatItem,
            this.props.postedDate)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeTextStyle: {
    fontSize: 10,
    color: '#666',
    
  },
});
