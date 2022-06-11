import React from 'react';
import {StatusBar} from 'react-native';
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
  Image,
  View,
  Thumbnail,
} from 'native-base';
import {useIsDrawerOpen} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from './allImages';
const EmploymentTypeComponent = props => {
  return (
    <Container>
      <Header style={{backgroundColor: 'rgb(91, 134, 97)'}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              props.navigation.openDrawer();
            }}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize: 15}}>EARNING SOURCE</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>SELECT Employment Category </Text>
            </Body>
          </CardItem>
        </Card>
        <View style={{marginVertical: 100}}>
          <TouchableOpacity
            onPress={() => {
              props.saveEmploymentType('OWN BUSINESS');
              props.navigation.navigate('ModelList');
            }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    square
                    style={{height: 100, width: 100, flex: 1}}
                    source={images['business']}
                  />
                </Left>
                <Body />
                <Right>
                  <Text>Own Business</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.saveEmploymentType('JOB');
              props.navigation.navigate('ModelList');
            }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    square
                    style={{height: 100, width: 100, flex: 1}}
                    source={images['job']}
                  />
                </Left>
                <Body />
                <Right>
                  <Text>Job</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default EmploymentTypeComponent;
