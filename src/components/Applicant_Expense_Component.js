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
class Applicant_Expense_Component extends Component {
  constructor(props) {
    super(props);
  }

  getExpenseObject() {
    return this.props.applicants[this.props.tabIndex].expense;
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
              <Label style={commonStyles.labelStyle}>Expense Year</Label>
            </Left>
            <Body>
              <Item>
                <Input
                  onChangeText={text => {
                    this.getExpenseObject().expenseYear = text;
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
                    this.getExpenseObject().quartlyPayment1 = text;
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
                    this.getExpenseObject().quartlyPayment2 = text;
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
                    this.getExpenseObject().quartlyPayment3 = text;
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
                    this.getExpenseObject().quartlyPayment4 = text;
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
                    this.getExpenseObject().totalExpense = text;
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

export default Applicant_Expense_Component;
