export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contactus = "Contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
