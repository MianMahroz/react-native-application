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
  Container,
  Header,
  Button,
  Title,
} from 'native-base';
import Menu, {MenuItem} from 'react-native-material-menu';
import {EmergencyContactDetail} from '../core/applicationDto';
import {COMPANY_ID} from '../core/AppConstants';
import {genericPickerItems} from '../core/common';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
// import { Container } from './styles';
import {commonStyles} from '../core/CommonStyles';
export default class Applicant_ECD_Component extends Component {
  _menu = null;

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      refresh: '',
    };

    this.props.relationshipList
      ? this.props.relationshipList.length > 0
        ? this.props.relationshipList
        : this.props.getRelationshipTypeListByCompany({
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

  getEmergencyContactDetails(tabIndex) {
    return this.props.applicants[this.props.tabIndex].emergencyContactDetails[
      tabIndex
    ];
  }
  getApplicant() {
    return this.props.applicants[this.props.tabIndex];
  }
  render() {
    function CustomTabs(list) {
      var tabs = [];
      for (var i = 0; i < list.length; i++) {
        tabs.push(CustomTabContent(list[i], i));
      }
      return tabs;
    }
    const CustomTabContent = ecdObj => {
      // console.log('tabContent', ecdObj);
      // console.log('index', i);

      const applicant = this.props.applicants[this.props.tabIndex];
      const emergencyContactDetailObj =
        applicant.emergencyContactDetails[ecdObj.tabIndex];

      return (
        <Tab
          key={ecdObj.tabIndex}
          heading={
            <TabHeading
              style={{backgroundColor: '#ffffff', height: 60, fontSize: 7}}>
              <Card
                transparent
                style={{
                  marginRight: 0,
                  marginLeft: 0,
                }}>
                <CardItem>
                  <Left>
                    <Label style={{color: '#5b8661', fontSize: 13}}>
                      E-Contact Details
                    </Label>
                  </Left>
                  <Right>
                    {ecdObj.tabIndex >= 1 && (
                      <TouchableOpacity>
                        <Icon
                          style={{fontSize: 20, paddingLeft: 10}}
                          name="close"
                          onPress={() => {
                            var applicant = this.props.applicants[
                              this.props.tabIndex
                            ];
                            applicant.emergencyContactDetails = applicant.emergencyContactDetails.filter(
                              s => s.tabIndex !== ecdObj.tabIndex,
                            );
                            console.log(
                              'applicant.emergencyContactDetails',
                              applicant.emergencyContactDetails.length,
                            );
                            this.props.updateApplicant(applicant);
                            // this.setState({
                            //   page: applicant.emergencyContactDetails.length,
                            // });
                            setTimeout(() => {
                              this.props.updateECDPage(
                                applicant.emergencyContactDetails.length,
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

                      var ecdNewObj = new EmergencyContactDetail();
                      ecdNewObj.tabName = 'EmergencyContactDetails';
                      ecdNewObj.tabIndex =
                        applicant.emergencyContactDetails.length;

                      applicant.emergencyContactDetails.push(ecdNewObj);
                      this.props.updateApplicant(applicant);
                      setTimeout(() => {
                        // this.setState({
                        //   page: this.props.applicants[this.props.tabIndex]
                        //     .emergencyContactDetails.length,
                        // });
                        this.props.updateECDPage(
                          applicant.emergencyContactDetails.length,
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
                <Label style={commonStyles.labelStyle}>Name</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      emergencyContactDetailObj.name = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={emergencyContactDetailObj.name}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Relationship</Label>
              </Left>
              <Body>
                {this.props.relationshipList.length > 0 && (
                  <Picker
                    mode="dropdown"
                    selectedValue={
                      emergencyContactDetailObj.relationshipSelected
                    }
                    style={{height: 50, width: 350}}
                    onValueChange={obj => {
                      emergencyContactDetailObj.relationship = obj.code;
                      emergencyContactDetailObj.relationshipSelected = obj;
                      this.setState({refresh: ''});
                      this.props.updateApplicant(applicant);
                    }}>
                    {genericPickerItems(this.props.relationshipList)}
                  </Picker>
                )}
                {!this.props.relationshipList.length && (
                  <Label>No Relationship List Found!</Label>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Contact Number</Label>
              </Left>
              <Body>
                <Item>
                  <Input
                    onChangeText={text => {
                      emergencyContactDetailObj.contactNumber = text;
                      this.props.updateApplicant(applicant);
                    }}
                    defaultValue={emergencyContactDetailObj.contactNumber}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Label style={commonStyles.labelStyle}>Province</Label>
              </Left>
              <Body>
                {/* {this.props.provinceList.length > 0 && ( */}
                <Picker
                  mode="dropdown"
                  selectedValue={emergencyContactDetailObj.stateCodeSelected}
                  style={{height: 50, width: 350}}
                  onValueChange={obj => {
                    emergencyContactDetailObj.stateCode = obj.code;
                    emergencyContactDetailObj.stateCodeSelected = obj;
                    this.props.updateApplicant(applicant);
                    // this.setState({refresh: ''});
                    //updating cities
                    this.props.getAllCitiesByDistrictId({
                      companyId: COMPANY_ID,
                      userId: this.props.user.userId,
                      districtId: obj.code,
                    });
                  }}>
                  {genericPickerItems(this.props.provinceList)}
                </Picker>
                {/* )} */}
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
                {this.props.citiesList.length > 0 && (
                  <Picker
                    mode="dropdown"
                    selectedValue={emergencyContactDetailObj.cityCodeSelected}
                    style={{height: 50, width: 350}}
                    onValueChange={obj => {
                      emergencyContactDetailObj.cityCode = obj.code;
                      emergencyContactDetailObj.cityCodeSelected = obj;
                      this.setState({refresh: ''});
                      this.props.updateApplicant(applicant);
                    }}>
                    {genericPickerItems(this.props.citiesList)}
                  </Picker>
                )}
                {!this.props.citiesList.length && (
                  <Label>No Cities List Found!</Label>
                )}
              </Body>
            </CardItem>
          </Card>
        </Tab>
      );
    };
    return (
      <Container>
        <Content padder>
          <Tabs
            tabBarUnderlineStyle={{backgroundColor: '#5b8661'}}
            tabBarBackgroundColor="#ffffff"
            page={this.props.ecdPage - 1}
            initialPage={this.props.ecdPage}
            renderTabBar={() => <ScrollableTab />}>
            {this.props.applicants[this.props.tabIndex].emergencyContactDetails
              .length > 0
              ? CustomTabs(
                  this.props.applicants[this.props.tabIndex]
                    .emergencyContactDetails,
                )
              : 'No Model Selected'}
          </Tabs>
        </Content>
      </Container>
    );
  }
}
