import {
  IQuestion,
  ISection,
  ISubQuestion,
  IBase,
  ITemplate,
} from '../models/model';

export const template1: ITemplate[] = [
  {
    id: 'tpmfsri',
    sections: [
      {
        id: 1,
        title: 'Product Details',
        questions: [
          {
            id: '1.1',
            question: 'imcName',
            inputType: 'text',
          },
          {
            id: '1.2',
            question: 'address',
            inputType: 'text',
          },
          {
            id: '1.3',
            question: 'phone',
            inputType: 'text',
          },
          {
            id: '1.4',
            question: 'fax',
            inputType: 'text',
          },
          {
            id: '1.5',
            question: 'email',
            inputType: 'email',
          },
          {
            id: '1.6',
            question: 'date  submission',
            inputType: 'date',
          },
          {
            id: '1.7',
            question: 'country',
            inputType: 'button',
          },
          {
            id: '1.8',
            question: 'fund Name',
            inputType: 'text',
          },
          {
            id: '1.9',
            question: 'Is Complete',
            inputType: 'checkbox',
          },
        ],
      },
      {
        id: 2,
        title: 'important product restriction disclosures',
        questions: [
          {
            id: '2.1',
            question:
              'Please state I there are any current restriction that apply to the distribition',
            inputType: 'textarea',
          },
          {
            id: '2.2',
            question:
              'if yes, please describe the nature of the restriction and in which countries these apply to (e.g to US, PRC, Irish nationals, anly for accredited investore, in singopore, sophisticated investors in HK etc.).',
            inputType: 'textarea',
          },
        ],
      },
      {
        id: 3,
        title: 'investment team',
        questions: [
          {
            id: '3.1',
            question: 'What is A',
            inputType: 'textarea',
            subQuestions: [
              {
                id: '3.1.1',
                questions: [
                  {
                    id: '3.1.1.1',
                    question: 'What is AA?',
                    inputType: 'textarea',
                    subQuestions : [
                      {
                        questions : [
                          {
                            id: '3.1.1.1.1 ',
                            question: 'What is AAA?',
                            inputType: 'textarea',
                            subQuestions : []
                          },
                          {
                            id: '3.1.1.1.2 ',
                            question: 'What is AAB?',
                            inputType: 'textarea',
                            subQuestions : []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: '3.1.1.2',
                    question: 'What is AB?',
                    inputType: 'textarea',

                  },
                ],
              },
            ],
          },
          {
            id: '3.2',
            question: 'What is B',
            inputType: 'textarea',
          },
          {
            id: '3.3',
            question: 'What is C',
            inputType: 'textarea',
            subQuestions : [
              {
                questions : [
                  {
                    id: '3.3.1 ',
                    question: 'What is CA?',
                    inputType: 'textarea',
                    subQuestions : []
                  },
                  {
                    id: '3.3.2 ',
                    question: 'What is CB?',
                    inputType: 'textarea',
                    subQuestions : []
                  }
                ]
              }
            ]
          },
        ],
      },
      {
        id: 4,
        title: 'Investment Objectiv',
        questions: [
          {
            id: 4.1,
            question:
              'Describe the funds investment objective, including reference to return, risk, time-horizon, Hs the objective chenged over the last 5 years? If yes, provide the detail and reasoning.',
            inputType: 'textarea',
          },
          {
            id: 4.2,
            question:
              'What is the size of the fund? How has fund size changed over the last 12 months?',
            inputType: 'textarea',
          },
        ],
      },
    ],
  },
];

export const template2: ITemplate[] = [
  {
    id: '2',
    sections: [
      {
        id: 1,
        title: 'Product Information',
        questions: [
          {
            id: '1.1',
            question: 'imcName',
            inputType: 'text',
          },
          {
            id: '1.2',
            question: 'address',
            inputType: 'text',
          },
          {
            id: '1.3',
            question: 'phone',
            inputType: 'text',
          },
          {
            id: '1.4',
            question: 'fax',
            inputType: 'text',
          },
          {
            id: '1.5',
            question: 'email',
            inputType: 'email',
          },
          {
            id: '1.6',
            question: 'date  submission',
            inputType: 'date',
          },
          {
            id: '1.7',
            question: 'country',
            inputType: 'button',
          },
          {
            id: '1.8',
            question: 'fund Name',
            inputType: 'text',
          },
          {
            id: '1.9',
            question: 'Is Complete',
            inputType: 'checkbox',
          },
        ],
      },
    ],
  },
];
