import React, {Component} from 'react';
import {
  View,
  Text,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Title,
  Tabs,
  ScrollableTab,
  Tab,
  TabHeading,
  Label,
} from 'native-base';

// import { Container } from './styles';
import {DataTable} from 'react-native-paper';
import {QueueDataDto} from '../core/applicationDto';
export default class Application_Queue_Component extends Component {
  workQueue = [];
  constructor(props) {
    super(props);
    this.props.getApplicationByUserId({userId: this.props.user.userId});
  }

  applicationTabContent = obj => {
    var tabs = [];
    if (obj && obj.applicationQueue) {
      for (var i = 0; i < obj.applicationQueue.length; i++) {
        tabs.push(this.customContent(obj.applicationQueue[i]));
      }
    }
    return tabs;
  };
  faTabContent = obj => {
    var tabs = [];
    if (obj && obj.faQueueListing) {
      for (var i = 0; i < obj.faQueueListing.length; i++) {
        tabs.push(this.customContent(obj.faQueueListing[i]));
      }
    }
    return tabs;
  };
  customContent = obj => {
    return (
      <DataTable.Row>
        <DataTable.Cell>{obj.applicationNo}</DataTable.Cell>
        <DataTable.Cell>{obj.creationDate}</DataTable.Cell>
        <DataTable.Cell>{obj.customer}</DataTable.Cell>
        <DataTable.Cell>{obj.dealerName}</DataTable.Cell>
        <DataTable.Cell>{obj.status}</DataTable.Cell>
      </DataTable.Row>
    );
  };

  render() {
    return (
      <Content padder>
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
            <Title style={{fontSize: 14}}>Work Queue</Title>
          </Body>
          <Right />
        </Header>

        <Tabs
          tabBarUnderlineStyle={{backgroundColor: '#5b8661'}}
          tabBarBackgroundColor="#ffffff"
          page={this.props.eaPage - 1}
          initialPage={this.props.eaPage}
          renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#ffffff', height: 60}}>
                <Label style={{color: '#5b8661', fontSize: 13}}>
                  Application
                </Label>
              </TabHeading>
            }>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Application No</DataTable.Title>
                <DataTable.Title>Data/Time</DataTable.Title>
                <DataTable.Title>Customer Name</DataTable.Title>
                <DataTable.Title>Dealer</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>

              {this.applicationTabContent(this.props.workQueue)}

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#ffffff', height: 60}}>
                <Label style={{color: '#5b8661', fontSize: 13}}>
                  Financial Analysis
                </Label>
              </TabHeading>
            }>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Application No</DataTable.Title>
                <DataTable.Title>Data/Time</DataTable.Title>
                <DataTable.Title>Customer Name</DataTable.Title>
                <DataTable.Title>Dealer</DataTable.Title>
                <DataTable.Title>Status</DataTable.Title>
              </DataTable.Header>

              {this.faTabContent(this.props.workQueue)}

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </Tab>
        </Tabs>
      </Content>
    );
  }
}
