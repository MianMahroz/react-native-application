import React, {Component} from 'react';
import {
  Item,
  Input,
  Content,
  Label,
  Body,
  Card,
  CardItem,
  Picker,
  Right,
  Text,
  Left,
  Icon,
} from 'native-base';
import {COMPANY_ID} from '../core/AppConstants';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {genericPickerItems} from '../core/common';
import {commonStyles} from '../core/CommonStyles';
export default class Applicant_Company_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      dobSelected: new Date(),
      showDatePicker: false,
      localizeName: '',
    };

    // for getPhoneTypeList
    this.props.phoneTypesList
      ? this.props.phoneTypesList.length > 0
        ? this.props.phoneTypesList
        : this.props.getPhoneTypeList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;
  }

  render() {
    const applicant = this.props.applicants[this.props.tabIndex];
    console.log('company component', applicant.applicantDetail);
    const applicantDetailObj = applicant.applicantDetail;
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Company Name</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    applicantDetailObj.companyName = text;
                    this.props.updateApplicant(applicant);
                  }}
                  defaultValue={applicantDetailObj.companyName}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Name</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    applicantDetailObj.companyNameThai = text;
                    this.props.updateApplicant(applicant);
                  }}
                  defaultValue={applicantDetailObj.companyNameThai}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Registration Number</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    applicantDetailObj.registrationNumber = text;
                    this.props.updateApplicant(applicant);
                  }}
                  defaultValue={applicantDetailObj.registrationNumber}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Registration Date</Label>
            </Left>
            <Right>
              <Text>
                {applicantDetailObj.registrationDate
                  ? moment
                      .utc(applicantDetailObj.registrationDate)
                      .format('MM/DD/YYYY')
                  : moment.utc(new Date()).format('MM/DD/YYYY')}
              </Text>
              <Icon
                onPress={() => {
                  this.setState({
                    showDatePicker: true,
                  });
                }}
                name="calendar"
              />
              {this.state.showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={this.state.dobSelected}
                  isVisible={this.state.showDatePicker}
                  mode="date"
                  is24Hour={false}
                  display="spinner"
                  initialDate={new Date()}
                  onChange={text => {
                    console.log('selected Time', text.nativeEvent.timestamp);
                    applicantDetailObj.registrationDate =
                      text.nativeEvent.timestamp;
                    this.setState({
                      showDatePicker: false,
                    });
                    this.props.updateApplicant(applicant);
                  }}
                />
              )}
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Email Id</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    applicantDetailObj.emailAddress = text;
                    this.props.updateApplicant(applicant);
                  }}
                  defaultValue={applicantDetailObj.emailAddress}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Phone Type</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={
                  applicantDetailObj.applicantContactDetail.addresses[0]
                    .phoneNumbers[0].phoneTypeSelected
                }
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  applicantDetailObj.applicantContactDetail.addresses[0].phoneNumbers[0].phoneType =
                    obj.code;
                  applicantDetailObj.applicantContactDetail.addresses[0].phoneNumbers[0].phoneTypeSelected = obj;

                  this.setState({refresh: ''});
                  this.props.updateApplicant(applicant);
                }}>
                {genericPickerItems(this.props.phoneTypesList)}
              </Picker>
              {!this.props.phoneTypesList.length && (
                <Label style={{fontSize: 12}}>No Phone Types List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Phone Number</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    applicantDetailObj.applicantContactDetail.addresses[0].phoneNumbers[0].phoneNumber = text;
                    this.props.updateApplicant(applicant);
                  }}
                  defaultValue={
                    applicantDetailObj.applicantContactDetail.addresses[0]
                      .phoneNumbers[0].phoneNumber
                  }
                />
              </Item>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
