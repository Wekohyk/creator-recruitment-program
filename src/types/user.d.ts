export type CardList = {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  useCountPeople?: number;
  count?: number;
  hotValue?: number;
  hotCount?: number;
};

export type MyWork = {
  widgetName: string;
  widgetType: string[];
  widgetImg: string;
  useCount: string;
  hotValue: string;
  todayHotValue: string;
};
