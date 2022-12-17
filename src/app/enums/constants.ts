export enum FinalStatus {
  Received = 'Received',
  Completed = 'Completed',
}

export enum Action {
  Review = 'Review',
  View = 'View',
  SendFollowUpToManager = 'Send Followup to Manager',
  ApprovalPending = 'Approval Pending',
  Approved = 'Approved',
  ReviewComplete = 'Review Complete',
}

export enum ReviewType {
    InitialDueDiligence = 'Initial Due Diligence',
    OngoingDueDiligence = 'Ongoing Due Diligence'
}

export enum YesNo{
    Yes = "Yes",
    No = "No"
}
