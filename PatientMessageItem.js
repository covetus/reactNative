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
import PatientLatestMessageContent from './PatientLatestMessageContent';

export default class PatientMessageItem extends Component {

call(unreadCount,patient_content,doctor_content){
if(unreadCount>0){
if(patient_content==""){
return unreadCount    
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
                image={this.props.item.chat_history_arr.get_doctor.profile_pics}
                firstName={this.props.item.chat_history_arr.get_doctor.first_name}
                lastName={this.props.item.chat_history_arr.get_doctor.last_name}
                size={60}
              />
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.nameAndpostTextContainer}>
                <View style={styles.nameTextContainer}>
                    <Text numberOfLines={1} style={styles.nameTextStyle}>
                      {this.props.item.chat_history_arr.get_doctor.first_name} {this.props.item.chat_history_arr.get_doctor.last_name}
                    </Text>
                    <IsEmergencyBox isEmer={this.props.item.emergency} />
                    <PainLevelBox painLevel={this.props.item.pain_level} />
                </View>

               <View style={styles.nameTextContainer}>
                <Text numberOfLines={1}  style={styles.postTextStyle}>
                {this.props.item.post_title}
                </Text>
                </View>

                <View style={styles.nameTextContainer}>
                <PatientLatestMessageContent lastChatItem={this.props.item.chat_history_arr}/>
                </View>
                <View style={styles.nameTextContainer}>
                <TimeAndDate  lastChatItem={this.props.item.chat_history_arr}  postedDate={this.props.item.posted_date}/>
                </View>

                
              </View>
              
            </View>
            <View style={styles.timeTextContainer}>
            <MessagesCountBubble count={this.call(this.props.item.all_unread_chat_count_for_this_post,this.props.item.chat_history_arr.patient_content,this.props.item.chat_history_arr.doctor_content)} />
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
