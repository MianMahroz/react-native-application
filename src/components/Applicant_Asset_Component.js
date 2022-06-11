import React, {Component} from 'react';
import {
  Item,
  Input,
  Content,
  Label,
  Body,
  Card,
  CardItem,
  Left,
} from 'native-base';
class Applicant_Asset_Component extends Component {
  constructor(props) {
    super(props);
  }

  getAssetObject() {
    return this.props.applicants[this.props.tabIndex].asset;
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
              <Label style={{fontSize: 14}}>Cash/Bank Deposit</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().cashBankDeposit = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Stock & Bond Investment</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().stockAndBankInvestments = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Amount Receivable</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().amountRecievable = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Other Liquidity Assets</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().otherLiquidityAssets = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Vehicle</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().vehicles = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>
                Private Residence Markit Value
              </Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().privateResidenceMarketValue = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Other Fixed Assets</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().otherFixedAssets = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Other Investments</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().otherInvestments = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={{fontSize: 14}}>Total</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getAssetObject().total = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default Applicant_Asset_Component;
