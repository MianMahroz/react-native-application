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

export default class Applicant_ED_Component extends Component {
  _menu = null;
  constructor(props) {
    super(props);

    this.state = {
      employeeTypeSelected: '',
      occupationSelected: '',
      positionSelected: '',
      businessNatureSelected: '',
      provinceSelected: '',
      citySelected: '',
      phoneTypeSelected: '',
    };

    this.props.employeeTypeList
      ? this.props.employeeTypeList.length > 0
        ? this.props.employeeTypeList
        : this.props.getEmployeeTypeList({
            companyId: COMPANY_ID,
          })
      : null;

    this.props.positionList
      ? this.props.positionList.length > 0
        ? this.props.positionList
        : this.props.getPositionList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    this.props.businessNatureList
      ? this.props.businessNatureList.length > 0
        ? this.props.businessNatureList
        : this.props.getBusinessNature({
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
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  getEmploymentDetailsObject(tabIndex) {
    console.log('tabIndex', tabIndex);
    return this.props.applicants[this.props.tabIndex].employments[tabIndex];
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
      //   console.log('eaObj', eaObj);
      // console.log('index', i);

      const applicant = this.props.applicants[this.props.tabIndex];
      const employmentDetailObj = applicant.employments[eaObj.tabIndex];
      return (
        <Tab
          key={eaObj.tabIndex}
          heading={
            <TabHeading style={{backgroundColor: '#ffffff', height: 60}}>
              <Label style={{color: '#5b8661', fontSize: 13}}>
                Employee Details
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
                          style={{fontSize: 20, paddingLeft: 10}}
                          name="close"
                          onPress={() => {
                            applicant.employments = applicant.employments.filter(
                              s => s.tabIndex !== eaObj.tabIndex,
                            );

                            this.props.updateApplicant(applicant);
                            setTimeout(() => {
                              this.props.updateEDPage(
                                applicant.employments.length,
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
                      ecdNewObj.tabIndex = applicant.employments.length;
                      applicant.employments.push(ecdNewObj);
                      this.props.updateApplicant(applicant);
                      setTimeout(() => {
                        this.props.updateEDPage(applicant.employments.length);
                      }, 10);
                    }}
                  />
                </Right>
              </CardItem>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Company Name</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.employeeName = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.employeeName}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Employee Type</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={employmentDetailObj.employeeTypeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.employeeType = obj.code;
                    employmentDetailObj.employeeTypeSelected = obj;
                    this.setState({
                      refresh: '',
                    });
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.employeeTypeList)}
                </Picker>
                {!this.props.employeeTypeList.length && (
                  <Label>No EmployeeType List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Occupation</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.occupation = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.occupation}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Department Job</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.departmentJob = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.departmentJob}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>
                  Net Monthly Income
                </Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.netmonthlyIncome = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.netmonthlyIncome}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Position</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={employmentDetailObj.positionSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.position = obj.code;
                    employmentDetailObj.positionSelected = obj;

                    this.setState({
                      refresh: '',
                    });
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.positionList)}
                </Picker>
                {!this.props.positionList.length && (
                  <Label>No Position List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Business Nature</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={employmentDetailObj.businessNatureSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.businessNature = obj.code;
                    employmentDetailObj.businessNatureSelected = obj.code;

                    this.setState({
                      refresh: '',
                    });
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.businessNatureList)}
                </Picker>
                {!this.props.businessNatureList.length && (
                  <Label>No Business Nature List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>
                  No. of Company Employee
                </Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.noofCompanyEmployee = text;
                      this.props.updateApplicant(employmentDetailObj);
                    }}
                    defaultValue={employmentDetailObj.noofCompanyEmployee}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>
                  Years Joined in Company
                </Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.yearsJoinedInCompany = text;
                      this.props.updateApplicant(employmentDetailObj);
                    }}
                    defaultValue={employmentDetailObj.yearsJoinedInCompany}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Time(Months) </Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.timeInMonth = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.timeInMonth}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Address</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.addressLine = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.addressLine}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Province</Label>
              </Left>
              <Body>
                <Picker
                  mode="dialog"
                  selectedValue={employmentDetailObj.provinceSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.province = obj.code;
                    employmentDetailObj.provinceSelected = obj;

                    this.setState({
                      refresh: '',
                    });

                    this.props.updateApplicant(applicant);
                    //updating cities
                    this.props.getAllCitiesByDistrictId({
                      companyId: COMPANY_ID,
                      userId: this.props.user.userId,
                      districtId: employmentDetailObj.province,
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
                  selectedValue={employmentDetailObj.citySelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.city = obj.code;
                    employmentDetailObj.citySelected = obj.code;
                    this.setState({
                      refresh: '',
                    });
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
                <Label style={commonStyles.labelStyle}>Post Code</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.postCode = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.postCode}
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
                  selectedValue={employmentDetailObj.phoneTypeCodeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    employmentDetailObj.phoneTypeCode = obj.code;
                    employmentDetailObj.phoneTypeCodeSelected = obj.code;

                    this.setState({
                      refresh: '',
                    });
                    this.props.updateApplicant(applicant);
                  }}>
                  {genericPickerItems(this.props.phoneTypesList)}
                </Picker>
                {!this.props.phoneTypesList.length && (
                  <Label style={{fontSize: 12}}>
                    No Phone Types List Found!
                  </Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Phone</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.phone = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.phone}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Area Code</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      employmentDetailObj.areaCode = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={employmentDetailObj.areaCode}
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
          page={this.props.edPage - 1}
          initialPage={this.props.edPage}
          renderTabBar={() => <ScrollableTab />}>
          {this.props.applicants[this.props.tabIndex].employments.length > 0
            ? CustomTabs(this.props.applicants[this.props.tabIndex].employments)
            : 'No Model Selected'}
        </Tabs>
      </Content>
    );
  }
}
