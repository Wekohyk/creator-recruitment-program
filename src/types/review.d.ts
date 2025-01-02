export type ReviewList = {
  widgetName: string;
  widgetType: string[];
  widgetImg: string;
  reviewStatus: string;
  reviewContent: string;
  reviewSvg: string;
  reviewColor: string;
  widgetId: number;
  rejectData?: ReviewFeedback;
};

export type ReviewFeedback = {
  submitTime: string;
  rejectReason: string[];
  rejectImg: string;
};
