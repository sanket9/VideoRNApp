import React from 'react';
import {View, Text} from 'react-native';
import {SentForApprove, LiveApprove} from '../component/svg';
const dashbordStatus = props => {
  if (props.approved == 'false') {
    let backColor = 'rgba(250, 100, 0, 0.07)';
    let color = '#fa6200';
  } else {
    let backColor = 'rgba(69, 137, 255, 0.07)';
    let color = '#4589ff';
  }
  return (
    <View
      style={{
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(250, 100, 0, 0.07)',
        borderRadius: 10,
        padding: 12,
        justifyContent: 'center',
      }}>
      {props.approved == 'false' ? <SentForApprove /> : <LiveApprove />}
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 12,
          fontWeight: '600',
          color: '#fa6200',
          marginLeft: 10,
        }}>
        Sent for Approval
      </Text>
    </View>
  );
};

export default dashbordStatus;
