import React, {useState} from 'react';
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
  Card,
  CardItem,
  ListItem,
  Thumbnail,
  Badge,
  View,
  TabHeading,
  Picker,
} from 'native-base';
import Modal from 'react-native-modal';
import {Component} from 'react';
import images from './allImages';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tab, Tabs, ScrollableTab} from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default class CompareModelListingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compareModelList: [],
      isModalVisible: false,
      selectedChartIndex: 0,
      terms: 0,
      downPayment: 0,
      financialAmount: 0,
      chartObj: {},
    };
    var updatedCompareModelList = this.props.compareModelList.map(model => ({
      title: model.modelName,
      data: [model],
    }));
    this.props.convertCompareModelList_ToSectionList(updatedCompareModelList);
  }

  componentDidMount() {}

  render() {
    function CustomTabs(list) {
      var tabs = [];
      for (var i = 0; i < list.length; i++) {
        tabs.push(CustomTabContent(list[i]));
      }
      return tabs;
    }
    function toggleModal(chartObj) {
      console.log('toggle called', chartObj);
      updateChartObj(chartObj);
    }

    const updateChartObj = chartObj => {
      this.props.displayChart(chartObj);
      this.props.toggleFinancialChartModel(!this.props.isModalVisible);
    };

    const orderModel = model => {
      this.props.saveSelectedModel(model);
      this.props.navigation.navigate('ApplicationMenu');
    };

    function CustomTabContent(modelObj) {
      modelObj.financialChartList.map(function(p) {
        p.downPaymentPct = Math.round(
          (p.downPayment / modelObj.listPrice) * 100,
        );
        p.financeAmountPct = Math.round(
          (p.financeAmount / modelObj.listPrice) * 100,
        );
        p.listPrice = modelObj.listPrice;
        p.modelName = modelObj.modelName;
        p.makeName = modelObj.makeName;
      });
      return (
        <Tab
          heading={
            <TabHeading
              style={{backgroundColor: 'rgb(91, 134, 97)', height: 60}}>
              <Text style={{color: '#ffffff'}}>{modelObj.modelName}</Text>
            </TabHeading>
          }>
          <TouchableOpacity
            onPress={() => {
              orderModel(modelObj);
            }}>
            <Card style={modelObj.selected ? styles.selected : null}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{modelObj.makeName}</Text>
                    <Text note>{modelObj.modelName}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Thumbnail
                  small
                  source={images[modelObj.imagePath]}
                  style={{height: 160, width: 250}}
                />
                <Right>{ModelFeatures(modelObj)}</Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text style={{fontSize: 13}}>Months: {modelObj.terms} </Text>
                </Left>
                <Body />
                <Right
                  style={{borderWidth: 1, backgroundColor: 'rgb(91, 134, 97)'}}>
                  <Text style={{fontSize: 15, paddingRight: 3, color: '#fff'}}>
                    £{modelObj.listPrice}
                  </Text>
                  <Text style={{fontSize: 14, paddingRight: 3, color: '#fff'}}>
                    £{modelObj.rentalAmount}/M
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </TouchableOpacity>
          <Card>
            <CardItem>
              <Body>
                <Text
                  style={{
                    fontSize: 15,
                    paddingLeft: 90,
                  }}>
                  Select Financial Charts
                </Text>
              </Body>
            </CardItem>
          </Card>
          <FinancialChartModel modelObj={modelObj} />
          {FinancialCharts(modelObj)}
        </Tab>
      );
    }

    function FinancialCalculations(modelObj) {
      var returnObj = [];
      for (var i = 0; i < modelObj.financialChartList.length; i++) {
        returnObj.push(
          CalculationContent(modelObj, modelObj.financialChartList[i]),
        );
      }
      return returnObj;
    }

    function CalculationContent(modelObj, chartObj) {
      return (
        <Content>
          <TouchableOpacity
            onPress={() => {
              toggleModal(chartObj);
            }}>
            <Card>
              <CardItem style={{backgroundColor: 'rgb(91, 134, 97)'}}>
                <Text style={{color: '#fff'}}>£{chartObj.rentalAmount}/M</Text>

                {/* <Right></Right> */}
              </CardItem>
              <CardItem style={{backgroundColor: 'rgb(91, 134, 97)'}}>
                <Text style={{color: '#fff', fontSize: 12}}>
                  £{chartObj.financeAmount}/D.P
                </Text>
                {/* <Right></Right> */}
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Content>
      );
    }

    function FinancialCharts(modelObj) {
      return (
        <View style={{flexDirection: 'row'}}>
          {FinancialCalculations(modelObj)}
        </View>
      );
    }

    const changeFinancialChart = updatedChartObj => {
      console.log('Updated Chart Object', updatedChartObj);

      var interestRate = 5.7;

      var requestObj = {
        companyId: 1,
        assetMakeId: updatedChartObj.makeId,
        assetModelId: updatedChartObj.modelId,
        assetTypeId: updatedChartObj.assetTypeId,
        contractAmount: updatedChartObj.listPrice,
        terms: updatedChartObj.terms,
        depositAmount: updatedChartObj.downPayment,
        financialAmount: updatedChartObj.financeAmount,
        interestRate: interestRate,
      };

      this.props.getFinancialDetails(requestObj);
    };
    const FinancialChartModel = modelObj => {
      return (
        <Modal
          isVisible={this.props.isModalVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          onBackdropPress={() => {
            this.props.toggleFinancialChartModel(!this.props.isModalVisible);
          }}
          onSwipeComplete={() => {
            this.props.toggleFinancialChartModel(!this.props.isModalVisible);
          }}
          swipeDirection="right">
          <Content>
            <Header style={{backgroundColor: 'rgb(91, 134, 97)'}}>
              <Left />
              <Body>
                <Title>Financial Chart</Title>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => {
                    this.props.toggleFinancialChartModel(
                      !this.props.isModalVisible,
                    );
                  }}>
                  <Icon name="close" />
                </Button>
              </Right>
            </Header>
            <Card style={modelObj.selected ? styles.selected : null}>
              <CardItem>
                <Left>
                  <Body>
                    <Text>{this.props.chartObj.makeName}</Text>
                    <Text note>{this.props.chartObj.modelName}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Months</Text>
                </Left>
                <Body>
                  <ListItem>
                    <Picker
                      mode="dropdown"
                      selectedValue={'' + this.props.chartObj.terms}
                      style={{height: 50, width: 200}}
                      onValueChange={(itemValue, itemIndex) => {
                        this.props.chartObj.terms = itemValue;
                        changeFinancialChart(this.props.chartObj);
                      }}>
                      <Picker.Item label="6 Months" value="6" />
                      <Picker.Item label="12 Months" value="12" />
                      <Picker.Item label="24 Months" value="24" />
                      <Picker.Item label="36 Months" value="36" />
                    </Picker>
                  </ListItem>
                </Body>
                <Right />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Down Payment</Text>
                </Left>
                <Body>
                  <ListItem>
                    <Picker
                      mode="dropdown"
                      selectedValue={'' + this.props.chartObj.downPaymentPct}
                      style={{height: 50, width: 200}}
                      onValueChange={(itemValue, itemIndex) => {
                        this.props.chartObj.downPaymentPct = itemValue;
                        this.props.chartObj.downPayment =
                          (this.props.chartObj.downPaymentPct / 100) *
                          this.props.chartObj.listPrice;
                        this.props.chartObj.financeAmountPct =
                          100 - this.props.chartObj.downPaymentPct;
                        changeFinancialChart(this.props.chartObj);
                      }}>
                      <Picker.Item label="20 %" value="20" />
                      <Picker.Item label="40 %" value="40" />
                      <Picker.Item label="50 %" value="50" />
                      <Picker.Item label="60 %" value="60" />
                      <Picker.Item label="80 %" value="80" />
                    </Picker>
                  </ListItem>
                </Body>
                <Right />
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Finance Amount</Text>
                </Left>
                <Body>
                  <ListItem>
                    <Picker
                      mode="dropdown"
                      selectedValue={'' + this.props.chartObj.financeAmountPct}
                      style={{height: 50, width: 200}}
                      onValueChange={(itemValue, itemIndex) => {
                        this.props.chartObj.financeAmountPct = itemValue;
                        this.props.chartObj.financeAmount =
                          (this.props.chartObj.financeAmountPct / 100) *
                          this.props.chartObj.listPrice;
                        this.props.chartObj.downPaymentPct =
                          100 - this.props.chartObj.financeAmountPct;
                        this.props.chartObj.downPayment =
                          (this.props.chartObj.downPaymentPct / 100) *
                          this.props.chartObj.listPrice;
                        changeFinancialChart(this.props.chartObj);
                      }}>
                      <Picker.Item label="20 %" value="20" />
                      <Picker.Item label="40 %" value="40" />
                      <Picker.Item label="50 %" value="50" />
                      <Picker.Item label="60 %" value="60" />
                      <Picker.Item label="80 %" value="80" />
                    </Picker>
                  </ListItem>
                </Body>
                <Right />
              </CardItem>

              <CardItem>
                <Left />
                <Body />
                <Right
                  style={{borderWidth: 1, backgroundColor: 'rgb(91, 134, 97)'}}>
                  <Text style={{fontSize: 16, paddingRight: 3, color: '#fff'}}>
                    £{this.props.chartObj.rentalAmount}/M
                  </Text>
                  <Text style={{fontSize: 15, paddingRight: 3, color: '#fff'}}>
                    £{this.props.chartObj.financeAmount}
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Modal>
      );
    };
    function ModelFeatures(modelObj) {
      return (
        <Content>
          <ListItem key="">
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['transmissionType']}
            />
            <Text style={{fontSize: 14}}>{modelObj.transmissionType}</Text>
          </ListItem>
          <ListItem>
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['color']}
            />
            <Text style={{fontSize: 14}}>{modelObj.color}</Text>
          </ListItem>
          <ListItem>
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['wheel']}
            />
            <Text style={{fontSize: 14}}>{modelObj.tyres}</Text>
          </ListItem>
          <ListItem>
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['cabOver']}
            />
            <Text style={{fontSize: 14}}>{modelObj.body}</Text>
          </ListItem>
          <ListItem>
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['seats']}
            />
            <Text style={{fontSize: 14}}>{modelObj.passangerCapacity}</Text>
          </ListItem>
          <ListItem>
            <Thumbnail
              style={{height: 20, width: 20}}
              square
              small
              source={images['meter']}
            />
            <Text style={{fontSize: 14}}>{modelObj.engineCc}</Text>
          </ListItem>
        </Content>
      );
    }
    return (
      <Container>
        <Header style={{backgroundColor: 'rgb(91, 134, 97)'}} hasTabs>
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
            <Title style={{fontSize: 15}}>Compare Models</Title>
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
              <Badge style={{backgroundColor: 'rgb(91, 134, 97)'}}>
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
          <Tabs
            tabBarBackgroundColor="#5B8661"
            renderTabBar={() => <ScrollableTab />}>
            {this.props.compareModelList.length > 0
              ? CustomTabs(this.props.compareModelList)
              : 'No Model Selected'}
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: '#090909',
  },
  tabText: {
    padding: 15,
    color: '#9e9e9e',
    fontSize: 18,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea',
  },
  sectionHeaderContainer: {
    height: 10,
    backgroundColor: '#f6f6f6',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    color: '#010101',
    backgroundColor: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#131313',
  },
  itemPrice: {
    fontSize: 18,
    color: '#131313',
  },
  itemDescription: {
    marginTop: 10,
    color: '#b6b6b6',
    fontSize: 16,
  },
  itemRow: {
    flexDirection: 'row',
  },
  selected: {
    overflow: 'visible',
    overlayColor: 'red',
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
