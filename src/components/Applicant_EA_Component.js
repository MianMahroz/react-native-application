import React, {Component} from 'react';
import {
  Text,
  Content,
  Tabs,
  ScrollableTab,
  Tab,
  TabHeading,
  Icon,
  CardItem,
  Card,
  Left,
  Body,
  Right,
  Label,
  Item,
  Input,
  Picker,
} from 'native-base';
import Menu, {MenuItem} from 'react-native-material-menu';
import {EmergencyContactDetail, Address} from '../core/applicationDto';

import {commonStyles} from '../core/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COMPANY_ID} from '../core/AppConstants';
import {genericPickerItems} from '../core/common';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { Container } from './styles';

export default class Applicant_EA_Component extends Component {
  _menu = null;
  constructor(props) {
    super(props);

    this.state = {
      refresh: '',
      page: 0,
      livingSince: new Date(),
      showDatePicker: false,
    };

    this.props.addressTypeList
      ? this.props.addressTypeList.length > 0
        ? this.props.addressTypeList
        : this.props.getLocalizedSetupListForAddressType({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
            languageCode: '00001',
            setupCode: 'ADT',
            setupName: 'AddressType',
          })
      : null;

    this.props.propertyUnitList
      ? this.props.propertyUnitList.length > 0
        ? this.props.propertyUnitList
        : this.props.getPropertyUnitListByCompany({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    this.props.countryList
      ? this.props.countryList.length > 0
        ? this.props.countryList
        : this.props.getCountryList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    this.props.provinceList
      ? this.props.provinceList.length > 0
        ? this.props.provinceList
        : this.props.getProvinceList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;
  }
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  getMailingAddressObject(tabIndex) {
    return this.props.applicants[this.props.tabIndex].applicantDetail
      .applicantContactDetail.addresses[tabIndex];
  }
  getApplicant() {
    return this.props.applicants[this.props.tabIndex];
  }
  render() {
    function CustomTabs(list) {
      //   console.log('ECD Tab Called ', list.length);
      var tabs = [];
      for (var i = 0; i < list.length; i++) {
        tabs.push(CustomTabContent(list[i], i));
      }
      return tabs;
    }

    const CustomTabContent = eaObj => {
      // console.log('index', i);

      const applicant = this.props.applicants[this.props.tabIndex];
      const mailingAddress =
        applicant.applicantDetail.applicantContactDetail.addresses[
          eaObj.tabIndex
        ];
      console.log('Email Object Called');
      return (
        <Tab
          key={eaObj.tabIndex}
          heading={
            <TabHeading style={{backgroundColor: '#ffffff', height: 60}}>
              <Label style={{color: '#5b8661', fontSize: 13}}>
                Email Address
              </Label>
              <Card
                transparent
                style={{
                  marginRight: 0,
                  marginLeft: 0,
                }}>
                <CardItem>
                  <Left />
                  <Body />
                  <Right>
                    {eaObj.tabIndex >= 1 && (
                      <TouchableOpacity>
                        <Icon
                          style={{fontSize: 15, paddingLeft: 2}}
                          name="close"
                          onPress={() => {
                            var applicant = this.props.applicants[
                              this.props.tabIndex
                            ];
                            applicant.applicantDetail.applicantContactDetail.addresses = applicant.applicantDetail.applicantContactDetail.addresses.filter(
                              s => s.tabIndex !== eaObj.tabIndex,
                            );

                            this.props.updateApplicant(applicant);
                            // this.setState({
                            //   page: applicant.emergencyContactDetails.length,
                            // });
                            setTimeout(() => {
                              this.props.updateEAPage(
                                applicant.applicantDetail.applicantContactDetail
                                  .addresses.length,
                              );
                              // this.hideMenu();
                            }, 10);
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  </Right>
                </CardItem>
              </Card>
            </TabHeading>
          }>
          <Card>
            <CardItem>
              <CardItem>
                <Left />
                <Body />
                {/* <Right>{actions(ecdObj)}</Right> */}
                <Right>
                  <Icon
                    name="add"
                    onPress={() => {
                      var applicant = this.props.applicants[
                        this.props.tabIndex
                      ];

                      var ecdNewObj = new Address();
                      ecdNewObj.tabName = 'Address';
                      ecdNewObj.tabIndex =
                        applicant.applicantDetail.applicantContactDetail.addresses.length;

                      applicant.applicantDetail.applicantContactDetail.addresses.push(
                        ecdNewObj,
                      );
                      this.props.updateApplicant(applicant);
                      setTimeout(() => {
                        this.props.updateEAPage(
                          applicant.applicantDetail.applicantContactDetail
                            .addresses.length,
                        );
                        // this.hideMenu();
                      }, 10);
                    }}
                  />
                </Right>
              </CardItem>
            </CardItem>

            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Address Type</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={mailingAddress.addressTypeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    mailingAddress.addressType = obj.code;
                    mailingAddress.addressTypeSelected = obj;
                    this.setState({refresh: ''});
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.addressTypeList)}
                </Picker>
                {!this.props.addressTypeList.length && (
                  <Label>No Address Type List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Address Line</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      mailingAddress.addressLine = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={mailingAddress.addressLine}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Property Type</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={mailingAddress.propertyTypeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    mailingAddress.propertyType = obj.code;
                    mailingAddress.propertyTypeSelected = obj;
                    this.setState({refresh: ''});
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.propertyUnitList)}
                </Picker>
                {!this.props.propertyUnitList.length && (
                  <Label>No Property Unit List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Address Status</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      mailingAddress.addressStatus = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={mailingAddress.addressStatus}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Living Since</Label>
              </Left>
              <Right>
                <Text>
                  {mailingAddress.establishedSince
                    ? moment
                        .utc(mailingAddress.establishedSince)
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
                    value={mailingAddress.establishedSince}
                    isVisible={this.state.showDatePicker}
                    mode="date"
                    is24Hour={false}
                    display="spinner"
                    initialDate={new Date()}
                    onChange={text => {
                      console.log('selected Time', text.nativeEvent.timestamp);
                      mailingAddress.establishedSince =
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
                <Label style={commonStyles.labelStyle}>Country</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={mailingAddress.countryCodeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    mailingAddress.countryCode = obj.code;
                    mailingAddress.countryCodeSelected = obj;
                    this.setState({refresh: ''});
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.countryList)}
                </Picker>
                {!this.props.countryList.length && (
                  <Label>No Country List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Province</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={mailingAddress.provinceSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    mailingAddress.province = obj.code;
                    mailingAddress.provinceSelected = obj;
                    this.setState({refresh: ''});
                    this.props.updateApplicant(applicant);
                    //updating cities
                    this.props.getAllCitiesByDistrictId({
                      companyId: COMPANY_ID,
                      userId: this.props.user.userId,
                      districtId: mailingAddress.province,
                    });
                  }}>
                  {genericPickerItems(this.props.provinceList)}
                </Picker>
                {!this.props.provinceList.length && (
                  <Label>No Province List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>City</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={mailingAddress.citySelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    mailingAddress.city = obj.code;
                    mailingAddress.citySelected = obj;
                    this.setState({refresh: ''});
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.citiesList)}
                </Picker>
                {!this.props.citiesList.length && (
                  <Label>No Cities List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Postal Code</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      mailingAddress.postalCode = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={mailingAddress.postalCode}
                  />
                </Item>
              </Body>
            </CardItem>
          </Card>
        </Tab>
      );
    };
    return (
      <Content padder>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: '#5b8661'}}
          tabBarBackgroundColor="#ffffff"
          page={this.props.eaPage - 1}
          initialPage={this.props.eaPage}
          renderTabBar={() => <ScrollableTab />}>
          {this.props.applicants[this.props.tabIndex].applicantDetail
            .applicantContactDetail.addresses.length > 0
            ? CustomTabs(
                this.props.applicants[this.props.tabIndex].applicantDetail
                  .applicantContactDetail.addresses,
              )
            : 'No Model Selected'}
        </Tabs>
      </Content>
    );
  }
}
