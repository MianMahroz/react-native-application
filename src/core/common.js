import {Picker, Card, CardItem, Left, Label, Right, Icon} from 'native-base';
import React from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import {QueueDataDto} from './applicationDto';
export function genericPickerItems(arr) {
  var returnObj = [];
  for (var i = 0; i < arr.length; i++) {
    returnObj.push(
      <Picker.Item label={arr[i].textValue} key={i} value={arr[i]} />,
    );
  }
  return returnObj;
}
export function genericCollapse(title, comp) {
  // console.log('Generic Collapsed Called', title);
  return (
    <Collapse>
      <CollapseHeader>
        <Card transparent>
          <CardItem>
            <Left>
              <Label
                style={{
                  color: 'black',
                  fontSize: 14,
                }}>
                {title}
              </Label>
            </Left>
            <Right>
              <Icon name="ios-arrow-round-down" />
            </Right>
          </CardItem>
        </Card>
      </CollapseHeader>
      <CollapseBody>{comp}</CollapseBody>
    </Collapse>
  );
}
export function processQueue(list1) {
  var applicationQueue = [];
  var faQueueListing = [];
  console.log('list', list1.length);
  for (var i = 0; i < list1.length; i++) {
    var obj = new QueueDataDto();
    var element = list1[i];
    console.log('inside for', i);
    obj.applicationNo = element.applicationNo;

    if (
      element.applicationDetails.creationDate !== undefined ||
      element.applicationDetails.creationDate !== null
    ) {
      obj.creationDate = element.applicationDetails.creationDate;
    } else {
      obj.creationDate = new Date().getTime();
    }

    obj.statusCode = element.status;

    if (obj.statusCode === 14) {
      obj.status = 'Draft';
      obj.color = '#607d52';
    }

    if (obj.statusCode === 92) {
      obj.status = 'Submitted';
      obj.color = 'rgba(137,83,162,1)';
    }

    if (obj.statusCode === 3) {
      obj.status = 'Send Back';
      obj.color = '#615603';
    }

    if (obj.statusCode === 1) {
      obj.status = 'Approved';
      obj.color = '#ff7043';
    }

    if (obj.statusCode === 2) {
      obj.status = 'Declined';
      obj.color = '#CF8722';
    }

    if (obj.statusCode === 5) {
      obj.status = 'Field Verification';
      obj.color = '#0a504c';
    }

    if (obj.statusCode === 6) {
      obj.status = 'Phone Verification';
      obj.color = '#0a2e50';
    }

    obj.dealerName = 'John Diggle';

    for (var j = 0; j < element.applicationDetails.applicants.length; j++) {
      if (element.applicationDetails.applicants[j].typeInd === undefined) {
        element.applicationDetails.applicants[j].typeInd = 'Borrower';
      }

      if (element.applicationDetails.applicants[j].individual === undefined) {
        element.applicationDetails.applicants[j].individual = true;
      }
      if (
        element.applicationDetails.applicants[j].typeInd === 'borrower' ||
        element.applicationDetails.applicants[j].typeInd === 'Borrower'
      ) {
        if (element.applicationDetails.applicants[j].individual) {
          obj.customer =
            element.applicationDetails.applicants[
              j
            ].applicantDetail.localizeName;
          obj.cardNumber =
            element.applicationDetails.applicants[
              j
            ].applicantDetail.idCardNumber;
          obj.dob =
            element.applicationDetails.applicants[j].applicantDetail.dob;
          obj.bType = element.applicationDetails.applicants[j].individual
            ? 'Individual'
            : 'Company';

          obj.income = element.applicationDetails.applicants[j].income;
          obj.expense = element.applicationDetails.applicants[j].expense;
        } else {
          obj.customer =
            element.applicationDetails.applicants[
              j
            ].applicantDetail.companyName;
          obj.cardNumber =
            element.applicationDetails.applicants[
              j
            ].applicantDetail.registrationNumber;
        }

        if (element.applicationDetails.applicants[j].asset !== undefined) {
          obj.assetAmount =
            element.applicationDetails.applicants[j].asset.total;
        }
        if (element.applicationDetails.applicants[j].liability !== undefined) {
          obj.liabilityAmount =
            element.applicationDetails.applicants[j].liability.total;
        }
        if (element.applicationDetails.applicants[j].income !== undefined) {
          obj.totalIncome =
            element.applicationDetails.applicants[j].totalIncome;
        }

        if (element.applicationDetails.applicants[j].expense !== undefined) {
          obj.totalExpense =
            element.applicationDetails.applicants[j].totalExpense;
        }
      }
    }

    obj.score = element.applicationDetails.score;
    if (obj.score === undefined) {
      obj.score = 520;
    }

    if (element.applicationDetails.assets !== undefined) {
      obj.modelName = element.applicationDetails.assets[0].modelName;
      obj.financedAmount = element.applicationDetails.assets[0].financedAmount;
      obj.depositAmount = element.applicationDetails.assets[0].depositAmount;
      obj.rentalAmount = element.applicationDetails.assets[0].rentalAmount;

      if (obj.rentalAmount === undefined) {
        if (element.applicationDetails.assets[0].rentalDetail !== undefined) {
          obj.rentalAmount =
            element.applicationDetails.assets[0].rentalDetail.ASSETRENTAL;
        }
      }
    }

    if (element.applicationDetails.loanTaskStatus !== undefined) {
      var loanProb =
        (1 -
          element.applicationDetails.loanTaskStatus.Loan_Decline_Probability) *
        100;

      obj.loanApprovedProb = (
        (1 -
          element.applicationDetails.loanTaskStatus.Loan_Decline_Probability) *
        100
      ).toFixed(2);
      obj.loanDeclineProb = (
        (1 -
          element.applicationDetails.loanTaskStatus.Loan_Approved_Probability) *
        100
      ).toFixed(2);

      if (
        element.applicationDetails.loanTaskStatus.Loan_Decline_Probability >
        element.applicationDetails.loanTaskStatus.Loan_Approved_Probability
      ) {
        obj.faStatus = 'declined';
        var x = +element.applicationDetails.loanTaskStatus
          .Loan_Approved_Probability;
        obj.statusPct = ((1 - x) * 100).toFixed(2);
        obj.faStatusColor = '#bb2f2f';
      } else {
        obj.faStatus = 'approved';
        var x = +element.applicationDetails.loanTaskStatus
          .Loan_Decline_Probability;
        obj.statusPct = ((1 - x) * 100).toFixed(2);
        obj.faStatusColor = '#2ac293';
      }
    }
    if (element.applicationDetails.creditBureauStatus === undefined) {
      obj.creditBureauStatus = obj.faStatus;
    } else if (element.applicationDetails.creditBureauStatus === 'Fail') {
      obj.creditBureauStatus = 'Pass';
    } else {
      obj.creditBureauStatus = 'Fail';
    }

    /*  if(element.creditBureauStatus == 'sxnan3rss111605100'){
      obj.creditBureauStatus = 'Fail'
    }
   if(element.creditBureauStatus == 'yzqlgf1345308823100'){
      obj.creditBureauStatus = 'Pass'
    } */

    //   obj.creditBureauStatus = element.creditBureauStatus;
    obj.application = element.applicationDetails;

    obj.documents = element.applicationDetails.documents;

    console.log('status', obj.statusCode);
    if (obj.statusCode === '14') {
      applicationQueue.push(obj);
    } else {
      faQueueListing.push(obj);
    }

    //   console.log('applicationQueue', applicationQueue);
    //   console.log('faQueueListing', faQueueListing);
  }
  return {applicationQueue, faQueueListing};
}
