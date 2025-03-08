export interface ISections {
  title: string;
  href: string;
}

export enum EStatus {
  success = "success",
  fail = "fail",
}

export type TSuccessMessage<T> = {
  status: EStatus;
  data: T;
};

export type TNavBarRespone = {
  logo: {
    height: number;
    source: string;
    width: string;
  };
  sections: ISections[];
};

export type THomePageResponse = {
  name: string;
  roles: string[];
};

export type TAboutResponse = {
  about: string;
  imageSource: string;
  resumeLink: string;
};

interface IIcon {
  icon: string;
  title: string;
}

interface ISkill {
  title: string;
  items: IIcon[];
}

export type TSkillsResponse = {
  intro: string;
  skills: ISkill[];
};

interface IEducation {
  title: string;
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
  icon?: {
    src: string;
  };
}

export type TEducationResponse = {
  education: IEducation[];
};

interface ISocial {
  network: string;
  href: string;
}

export type TSocialResponse = {
  social: ISocial[];
};

export type TFooterResponse = {
  introText: string;
  buttonText: string;
  contactLink: string;
  moreLinksTitle: string;
  moreLinks: {
    label: string;
    url: string;
  }[];
  description: string;
  socialTitle: string;
  socialLinks: {
    icon: string;
    url: string;
  }[];
  copyright: string;
  author: string;
};
