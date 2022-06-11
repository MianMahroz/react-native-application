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
class Applicant_Liabilities_Component extends Component {
  constructor(props) {
    super(props);
  }

  getLiabilityObj() {
    return this.props.applicants[this.props.tabIndex].liability;
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
              <Label style={commonStyles.labelStyle}>Amount Payable</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().amountPayable = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Tax Payable</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().taxPayable = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Bank Overdraft</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().bankOverdraft = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>
                Other Short-Term Facility
              </Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().otherShortTermFacility = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>
                Real Estate Mortgage Loan Payable
              </Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().realEstateMortgageLoan = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>
                Vehicle Estate Mortgage Loan
              </Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().VehicleEstateMortgageLoan = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>
                Other Long-TermLoans
              </Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().otherLongTermLoan = text;
                    this.props.updateApplicant(this.getApplicant());
                  }}
                />
              </Item>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Label style={commonStyles.labelStyle}>Other Liabilities</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getLiabilityObj().otherLiabilities = text;
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
                    this.getLiabilityObj().total = text;
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

export default Applicant_Liabilities_Component;
