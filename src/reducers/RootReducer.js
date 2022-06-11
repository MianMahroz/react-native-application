import {combineReducers} from 'redux';
import React from 'react';
import {reducer as formReducer} from 'redux-form';
import {LoginReducer} from './LoginReducer';
import BorrowerTypeReducer from './BorrowerTypeReducer';
import EmploymentTypeReducer from './EmploymentTypeReducer';
import {FilterModelReducer} from './FIlterModelReducer';
import CompareModelListReducer from './CompareModelListReducer';
import ApplicantReducer from './ApplicantReducer';
import {SetupsReducer} from './SetupsReducer';
import ApplicationReducer from './ApplicationReducer';

const RootReducer = combineReducers({
  form: formReducer,
  LoginReducer: LoginReducer,
  BorrowerTypeReducer: BorrowerTypeReducer,
  EmploymentTypeReducer: EmploymentTypeReducer,
  FilterModelReducer: FilterModelReducer,
  CompareModelListReducer: CompareModelListReducer,
  ApplicantReducer: ApplicantReducer,
  SetupsReducer: SetupsReducer,
  ApplicationReducer: ApplicationReducer,
});

export default RootReducer;
