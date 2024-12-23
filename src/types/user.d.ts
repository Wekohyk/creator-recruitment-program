export type CardList = {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
};

export type AuthorList = {
  totalWorksUsage: number;
  totalHotValue: number;
  everyTotalWorks: number;
  everyHotValue: number;
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

export type WidgetData = {
  widgetImg: string;
  widgetType: WidgetType[];
};
