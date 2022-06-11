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
import {useIsDrawerOpen} from '@react-navigation/drawer';

const StartScreen = props => {
  return (
    <Container>
      <Header>
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
          <Title>Start Screen</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>LETS QUICKLY SET YOU UP</Text>
            </Body>
          </CardItem>
        </Card>
        <Body style={{marginVertical:200}}>
          <Button
            full
            rounded
            danger
            onPress={() => props.navigation.navigate('BorrowerType')}>
            <Text>LETS CONFIGURE</Text>
          </Button>
        </Body>
      </Content>
    </Container>
  );
};

export default StartScreen;
