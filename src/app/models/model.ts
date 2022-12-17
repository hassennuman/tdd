export interface IBase{
    id : string | Number;
    title? : string;
}

export interface ISubQuestion extends IBase{
    question : string;
   inputType : string;
}

export interface IQuestion extends IBase{
   question : string;
   inputType : string;
   subQuestions? : ISubQuestion[];
}

export interface ISection extends IBase{
    questions : IQuestion[];
}

export interface IFundType extends IBase{
    sections : ISection[];
}

