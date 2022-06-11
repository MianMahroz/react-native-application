import React, {Component} from 'react';

import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  View,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Card,
  CardItem,
  Label,
} from 'native-base';

import {Field, reduxForm} from 'redux-form';
import {FloatingAction} from 'react-native-floating-action';
import {
  FloatingButtonActions,
  BORROWER_IND,
  BORROWER_COMP,
  COBORROWER_IND,
  GUARANTOR_IND,
  COBORROWER_COMP,
  GUARANTOR_COMP,
} from '../core/ApplicantTypes';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import Applicant_PI_Component from './Applicant_PI_Component';
import Applicant_PI_Container from '../containers/Applicant_PI_Container';
import {
  Applicant,
  Address,
  PhoneNumber,
  EmergencyContactDetail,
  Employment,
} from '../core/applicationDto';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Applicant_ECD_Component from './Applicant_ECD_Component';
import Applicant_ECD_Container from '../containers/Applicant_ECD_Container';
import Applicant_EA_Container from '../containers/Applicant_EA_Container';
import Applicant_ED_Container from '../containers/Applicant_ED_Container';
import Applicant_Liabilities_Component from './Applicant_Liabilities_Component';
import Applicant_Asset_Container from '../containers/Applicant_Asset_Container';
import Applicant_Income_Container from '../containers/Applicant_Income_Container';
import {genericCollapse} from '../core/common';
import Applicant_Expense_Container from '../containers/Applicant_Expense_Container';
import Applicant_Company_Container from '../containers/Applicant_Company_Container';
export default class ApplicantComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, //do not show the body by default
      dataArray: [],
    };
  }

  personalInformation = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'PERSONAL INFORMATION',
        <Applicant_PI_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };

  companyInformation = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_COMP ||
      applicantObj.tabName === COBORROWER_COMP ||
      applicantObj.tabName === GUARANTOR_COMP
    ) {
      return genericCollapse(
        'COMPANY INFORMATION',
        <Applicant_Company_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };
  emergencyContactDetails = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'EMERGENCY CONTACT DETAILS',
        <Applicant_ECD_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };

  mailingAddress = applicantObj => {
    return genericCollapse(
      'MAILING ADDRESS(s)',
      <Applicant_EA_Container
        tabName={applicantObj.tabName}
        tabIndex={applicantObj.tabIndex}
      />,
    );
  };
  employmentDetails = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'Employment Details',
        <Applicant_ED_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };

  liabilities = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'Liabilities',
        <Applicant_Liabilities_Component
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };
  assets = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'Assets',
        <Applicant_Asset_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };
  income = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'Income',
        <Applicant_Income_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };
  expense = applicantObj => {
    if (
      applicantObj.tabName === BORROWER_IND ||
      applicantObj.tabName === COBORROWER_IND ||
      applicantObj.tabName === GUARANTOR_IND
    ) {
      return genericCollapse(
        'Expense',
        <Applicant_Expense_Container
          tabName={applicantObj.tabName}
          tabIndex={applicantObj.tabIndex}
        />,
      );
    }
  };
  render() {
    function CustomTabs(list) {
      // console.log('custom tab ', list.length);
      var tabs = [];
      for (var i = 0; i < list.length; i++) {
        tabs.push(CustomTabContent(list[i], i));
      }
      return tabs;
    }
    const CustomTabContent = (applicantObj, i) => {
      console.log('tabContent', applicantObj.tabName);
      // console.log('index', i);
      return (
        <Tab
          key={applicantObj.tabIndex}
          heading={
            <TabHeading
              style={{backgroundColor: 'rgb(91, 134, 97)', height: 60}}>
              <Text style={{color: '#ffffff', fontSize: 14}}>
                {applicantObj.tabName} {applicantObj.tabIndex} {i}
              </Text>
              {i > 0 && (
                <TouchableOpacity transparent>
                  <Icon
                    style={{fontSize: 18}}
                    name="close"
                    onPress={() => {
                      console.log(
                        'remove applicant name',
                        applicantObj.tabName,
                      );
                      this.props.removeApplicant(applicantObj.tabName);
                    }}
                  />
                </TouchableOpacity>
              )}
            </TabHeading>
          }>
          <Content style={{backgroundColor: '#fff'}}>
            {this.personalInformation(applicantObj)}
            {this.companyInformation(applicantObj)}
            {this.emergencyContactDetails(applicantObj)}
            {this.mailingAddress(applicantObj)}
            {this.employmentDetails(applicantObj)}
            {this.liabilities(applicantObj)}
            {this.assets(applicantObj)}
            {this.income(applicantObj)}
            {this.expense(applicantObj)}
          </Content>
        </Tab>
      );
    };

    const addApplicant = tabName => {
      var found = this.props.applicants.filter(tab => tab.tabName === tabName);

      if (found && found.length > 0) {
        console.log('found', found[0].tabIndex);
        // this.setState({page: found[0].tabIndex});
        this.props.updatePage(found[0].tabIndex);
      } else {
        if (tabName === BORROWER_COMP) {
          this.props.removeApplicant(BORROWER_IND);
        }
        if (tabName === BORROWER_IND) {
          this.props.removeApplicant(BORROWER_COMP);
        }

        const applicantInitObj = new Applicant();

        applicantInitObj.applicantDetail.tabName = 'PersonalInformation';
        applicantInitObj.applicantDetail.tabIndex = 0;

        // emergency contact details
        var ecdObj = new EmergencyContactDetail();
        ecdObj.tabName = 'EmergencyContactDetails';
        ecdObj.tabIndex = 0;
        var arr = [];
        arr.push(ecdObj);

        applicantInitObj.emergencyContactDetails = arr;

        // Employee Details
        var edArr = [];
        var edObj = new Employment();
        edObj.tabName = 'EMPLOYMENT';
        edObj.tabIndex = 0;

        edArr.push(edObj);
        applicantInitObj.employments = edArr;

        // adding address array in case of borrower
        var addressObj = new Address();
        addressObj.tabIndex = 0;
        addressObj.tabName = 'Address';
        var phoneNumberArr = [];
        phoneNumberArr.push(new PhoneNumber());
        addressObj.phoneNumbers = phoneNumberArr;
        // var addressArr = [];
        // addressArr.push(addressObj);
        applicantInitObj.applicantDetail.applicantContactDetail.addresses.push(
          addressObj,
        );

        applicantInitObj.tabName = tabName;
        applicantInitObj.tabIndex = this.props.applicants
          ? this.props.applicants.length - 1
          : 0;
        // var applicantObj = {
        //   tabName: tabName,
        //   tabIndex: this.props.applicants ? this.props.applicants.length : 0,
        // };
        this.props.addApplicant(applicantInitObj);

        setTimeout(() => {
          // this.setState({page: this.props.applicants.length});
          this.props.updatePage(this.props.applicants.length);
        }, 10);
      }
    };

    return (
      <Container>
        <Header style={{backgroundColor: 'rgb(91, 134, 97)'}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 15}}>Applicant</Title>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => {
                this.props.updateApplicantStatus('done');
                this.props.navigation.navigate('ApplicationMenu');
              }}>
              <Button
                style={{
                  marginLeft: 2,
                  marginTop: 22,
                  width: 77,
                  height: 22,
                  backgroundColor: '#ffffffff',
                }}>
                <Text style={{color: 'rgb(91, 134, 97)', fontSize: 13}}>
                  save
                </Text>
              </Button>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content padder>
          <Tabs
            tabBarBackgroundColor="#5B8661"
            page={this.props.page - 1}
            renderTabBar={render => <ScrollableTab />}>
            {this.props.applicants.length > 0
              ? CustomTabs(this.props.applicants)
              : 'No Model Selected'}
          </Tabs>
        </Content>

        <FloatingAction
          color="rgb(91, 134, 97)"
          dismissKeyboardOnPress={true}
          actions={FloatingButtonActions}
          onPressItem={name => {
            addApplicant(name);
          }}
        />
      </Container>
    );
  }
}
