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
class Applicant_PI_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      idCardSelected: '',
      genderSelected: '',
      hukouSelected: '',
      martialStatusSelected: '',
      educationSelected: '',
      citizenShipSelected: '',
      nationalitySelected: '',
      careerTypeSelected: '',
      phoneTypeSelected: '',
      occupationSelected: '',
      subOccupationSelected: '',
      relationshipSelected: '',
      dobSelected: new Date(),
      showDatePicker: false,
      localizeName: '',
    };
    // this.renderInput = this.renderInput.bind(this);
    // console.log('Personal Details Constructor Called' + this.props.idCardTypes);

    //setup called
    this.props.idCardTypes
      ? this.props.idCardTypes.length > 0
        ? this.props.idCardTypes
        : this.props.getIdCardTypes({companyId: COMPANY_ID})
      : null;

    // for gender list
    this.props.genderList
      ? this.props.genderList.length > 0
        ? this.props.genderList
        : this.props.getGenderList({
            companyId: COMPANY_ID,
            languageCode: '00001',
            setupCode: 'GEN',
            setupName: 'Gender',
          })
      : null;

    // for hukou list
    this.props.hokouList
      ? this.props.hokouList.length > 0
        ? this.props.hokouList
        : this.props.getHokouList({
            companyId: COMPANY_ID,
          })
      : null;

    // //   // for marital Status list
    this.props.martialStatusList
      ? this.props.martialStatusList.length > 0
        ? this.props.martialStatusList
        : this.props.getMartialStatusList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    // for Education  list
    this.props.educationList
      ? this.props.educationList.length > 0
        ? this.props.educationList
        : this.props.getEducationList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    // for CitizenShip  list
    this.props.raceList
      ? this.props.raceList.length > 0
        ? this.props.raceList
        : this.props.getRaceList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    // for Nationality list
    this.props.nationalityList
      ? this.props.nationalityList.length > 0
        ? this.props.nationalityList
        : this.props.getNationalityList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    // for Occupation list
    this.props.occupationList
      ? this.props.occupationList.length > 0
        ? this.props.occupationList
        : this.props.getOccupationList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;

    // for industry list
    this.props.industryList
      ? this.props.industryList.length > 0
        ? this.props.industryList
        : this.props.getIndustryList({
            companyId: COMPANY_ID,
            userId: this.props.user.userId,
          })
      : null;
    // for Sub-Occupation list
    // this.props.industrySubTypeList
    //   ? this.props.industrySubTypeList.length > 0
    //     ? this.props.industrySubTypeList
    //     : this.props.getIndustrySubTypeList({
    //         companyId: COMPANY_ID,
    //         code: this.getApplicantDetails().occupation,
    //       })
    //   : null;

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

  restoreSelectedValues = () => {
    if (this.props.idCardTypes && this.props.idCardTypes.length > 0) {
      this.setState({
        idCardSelected: this.props.idCardTypes.filter(
          s => s.code === this.getApplicantDetails().idCardType,
        )[0],
      });
    }

    if (this.props.genderList && this.props.genderList.length > 0) {
      this.setState({
        genderSelected: this.props.genderList.filter(
          s => s.code === this.getApplicantDetails().gender,
        )[0],
      });
    }

    if (this.props.hokouList && this.props.hokouList.length > 0) {
      this.setState({
        hukouSelected: this.props.hokouList.filter(
          s => s.code === this.getApplicantDetails().hukou,
        )[0],
      });
    }

    if (
      this.props.martialStatusList &&
      this.props.martialStatusList.length > 0
    ) {
      this.setState({
        martialStatusSelected: this.props.martialStatusList.filter(
          s => s.code === this.getApplicantDetails().maritalStatus,
        )[0],
      });
    }

    if (this.props.educationList && this.props.educationList.length > 0) {
      this.setState({
        educationSelected: this.props.educationList.filter(
          s => s.code === this.getApplicantDetails().lastDegree,
        )[0],
      });
    }

    if (this.props.raceList && this.props.raceList.length > 0) {
      this.setState({
        citizenShipSelected: this.props.raceList.filter(
          s => s.code === this.getApplicantDetails().nationality,
        )[0],
      });
    }
    if (this.props.nationalityList && this.props.nationalityList.length > 0) {
      this.setState({
        nationalitySelected: this.props.nationalityList.filter(
          s => s.code === this.getApplicantDetails().nationalityCode,
        )[0],
      });
    }

    if (this.props.occupationList && this.props.occupationList.length > 0) {
      this.setState({
        careerTypeSelected: this.props.occupationList.filter(
          s => s.code === this.getApplicantDetails().careerType,
        )[0],
      });
    }

    if (this.props.phoneTypesList && this.props.phoneTypesList.length > 0) {
      this.setState({
        phoneTypeSelected: this.props.phoneTypesList.filter(
          s =>
            s.code ===
            this.getApplicantDetails().applicantContactDetail.addresses[0]
              .phoneNumbers[0].phoneType,
        )[0],
      });
    }

    if (this.props.industryList && this.props.industryList.length > 0) {
      this.setState({
        occupationSelected: this.props.industryList.filter(
          s => s.code === this.getApplicantDetails().occupation,
        )[0],
      });
    }

    if (
      this.props.industrySubTypeList &&
      this.props.industrySubTypeList.length > 0
    ) {
      this.setState({
        subOccupationSelected: this.props.industrySubTypeList.filter(
          s => s.code === this.getApplicantDetails().subOccupation,
        )[0],
      });
    }
  };

  componentDidMount() {
    this.restoreSelectedValues();
  }
  getApplicantDetails() {
    return this.props.applicants[this.props.tabIndex].applicantDetail;
  }
  getApplicant() {
    return this.props.applicants[this.props.tabIndex];
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Local Name</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getApplicantDetails().localizeName = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                  defaultValue={this.getApplicantDetails().localizeName}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Id Card Type</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.idCardSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  console.log('change Called');
                  this.getApplicantDetails().idCardType = obj.code;
                  this.setState({
                    idCardSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.idCardTypes)}
              </Picker>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Id Card Number</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getApplicantDetails().idCardNumber = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                  defaultValue={this.getApplicantDetails().idCardNumber}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Date of Birth</Label>
            </Left>
            <Right>
              <Text>
                {this.getApplicantDetails().dob
                  ? moment.utc(this.state.dobSelected).format('MM/DD/YYYY')
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
                    this.getApplicantDetails().dob = text.nativeEvent.timestamp;
                    this.setState({
                      showDatePicker: false,
                      dobSelected: this.getApplicantDetails().dob,
                    });
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              )}
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Gender</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                placeholder="Gender"
                selectedValue={this.state.genderSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().gender = obj.code;
                  this.setState({
                    genderSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.genderList)}
              </Picker>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Hukou</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.hukouSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().hukou = obj.code;
                  this.setState({
                    hukouSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.hokouList)}
              </Picker>
              {!this.props.hokouList.length && (
                <Label style={{fontSize: 12}}>No Hukou Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Marital Status</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.martialStatusSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().maritalStatus = obj.code;
                  this.setState({
                    martialStatusSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.martialStatusList)}
              </Picker>
              {!this.props.martialStatusList.length && (
                <Label>No Marital Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>No of Children</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getApplicantDetails().dependants = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                  defaultValue={this.getApplicantDetails().dependants}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Education</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.educationSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().lastDegree = obj.code;
                  this.setState({
                    educationSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.educationList)}
              </Picker>
              {!this.props.educationList.length && (
                <Label>No Education List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>CitizenShip</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.citizenShipSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().nationality = obj.code;
                  this.setState({
                    citizenShipSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.raceList)}
              </Picker>
              {!this.props.raceList.length && (
                <Label>No CitizenShip List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Nationality</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.nationalitySelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().nationalityCode = obj.code;
                  this.setState({
                    nationalitySelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.nationalityList)}
              </Picker>
              {!this.props.nationalityList.length && (
                <Label>No Nationality List List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Career Type</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.careerTypeSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().careerType = obj.code;
                  this.setState({
                    careerTypeSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.occupationList)}
              </Picker>
              {!this.props.occupationList.length && (
                <Label>No Career Type List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Email Id</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getApplicantDetails().applicantContactDetail.emailAddress = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                  defaultValue={
                    this.getApplicantDetails().applicantContactDetail
                      .emailAddress
                  }
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
                selectedValue={this.state.phoneTypeSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().applicantContactDetail.addresses[0].phoneNumbers[0].phoneType =
                    obj.code;
                  this.setState({
                    phoneTypeSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
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
              <Label style={commonStyles.labelStyle}>Contact Number</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getApplicantDetails().applicantContactDetail.addresses[0].phoneNumbers[0].phoneNumber = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
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
                    this.getApplicantDetails().applicantContactDetail.addresses[0].phoneNumbers[0].areaCode = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Occupation</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.occupationSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().occupation = obj.code;
                  this.setState({
                    occupationSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                  this.props.getIndustrySubTypeList({
                    companyId: COMPANY_ID,
                    code: this.getApplicantDetails().occupation,
                  });
                }}>
                {genericPickerItems(this.props.industryList)}
              </Picker>
              {!this.props.industryList.length && (
                <Label>No Occupation List Found!</Label>
              )}
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Sub Occupation</Label>
            </Left>
            <Body>
              <Picker
                mode="dialog"
                selectedValue={this.state.subOccupationSelected}
                style={{height: 50, width: 350}}
                onValueChange={obj => {
                  this.getApplicantDetails().subOccupation = obj.code;
                  this.setState({
                    subOccupationSelected: obj,
                  });
                  this.props.updateApplicant(this.getApplicant());
                }}>
                {genericPickerItems(this.props.industrySubTypeList)}
              </Picker>
              {!this.props.industrySubTypeList.length && (
                <Label>No Sub Occupation List Found!</Label>
              )}
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default Applicant_PI_Component;
