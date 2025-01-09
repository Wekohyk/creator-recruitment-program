export type CardList = {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
};

export type AuthorData = {
  totalWorksUsage?: number;
  totalHotValue?: number;
  everyTotalWorks?: number;
  everyHotValue?: number;
  creatorName?: string;
  creatorAvatar?: string;
  isRealNameAuthentication?: boolean;
  creatorLeave?: number;
  creatorLevelImg?: string;
  moneyData?: MoneyContent;
};

export type MoneyContent = {
  moneyContent: number;
};

export type WidgetType = 'small' | 'medium' | 'large';

export type MyWork = {
  widgetName: string;
  widgetType: WidgetType[];
  widgetImg: string;
  todayUseCount: string;
  useCount: string;
  hotValue: string;
  todayHotValue: string;
  notice: NoticeList[];
  creator: CreatorMirage;
};

export type CreatorMirage = {
  creatorName: string;
  creatorAvatar: string;
};

export type NoticeList = {
  avatarImgRandom: string;
  widgetNotice: number;
  avatarName: string;
  widgetStatus: string;
  svgColor: string;
  hotValue: string;
  hotContent: string;
  svgImg: string;
  widgetData?: WidgetData;
};

export type LevelIcon = {
  img: string;
  title: string;
  level: string;
  upLevel: string;
  extraBonus: string;
  upgradeRequirements: string;
  needUpValue: number;
};

export type WidgetData = {
  widgetImg: string;
  widgetType: WidgetType[];
};

export type InviteNewUsers = {
  name?: string;
  avatar?: string;
};

export type Wallet = {
  moneyContent: number;
  totalWithdraw: number;
  amountDetails: {
    walletDetailIcon: string;
    walletDetailColor: string;
    walletDetailTitle: string;
    walletDetailMoney: number;
    submitTime: string;
  }[];
};
