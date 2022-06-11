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
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import images from './allImages';

const BorrowerTypeComponent = props => {
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
          <Title style={{fontSize: 15}}>Borrower Category</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>SELECT BORROWER TYPE</Text>
            </Body>
          </CardItem>
        </Card>

        <View style={{marginVertical: 100}}>
          <TouchableOpacity
            onPress={() => {
              props.changeBorrower('Company');
              props.navigation.navigate('ModelList');
            }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    square
                    style={{height: 100, width: 100, flex: 1}}
                    source={images['company']}
                  />
                </Left>
                <Body />
                <Right>
                  <Text>Company</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.changeBorrower('Individual');
              props.navigation.navigate('EmploymentType');
            }}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    square
                    style={{height: 100, width: 100, flex: 1}}
                    source={images['individual']}
                  />
                </Left>
                <Body />
                <Right>
                  <Text>Individual</Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

export default BorrowerTypeComponent;
