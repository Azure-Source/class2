// EXPORTS: IScheduleItem, MOCK_SCHEDULE
export interface IScheduleItem {
  subject: string;
  teacher: string;
}

export interface IDaySchedule {
  day: string;
  morningReading: IScheduleItem;
  morning: IScheduleItem[]; // 4节
  afternoon: IScheduleItem[]; // 3节
  eveningStudy: IScheduleItem;
}

export const MOCK_SCHEDULE: IDaySchedule[] = [
  {
    day: '周一',
    morningReading: { subject: '语文', teacher: '王建国' },
    morning: [
      { subject: '数学', teacher: '李明华' },
      { subject: '语文', teacher: '王建国' },
      { subject: '英语', teacher: '张雪梅' },
      { subject: '物理', teacher: '陈志强' },
    ],
    afternoon: [
      { subject: '化学', teacher: '刘芳' },
      { subject: '生物', teacher: '赵晓燕' },
      { subject: '体育', teacher: '马教练' },
    ],
    eveningStudy: { subject: '自习', teacher: '值班老师' },
  },
  {
    day: '周二',
    morningReading: { subject: '英语', teacher: '张雪梅' },
    morning: [
      { subject: '语文', teacher: '王建国' },
      { subject: '数学', teacher: '李明华' },
      { subject: '物理', teacher: '陈志强' },
      { subject: '化学', teacher: '刘芳' },
    ],
    afternoon: [
      { subject: '英语', teacher: '张雪梅' },
      { subject: '生物', teacher: '赵晓燕' },
      { subject: '美术', teacher: '周老师' },
    ],
    eveningStudy: { subject: '自习', teacher: '值班老师' },
  },
  {
    day: '周三',
    morningReading: { subject: '数学', teacher: '李明华' },
    morning: [
      { subject: '英语', teacher: '张雪梅' },
      { subject: '语文', teacher: '王建国' },
      { subject: '数学', teacher: '李明华' },
      { subject: '生物', teacher: '赵晓燕' },
    ],
    afternoon: [
      { subject: '物理', teacher: '陈志强' },
      { subject: '化学', teacher: '刘芳' },
      { subject: '音乐', teacher: '林老师' },
    ],
    eveningStudy: { subject: '自习', teacher: '值班老师' },
  },
  {
    day: '周四',
    morningReading: { subject: '语文', teacher: '王建国' },
    morning: [
      { subject: '数学', teacher: '李明华' },
      { subject: '英语', teacher: '张雪梅' },
      { subject: '语文', teacher: '王建国' },
      { subject: '物理', teacher: '陈志强' },
    ],
    afternoon: [
      { subject: '化学', teacher: '刘芳' },
      { subject: '生物', teacher: '赵晓燕' },
      { subject: '体育', teacher: '马教练' },
    ],
    eveningStudy: { subject: '自习', teacher: '值班老师' },
  },
  {
    day: '周五',
    morningReading: { subject: '英语', teacher: '张雪梅' },
    morning: [
      { subject: '语文', teacher: '王建国' },
      { subject: '数学', teacher: '李明华' },
      { subject: '英语', teacher: '张雪梅' },
      { subject: '物理', teacher: '陈志强' },
    ],
    afternoon: [
      { subject: '化学', teacher: '刘芳' },
      { subject: '生物', teacher: '赵晓燕' },
      { subject: '班会', teacher: '李明华' },
    ],
    eveningStudy: { subject: '自习', teacher: '值班老师' },
  },
];

export const SUBJECT_COLORS: Record<string, string> = {
  '语文': 'bg-rose-100 text-rose-700',
  '数学': 'bg-blue-100 text-blue-700',
  '英语': 'bg-purple-100 text-purple-700',
  '物理': 'bg-amber-100 text-amber-700',
  '化学': 'bg-emerald-100 text-emerald-700',
  '生物': 'bg-teal-100 text-teal-700',
  '体育': 'bg-orange-100 text-orange-700',
  '音乐': 'bg-pink-100 text-pink-700',
  '美术': 'bg-indigo-100 text-indigo-700',
  '自习': 'bg-slate-100 text-slate-700',
  '班会': 'bg-cyan-100 text-cyan-700',
};
