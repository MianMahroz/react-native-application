export class PhoneNumber {
  phoneId?: any;
  countryCode: string;
  areaCode: string;
  phoneNumber: string = null;
  phoneType: string = null;
  phoneTypeSelected: '';

  exchangeNumber: number;
  isPrimaryAddress?: any;
  phoneSequenceId?: any;
}

export class Address {
  tabIndex: number;
  tabName: '';
  addressId: number = null;
  addressType: string = null;
  district?: any = null;
  province: string = null;
  postalCode: string = null;
  country: string = null;
  addressLine: string = null;
  city: string = null;
  isMailingAddress: boolean = null;
  addressStatus: string = null;
  propertyType: string = null;
  establishedSince: any = new Date();
  countryCode: string = null;
  timeInMonth: string = null;
  timeInYear: string = null;
  phoneNumbers: PhoneNumber[] = null;
  emailDetails: any[] = null;
  mortgage?: any = null;

  propertyTypeSelected: '';
  addressTypeSelected: '';
  countrySelected: '';
  citySelected: '';
}

export class ApplicantContactDetail {
  emailAddress: string = null;
  addresses: Address[] = [];
}
export class QueueDataDto {
  applicationNo: any;
  creationDate: any;
  dealer: any;
  dealerName: any;
  customer: any;
  statusCode: any;
  status: any;
  scoreStatus: any;
  score:any;
  modelName: any;
  faStatus: any;
  statusPct: any;
  loanApprovedProb: any;
  loanDeclineProb: any;
  assetAmount: any;
  liabilityAmount: any;
  totalIncome: any;
  totalExpense: any;
  application: object; 
  color: any;
  faStatusColor: any;
  financedAmount: any;
  depositAmount: any;
  rentalAmount: any;
  cardNumber: any;
  dob: any;
  bType: any;
  income: any;
  expense: any;
  documents: any;
  creditBureauStatus: any;
}
export class ApplicantDetail {
  tabName: '';
  tabIndex: '';
  emailAddressCompany?: number = null;
  representativeEmail?: any = null;
  industrySubType: string = null;
  loanCard?: any = null;
  netWorthAmt?: any = null;
  annualRevenue?: any = null;
  organizationCode?: any = null;
  representativeContactNumber?: number = null;
  taxIDNo?: any = null;
  loanCardPassword?: any = null;
  representativeIDCard?: any = null;
  representativeName?: any = null;
  bussinessType: string = null;
  bussinessTypeSelected: string = null;
  
  capitalRegistrationAmount?: any = null;
  establishedSince?: any = null;
  industry: string = null;
  lastYearNetProfit?: any = null;
  lastYearRevenue?: number = null;
  companyName: string = null;
  registrationNumber: string = null;
  registrationType?: any = null;
  title: string = null;
  firstName: string = null;
  middleName?: any = null;
  lastName?: any = null;
  localizeName: string = null;
  dob: number = null;
  age?: any = null;
  gender: string = null;
  genderText?: any = null;
  idCardType: string = null;
  idCardNumber: string = null;
  idCardExpiry: number = null;
  maritalStatus: string = null;
  dependants: number = null;
  nationality: string = null;
  nationalityText?: any = null;
  licenseNumber: number = null;
  licenseExpiry: number = null;
  degreeCompletionDate: number = null;
  lastDegree: string = null;
  hukou: string = null;
  occupation: string = null;
  occupationSelected: string = '';

  subOccupation: string = null;
  subOccupationSelected: string = '';
  
  isPartnerGuarantor?: any = null;
  partnerContactNumber?: any = null;
  partnerIDCardType?: any = null;
  partnerIDNumber?: any = null;
  partnerName?: any = null;
  emailId?: any = null;
  contactNumber?: any = null;
  relationShip: string = null;
  nationalityCode: string = null;
  companyNameThai: string = null;
  careerType: string = null;
  docTypeCode: string = null;
  applicantContactDetail: ApplicantContactDetail = new ApplicantContactDetail();
  registrationDate?: number = null;
}

export class Income {
  incomeYear: any = null;
  quartlyPayment1: any = 0;
  quartlyPayment2: any = 0;
  quartlyPayment3: any = 0;
  quartlyPayment4: any = 0;
}

export class Expense {
  expenseYear: any = null;
  quartlyPayment1: any = 0;
  quartlyPayment2: any = 0;
  quartlyPayment3: any = 0;
  quartlyPayment4: any = 0;
}

export class ApplicantAsset {
  cashBankDeposit: any = 0;
  stockAndBankInvestments: any = 0;
  amountRecievable: any = 0;
  otherLiquidityAssets: any = 0;
  vehicles: any = 0;
  privateResidenceMarketValue: any = 0;
  otherFixedAssets: any = 0;
  otherInvestments: any = 0;
  total: any = 0;
}

export class Liability {
  amountPayable: any = 0;
  taxPayable: any = 0;
  bankOverdraft: any = 0;
  otherShortTermFacility: any = 0;
  realEstateMortgageLoan: any = 0;
  VehicleEstateMortgageLoan: any = 0;
  otherLongTermLoan: any = 0;
  otherLiabilities: any = 0;
  total: any = 0;
}

export class Employment {
  employeeId?: any = null;
  employeeType: string = null;
  employeeName: string = null;
  time: string = null;
  position: string = null;
  phoneNumber: string = null;
  district?: any = null;
  province: string = null;
  postalCode: string = null;
  country: string = null;
  addressLine: string = null;
  city: string = null;
  addressType?: any = null;
  postCode: string = null;
  phone: string = null;
  phoneTypeCode: string = null;
  areaCode: string = null;
  occupation: string = null;
  subOccupation?: any = null;
  actualSalary: string = null;
  departmentJob: string = null;
  netmonthlyIncome: number = null;
  businessNature: string = null;
  noofCompanyEmployee: number = null;
  yearsJoinedInCompany: number = null;
  jobDescription?: any = null;
  timeInMonth: string = null;
  employeeTypeSelected: '';
  positionSelected: '';
  businessNatureSelected: '';
  provinceSelected: '';
  citySelected: '';
}

export class EmergencyContactDetail {
  name: string = null;
  relationship: string = null;
  contactNumber: string = null;
  stateCode: string = null;
  cityCode: string = null;
  postCode: string = null;
  addressOne: string = null;
  tabIndex: number;
  tabName: '';

  relationshipSelected: '';
  stateCodeSelected: '';
}

export class Applicant {
  tabName: '';
  tabIndex: '';
  assetLiability?: any;
  applicantId: number;
  roleInd?: any;
  typeInd: string;
  individual: boolean;
  imageString: string;
  financialConditions?: any;
  applicantDetail: ApplicantDetail = new ApplicantDetail();
  financeDetail?: any;
  employments: Employment[] = [];
  emergencyContactDetails: EmergencyContactDetail[] = [];
  banks: any[];
  personalReferenceDetail: any[];
  income: Income[] = [new Income()];
  expense: Expense[] = [new Expense()];
  asset: ApplicantAsset = new ApplicantAsset();
  liability: Liability = new Liability();
  totalIncome: any = 0;
  totalExpense: any = 0;
}

export class Accessory {
  accessoryId: string;
  price: number;
  creationDate?: any;
  updationDate?: any;
  createdBy?: any;
  updatedBy?: any;
  companyId?: any;
  itemId?: any;
  parentId?: any;
  userId?: any;
  assetId?: any;
  accessoryType: string;
  companyAccessoryId?: any;
  accessoryFinancedAmount: number;
  accessoryPricePct: number;
  accessoryFinancedAmountPct: number;
  maxAccessoryPerIndividual: number;
}

export class RentalDetail {
  ASSETRENTAL: number;
  COMMERCIALINS: number;
  COMPULSORYINS: number;
  ENDTRM: number;
  INSURANCEAMT: number;
  INTERESTRTE: number;
  MAINTENANCEAMT: number;
  NFAPCT: number;
  PURCHASETAX: number;
  REGISTRATIONAMT: number;
  REGISTRATIONFEE: number;
  RENTALAMT: number;
  RENTALSEQUENCE: number;
  SERVICECONTRACTFEE: number;
  STARTTRM: number;
  SUNDRYFEE: number;
  VATAMT: number;
  VESSELTAX: number;
  AUTOFLAG: string;
}

export class Asset {
  serviceContractFee: string = null;
  mileAgePerYear: string = null;
  actualRate: string = null;
  vehicleSubType: string = null;
  productionYear: string = null;
  firstYearCommercialInc: number = null;
  otherFees?: any = null;
  odometer: string = null;
  defferedTerm?: any = null;
  firstYearCompulsoryInc: number = null;
  totalContractAmount: number = null;
  totalIntcharges: string = null;
  totalVesselYearTax: number = null;
  financedAmountPerct: string = null;
  totalCommercialInc?: any = null;
  securityDeposit: number = null;
  buyBack: number = null;
  firstYearVesselUsageTax: number = null;
  purpose: string = null;
  leaseServiceFee: number = null;
  ageInMonth: string = null;
  totalCompulsoryInc: number = null;
  subsidyAmount: number = null;
  comments: string = null;
  assetId: number = null;
  makeId: string = null;
  modelId: string = null;
  assetType: string = null;
  assetSubType: string = null;
  makeModelId?: any = null;
  terms: number = null;
  financialProductId: number = null;
  financialCampaignId: number = null;
  creationDate?: any = null;
  updationDate?: any = null;
  companyId?: any = null;
  releaseYear: number = null;
  itemId?: any = null;
  passangerCapacity: string = null;
  parentId?: any = null;
  userId?: any = null;
  price: number = null;
  interestRate: number = null;
  depositAmount: number = null;
  depositPercentage: number = null;
  residualAmount: number = null;
  assetCondition: string = null;
  assetConditionName?: any = null;
  assetName?: any = null;
  paymentMode: string = null;
  interestRateType: string = null;
  paymentFrequency: string = null;
  createdBy?: any = null;
  updatedBy?: any = null;
  style: number = null;
  tyres: number = null;
  cylinder: number = null;
  body: string = null;
  bodyName: string = null;
  vinNumber: string = null;
  engineCc: string = null;
  engineNo: string = null;
  assetTransmission: string = null;
  assetTransmissionName?: any = null;
  assetUsage: string = null;
  assetUsageName?: any = null;
  rentalMode: string = null;
  makeName: string = null;
  modelName: string = null;
  financialProductName: string = null;
  financialGroupName?: any = null;
  color: string = null;
  releaseNumber?: any = null;
  tradeInAmount: number = null;
  Ranges?: any = null;
  Amounts?: any = null;
  vtQuotationDate?: any = null;
  sundryFee: number = null;
  totalCompulsoryInsurance?: any = null;
  regFee: number = null;
  firstYearCompulsoryInsurance?: any = null;
  purchaseTax?: any = null;
  firstYearCommericalInsurance?: any = null;
  totalVesselUsageTax?: any = null;
  totalCommericalInsurance: number = null;
  estimatedPurchaseTax?: any = null;
  mileagePerYear?: any = null;
  contractStartDate?: any = null;
  modelYear: string = null;
  subsidyRatePercent: number = null;
  balancePayable: number = null;
  totalAmtPayable: number = null;
  brand: string = null;
  salesPrice: number = null;
  miocnId: number = null;
  financedAmount: number = null;
  totalAmountPayable: number = null;
  rentalAmount12?: any = null;
  rentalAmount24?: any = null;
  rentalAmount36?: any = null;
  rvPct: number = null;
  rv: number = null;
  productRateType: string = null;
  amortizationMethod: string = null;
  productType: string = null;
  fixVariableType: string = null;
  futureValueType: string = null;
  structuredType: string = null;
  marginRateInd: string = null;
  marginValue: number = null;
  futureValuePct: number = null;
  futureValueAmount?: any = null;
  revisionFrq: string = null;
  customerRate: number = null;
  baseRate: number = null;
  maxInterestRate: number = null;
  structuredRentalInd?: any = null;
  sundryFeeInd?: any = null;
  registerationFeeInd?: any = null;
  serviceContractFeeInd?: any = null;
  compInsInd?: any = null;
  leaseType: string = null;
  insuranceVatApply: boolean = null;
  registrationVatApply: boolean = null;
  roundingInd: string = null;
  additionalParams?: any = null;
  subsidyAmtCal: string = null;
  irr: number = null;
  irrRate: number = null;
  maximumAccessoryPer: number = null;
  dealerSubsidiaryPct: number = null;
  dealerSubsidiaryAmt: number = null;
  manufacturerSubsidiaryPct: number = null;
  manufacturerSubsidiaryAmt: number = null;
  totalSubsidyAmt: number = null;
  contractPrice: number = null;
  totalAccessoryPrice: number = null;
  totalAccessoryPricePct: number = null;
  totalAccessoryFinancedAmount: number = null;
  carManufacturerSubsidy: number = null;
  accessoryManufacturerSubsidy: number = null;
  accessoryManufactSubsidyPct: number = null;
  accessoryAllowedInd: string = null;
  carFinancedAmount: number = null;
  carFinancedPct: number = null;
  services: any[] = null;
  insurance: any[] = null;
  accessories: Accessory[] = null;
  rentalDetail: RentalDetail[] = null;
  multiInterestRanges: any[] = null;
  vehicleDD?: any = null;
  rentalAmount: any;
}
export class FinancialChatDto {
  terms: any;
  downPayment: any;

  financeAmount: any;
  monthlyAmount: any;

  constructor(terms: any, downPayment: any, financeAmount, monthlyAmount) {
    this.terms = terms;
    this.downPayment = downPayment;
    this.financeAmount = financeAmount;
    // this.financePct = financePct;
    this.monthlyAmount = monthlyAmount;
    console.log('1st cycle');
    console.log('terms', terms);
  }
}
export class AssetModel {
  assetTypeDescription: string;
  modelIdPk: string;
  makeIdFk: string;
  companyId: number;
  miocnId: number;
  assetTypeId: string;
  assetSubTypeId: string;
  financialGroupId?: any;
  activeInd: boolean;
  creationDate: number;
  listPrice: number;
  imagePath: string;
  lastUpdated?: any;
  transmissionTypeCode: string;
  updationDate: number;
  createdBy: string;
  updatedBy: string;
  modelName: string;
  fieldsJson?: any;
  passangerCapacity: string;
  subsidy?: any;
  assetCondition?: any;
  engineNo?: any;
  engineCc: string;
  cylinder?: any;
  tyres?: any;
  color?: any;
  body: string;
  style?: any;
  odometer?: any;
  rentalAmount: any;
  financialAmount: number;
  depositAmount: number;
  makeName: string;
  makeImageUrl: string;
  selected: boolean = false;
  transmissionType: string;
  terms: any;
  annualMilage: any;
  downPayment: any;
  financeAmountUI: any;
  termsUI: any;
  downPaymentUI: any;
  isLeased: boolean = true;
  makeIdPk: any;
  isSelected: any;
  financialChartList: FinancialChatDto[];
  downPayment1: any;
  financeAmount1: any;
  monthlyAmount1: any;
  terms1: any;
  downPayment2: any;
  financeAmount2: any;
  monthlyAmount2: any;
  terms2: any;
  downPayment3: any;
  financeAmount3: any;
  monthlyAmount3: any;
  terms3: any;
  // financialChartList: any [];
}

export class AssetType {
  assetTypeId: string;
  assetTypeParentId: string;
  companyId: number;
  assetTypeDescription: string;
  creationDate: number;
  activeInd: boolean;
  updationDate: number;
  createdBy: string;
  imageUrl: string;
  updatedBy: string;
  fieldsJson: string;
  assetModelList: AssetModel[];
  isSelected: boolean;
  selected: boolean = false;
}
export class Application {
  assetModel: AssetModel;
  isExist: boolean;
  refCA: string;
  province: string;
  category: string;
  contact: string;
  financialAdvisor: string;
  applicantType: string;
  distributor: number;
  name?: any;
  applicationNumber: string;
  company: string;
  branch: number;
  dealerId: number;
  dealerName?: any;
  showroomId: number;
  showroom?: any;
  salesPersonId: number;
  salesPerson?: any;
  applicationStatus: number;
  companyId: number;
  userId: string;
  manufacturer: number;
  applicationParentId: string;
  creationDate: number;
  updationDate: number;
  activeInd: boolean;
  applicationType: string;
  totalCost?: any;
  totalTaxAmount?: any;
  totalFinanceAmount?: any;
  totalDepositValue?: any;
  totalResidualValue?: any;
  totalInterestRate?: any;
  totalPayable?: any;
  totalRentalAmount?: any;
  totalInterestCharges?: any;
  totalTerms: number;
  qsToken?: any;
  qsUrl?: any;
  isApplicationRevised: boolean;
  saleType: number;
  city: string;
  financialConsultant: string;
  isExported: string;
  vehicleTypeCode: string;
  branchId: string;
  contactPersonName: string;
  applicationInterface: string;
  isOldApp: string;
  employementType: any;
  applicants: Applicant[];
  assets: Asset[];
  applicationRevised: boolean;
  // applicationDocuments: FileUploadDto[] = [];
  loanTaskStatus: Autos = new Autos();
  score: any = 600;
  grade: any;
  faStatus: any;
  statusPct: any;
  creditBureauStatus: any;
}

export class ApplicationParentDto {
  application: CapElevateSaveApplicationDto;
  path: string;
}

export class CapElevateSaveApplicationDto {
  applicationDetails: Application;
  applicationNo: string;
  status: any;
  userId: string;
}

export class Autos {
  Loan_Decline_Probability: any = 0.2233;
  Loan_Approved_Probability: any = 0.7767;
  Loan_Risk_Probability_Default_Collection_Officer: any = 0.044285714285714;
  Loan_Risk_Probability_Early_Payout: any = 0.24285714285714;
  Loan_Risk_Probability_Overdue: any = 0.087142857142857;
  Loan_Risk_Probability_Payout: any = 0.31071428571429;
  Loan_Risk_Probability_Remarketing: any = 0.071428571428571;
  Loan_Risk_Probability_Withdrawn: any = 0.24357142857143;
  Shap_value_approve: any;
  Shap_value_decline: any;
}
