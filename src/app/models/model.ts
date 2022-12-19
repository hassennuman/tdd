import { Action, FinalStatus, ReviewType, YesNo } from '../enums/constants';

export interface IBase {
  id?: string | Number;
  title?: string;
}

export interface ISubQuestion extends IBase {
  //question: string;
  //inputType: string;
  questions : IQuestion[];
}

export interface IQuestion extends IBase {
  question: string;
  inputType: string;
  subQuestions? : ISubQuestion[];
}

export interface ISection extends IBase {
  questions: IQuestion[];
}

export interface ITemplate extends IBase {
  sections : ISection[];
}

export interface IProduct extends IBase {
  strategyManager: string;
  strategyName: string;
  requestSendOn: Date | string;
  requestReceivedOn: Date | string;
  finalStatus: FinalStatus;
  reviewType: ReviewType;
  action: Action;
  receivedPerSLA: YesNo;
  templates : ITemplate[];
}
