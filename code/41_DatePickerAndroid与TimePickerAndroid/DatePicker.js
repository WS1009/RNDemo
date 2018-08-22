/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  DatePickerAndroid,
  View
} from 'react-native';

export default class DatePicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: 'default',
    };

  }


  componentWillMount() {
    let self = this;
    let today = new Date();
    let theMinDate = new Date(2015, 1, 1);
    let theMaxDate = new Date(2025, 1, 1);
    let option = {
      date: today,
      minDate: theMinDate,
      maxDate: theMaxDate,
    };

    DatePickerAndroid.open(option).then(
      result => {
        if (result.action === DatePickerAndroid.dismissedAction) {
          self.setState(
            {
              result: '用户没有选择日期',
            }
          );

        } else {
          self.setState(
            {
              result: '用户选择了' + result.year + '年' + (result.month + 1) + '月' + result.day + '日',
            }
          );

        }


      }
    ).catch(
      error => {
        console.log('出错了:' + error);

      }
      );

  }




  render() {
    return (
      <View style={[styles.flex, styles.center]}>
        <Text style={{ fontSize: 18, color: 'red' }}>返回结果：{this.state.result}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});


