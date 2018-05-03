/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import IsEmergencyBox from './IsEmergencyBox';
import ImageBubble from './ImageBubble';
import MessagesCountBubble from './MessagesCountBubble';
import PainLevelBox from './PainLevelBox';
import TimeAndDate from './TimeAndDate';
import LatestMessageContent from './LatestMessageContent';


export default class DentistMessageItem extends Component {

  call(a,b,c){
    if(a>0){
    if(c==""){
    return a    
    }else {
    return "0" 
    }
    }else{
    return "0"  
    }
    }

  render() {
    return (
      <Swipeable rightButtons={rightButtons}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={this.props.onPress}>
            <View style={{ flex: 18 }} >
              <ImageBubble
                image={this.props.item.get_patient.image}
                firstName={this.props.item.get_patient.name}
                lastName={this.props.item.get_patient.last_name}
                size={60}
              />
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.nameAndpostTextContainer}>
               <View style={styles.nameTextContainer}>
                    <Text numberOfLines={1} style={styles.nameTextStyle}>
                    {this.props.item.get_patient.name} {this.props.item.get_patient.last_name}
                    </Text>
                    <IsEmergencyBox isEmer={this.props.item.emergency} />
                    <PainLevelBox painLevel={this.props.item.pain_level} />
                </View>

                <View style={styles.nameTextContainer}>
                <Text numberOfLines={1}  style={styles.postTextStyle}>
                {this.props.item.post_title}
                </Text>
                </View>

                {this.props.item.chat_history_list.length>0 ? <View style={styles.nameTextContainer}>
                <LatestMessageContent lastChatItem={this.props.item.chat_history_list[0]}/>
                </View> : <View></View>} 

                <View style={styles.nameTextContainer}>
                <TimeAndDate
                isAttendant={this.props.item.is_attendant}
                lastChatItem={this.props.item.chat_history_list[0]}
                postedDate={this.props.item.posted_date}
                />
                </View>
              </View>
            </View>
            <View style={styles.timeTextContainer}>
            <MessagesCountBubble count={this.call(this.props.item.unread_chat_history_count,this.props.item.chat_history_arr.patient_content,this.props.item.chat_history_arr.doctor_content)} />
            </View>
            <View>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  }
}

const rightButtons = [
  <TouchableOpacity style={{ flex: 1 }}>
    <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
      <Text style={{ color: 'white' }} >Delete</Text>
    </View>
  </TouchableOpacity>
];


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 105,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#DDD'
  },
  detailsContainer: {
    flex: 63,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 5
  },
  nameAndpostTextContainer: {
    flex: 1
  },
  messageTextContainer: {
    flex: 1
  },
  nameTextContainer: {
    flexDirection: 'row',
    marginTop:3,
  },
  nameTextStyle: {
    fontWeight: 'bold',
    marginRight: 5
  },
  timeTextContainer: {
    flex: 10,
    paddingTop: 5,
    alignItems: 'flex-end',
  },
  arrowContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
});