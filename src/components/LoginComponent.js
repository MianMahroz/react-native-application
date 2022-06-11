import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';
import {
  Container,
  Item,
  Input,
  Header,
  Body,
  Content,
  Title,
  Button,
  Text,
  Label,
  Left,
  Icon,
  Segment,
  Right,
  Toast,
} from 'native-base';
import {Field, reduxForm} from 'redux-form';
import ToastMsg from '../toast';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({input, label, type, meta: {touched, error, warning}}) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError} floatingLabel>
        <Label>{label}</Label>
        <Input
          secureTextEntry={type === 'password' ? true : false}
          {...input}
        />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    );
  }

  render() {
    const {handleSubmit, reset} = this.props;
    const submit = values => {
      this.props
        .loginSubmit({
          userId: 'D75502',
          userPassword: 'a1!',
          requestFrom: 'pos_web',
        })
        .then(response => {
          if (
            response.payload &&
            response.payload.data &&
            response.payload.data.statusCode === 200
          ) {
            ToastMsg(response.payload.data.message);
            this.props.navigation.navigate('DrawerOpen');
          } else {
            ToastMsg(response.payload.data.message);
          }
        });
    };
    return (
      <Content>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text> Login Form</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Body style={{marginTop: 20}}>
            <Body style={{marginBottom: 20}}>
              <Field
                name="userId"
                label="User Id"
                type="text"
                component={this.renderInput}
              />
            </Body>
            <Field
              style={{marginTop: 30}}
              name="userPassword"
              type="password"
              label="password"
              component={this.renderInput}
            />
          </Body>

          <Body>
            <Button
              style={{marginTop: 30}}
              rounded
              primary
              onPress={handleSubmit(submit)}>
              <Text>Submit</Text>
            </Button>
          </Body>
        </Content>
      </Content>
    );
  }
}
export default reduxForm({
  form: 'test',
})(LoginForm);

const styles = StyleSheet.create({
  buttonLabel: {},
});
