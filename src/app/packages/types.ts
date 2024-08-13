export interface IFormValues {
  name: string;
  details: string;
  instructions: string;
  reviewType: string;
  reviewFileType: string;
  options: string;
  price: string;
  credits: string;
}

export interface IRadioOption {
  value: string;
  label: string;
  disabled: boolean;
  className: string;
  style: React.CSSProperties | null;
}

interface IRadioOptionsGroup {
  style: React.CSSProperties | null;
  row: boolean;
  options: IRadioOption[];
}

export interface IRadioOptions {
  reviewFileType: IRadioOptionsGroup;
  reviewType: IRadioOptionsGroup;
}
