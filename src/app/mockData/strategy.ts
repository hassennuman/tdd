import { Action, FinalStatus, ReviewType, YesNo } from '../enums/constants';
import { IStrategy } from '../models/model';
import { products1, products2, products3 } from './products';

export const strategies: IStrategy[] = [
  {
    id: '1',
    strategyManager: 'Manager 1',
    strategyName: 'Demo Strategy 1',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Received,
    action: Action.Review,
    receivedPerSLA: YesNo.Yes,
    products: products1,
  },
  {
    id: '2',
    strategyManager: 'Manager 2',
    strategyName: 'Demo Strategy 2',
    reviewType: ReviewType.InitialDueDiligence,
    requestReceivedOn: new Date().toLocaleDateString(),
    requestSendOn: new Date().toLocaleDateString(),
    finalStatus: FinalStatus.Completed,
    action: Action.Review,
    receivedPerSLA: YesNo.Yes,
    products: products2,
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
    products: products3,
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
    products: products1,
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
    products: products1,
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
    products: products3,
  },
];
