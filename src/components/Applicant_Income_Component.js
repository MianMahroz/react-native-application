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

import {commonStyles} from '../core/CommonStyles';
class Applicant_Income_Component extends Component {
  constructor(props) {
    super(props);
  }

  getIncomeObject() {
    return this.props.applicants[this.props.tabIndex].income;
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
              <Label style={commonStyles.labelStyle}>Income Year</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().incomeYear = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Quarterly Payment 1</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().quartlyPayment1 = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Quarterly Payment 2</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().quartlyPayment2 = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Quarterly Payment 3</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().quartlyPayment3 = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Quarterly Payment 4</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().quartlyPayment4 = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Total</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getIncomeObject().totalIncome = text;
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

export default Applicant_Income_Component;
