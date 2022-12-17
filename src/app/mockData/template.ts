import {
  IQuestion,
  ISection,
  IFundType,
  ISubQuestion,
  IBase,
} from '../models/model';
export const templates: IFundType[] = [
  {
    id: 'tpmfsri',
    sections: [
      {
        id: 1,
        title: 'important product restriction disclosures',
        questions: [
          {
            id: '1.1',
            question:
              'Please state I there are any current restriction that apply to the distribition',
            inputType: 'textarea',
          },
          {
            id: '1.2',
            question:
              'if yes, please describe the nature of the restriction and in which countries these apply to (e.g to US, PRC, Irish nationals, anly for accredited investore, in singopore, sophisticated investors in HK etc.).',
            inputType: 'textarea',
          },
        ],
      },
      {
        id: 2,
        title: 'investment team',
        questions: [
          {
            id: '2.1',
            question:
              'from the table presented in 2.1 indicted in 2.2 indicate the individuals who are 1) key Desition makers; 2) Lead partfolio mannager; 3) Back-up managers. For these individuals, provide educational background. ',
            inputType: 'textarea',
            subQuestions: [
              {
                id: '2.2',
                question: '',
                inputType: 'text_area',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Investment Objectiv',
        questions: [
          {
            id: 3.1,
            question:
              'Describe the funds investment objective, including reference to return, risk, time-horizon, Hs the objective chenged over the last 5 years? If yes, provide the detail and reasoning.',
            inputType: 'textarea',
          },
          {
            id: 3.2,
            question:
              'What is the size of the fund? How has fund size changed over the last 12 months?',
            inputType: 'textarea',
          },
        ],
      }
    ],
  },
];
