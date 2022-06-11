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
} from 'native-base';

const HomeComponent = props => {
  return (
    <Container>
      <Header style={{backgroundColor: 'rgb(91, 134, 97)'}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>HomeScreen</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>Chat App to talk some awesome people!</Text>
            </Body>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{marginTop: 10}}
          onPress={() => this.props.navigation.navigate('BorrowerType')}>
          <Text>Select Borrower Type</Text>
        </Button>
        <Button
          full
          rounded
          primary
          style={{marginTop: 10}}
          onPress={() => this.props.navigation.navigate('EmploymentType')}>
          <Text>Goto Profiles</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default HomeComponent;
