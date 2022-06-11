import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
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
  Fab,
  List,
  ListItem,
  Thumbnail,
  Badge,
} from 'native-base';

import {useIsDrawerOpen} from '@react-navigation/drawer';
import {Component} from 'react';
import images from './allImages';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
// import { Container } from './styles';

export default class ModelListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compareModelList: [],
    };
  }

  componentDidMount() {
    var requestObj = {
      companyId: 1,
      oto: false,
    };
    this.props.filterModel(requestObj).then(response => {
      // console.log('response', response.payload.data);
    });
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
            <Title style={{fontSize: 15}}>Model Listing</Title>
          </Body>
          <Right />
        </Header>
        <Card style={{width: 420, height: 40}}>
          <CardItem>
            <Left>
              <Button
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={{
                  width: 70,
                  height: 30,
                  backgroundColor: 'rgb(91, 134, 97)',
                }}>
                <Text>Back</Text>
              </Button>
              <Button
                onPress={() => {
                  this.props.navigation.navigate('CompareModelList');
                }}
                style={{
                  marginLeft: 20,
                  width: 70,
                  height: 30,
                  backgroundColor: 'rgb(91, 134, 97)',
                }}>
                <Text>Next</Text>
              </Button>
            </Left>
            <Body />
            <Right>
              <Badge>
                <Text>
                  {this.props.compareModelList
                    ? this.props.compareModelList.length
                    : 0}
                </Text>
              </Badge>
              <Icon name="cart" />
            </Right>
          </CardItem>
        </Card>
        <Content padder>
          <List
            dataArray={this.props.modelList}
            renderRow={item => (
              <ListItem thumbnail>
                <TouchableOpacity
                  onPress={() => {
                    this.props.addToCompareList(item);
                    item.selected = item.selected ? '' + false : '' + true;
                  }}
                  style={{width: 330, height: 360, flex: 1}}>
                  <Card style={item.selected ? styles.selected : null}>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text>{item.modelName}</Text>
                          <Text note>{item.assetTypeDescription}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Thumbnail
                        source={images[item.imagePath]}
                        style={{height: 160, width: 130, flex: 1}}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text style={{fontSize: 13}}>Months: {item.terms}</Text>
                      </Left>
                      <Body />
                      <Right
                        style={{
                          borderWidth: 1,
                          backgroundColor: 'rgb(91, 134, 97)',
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            paddingRight: 3,
                            color: '#ffffff',
                          }}>
                          £{item.listPrice}
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            paddingRight: 3,
                            color: '#ffffff',
                          }}>
                          £{item.rentalAmount}/M
                        </Text>
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    overflow: 'visible',
    overlayColor: 'red',
  },
});
