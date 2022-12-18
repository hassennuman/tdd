import { IProduct } from '../models/model';
import { template1, template2, } from '../mockData/template';
import { Action, FinalStatus, ReviewType, YesNo } from '../enums/constants';

export const products: IProduct[] = [
  {
    id: '1',
    strategyManager: 'Manager 1',
    strategyName: 'Demo Product 1',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.Review,
    receivedPerSLA: YesNo.Yes,
    templates : template1
  },
  {
    id: '2',
    strategyManager: 'Manager 2',
    strategyName: 'Demo Product 2',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Completed,
    action: Action.Review,
    receivedPerSLA: YesNo.Yes,
    templates :template2
  },
  {
    id: '3',
    strategyManager: 'Manager 3',
    strategyName: 'Demo Strategy 3',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.SendFollowUpToManager,
    receivedPerSLA: YesNo.Yes,
    templates  : template1
  },
  {
    id: '4',
    strategyManager: 'Manager 3',
    strategyName: 'Demo Strategy 4',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.View,
    receivedPerSLA: YesNo.Yes,
    templates : template2
  },
  {
    id: '5',
    strategyManager: 'Manager 2',
    strategyName: 'Demo Strategy 6',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.Review,
    receivedPerSLA: YesNo.Yes,
    templates: template1
  },
  {
    id: '6',
    strategyManager: 'Manager 2',
    strategyName: 'Demo Strategy 6',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.ApprovalPending,
    receivedPerSLA: YesNo.Yes,
    templates : template2
  },
];
