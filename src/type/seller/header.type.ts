export interface IFormPropsHeader {
  enableBackIcon: boolean;
  title: string;
  showButtonRight: boolean;
  conditionButtonRight: boolean;
  actionButtonRight: () => void;
  customBack: () => void;
}
