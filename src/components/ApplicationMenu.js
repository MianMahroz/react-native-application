import React, {Component} from 'react';
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
  Card,
  CardItem,
  View,
  Thumbnail,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from './allImages';
import {
  Application,
  ApplicationParentDto,
  CapElevateSaveApplicationDto,
} from '../core/applicationDto';

class ApplicationMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <Title>Application Form</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {/* <Card>
            <CardItem>
              <Body>
                <Text>SELECT Employment Category </Text>
              </Body>
            </CardItem>
          </Card> */}
          <Card>
            <CardItem>
              <Body>
                <Text>Please fill all the below forms</Text>
              </Body>
            </CardItem>
          </Card>
          <View style={{marginVertical: 120}}>
            <TouchableOpacity onPress={() => {}}>
              <Card>
                <CardItem>
                  <Left>
                    <Text>FIND RETAILER</Text>
                  </Left>
                  <Body />
                  <Right>
                    <Text style={{color: 'rgb(91, 134, 97)'}}>pending</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Applicant');
              }}>
              <Card>
                <CardItem>
                  <Left>
                    <Text>APPLICANT</Text>
                  </Left>
                  <Body />
                  <Right>
                    <Text style={{color: 'rgb(91, 134, 97)'}}>
                      {this.props.applicantStatus}
                    </Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Card>
                <CardItem>
                  <Left>
                    <Text>DOCUMENTS</Text>
                  </Left>
                  <Body />
                  <Right>
                    <Text style={{color: 'rgb(91, 134, 97)'}}>pending</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Card>
                <CardItem>
                  <Left>
                    <Text>E-SIGNATURE & SUBMIT</Text>
                  </Left>
                  <Body />
                  <Right>
                    <Text style={{color: 'rgb(91, 134, 97)'}}>pending</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </Content>
        <Card>
          <CardItem>
            <Left />
            <Body>
              <TouchableOpacity
                onPress={() => {
                  var applicationObj = new Application();
                  applicationObj.applicants = this.props.applicants;
                  applicationObj.assetModel = this.props.selectedModel;
                  applicationObj.creationDate = new Date().getTime();
                  applicationObj.creditBureauStatus = 'Pass';

                  var parentDto = new CapElevateSaveApplicationDto();
                  parentDto.userId = this.props.user.userId;
                  parentDto.applicationDetails = applicationObj;
                  parentDto.status = 14;
                  var applicationNo =
                    Math.random()
                      .toString(36)
                      .substring(3) +
                    Math.floor(Math.random() * (1000000 - 100 + 1)) +
                    100;
                  parentDto.applicationNo = applicationNo;

                  var dto = new ApplicationParentDto();
                  dto.application = parentDto;
                  console.log('final Dto', parentDto);
                  this.props.SaveApplication(dto);
                }}>
                <Button
                  style={{
                    marginLeft: 2,
                    marginTop: 22,
                    width: 100,
                    height: 50,
                    backgroundColor: 'rgb(91, 134, 97)',
                  }}>
                  <Text style={{color: '#ffffff', fontSize: 18}}>Submit</Text>
                </Button>
              </TouchableOpacity>
            </Body>
            <Right />
          </CardItem>
        </Card>
      </Container>
    );
  }
}

export default ApplicationMenu;
