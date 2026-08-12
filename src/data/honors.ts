// EXPORTS: IHonor, MOCK_HONORS
export interface IHonor {
  id: string;
  title: string;
  date: string;
  issuer: string;
  description: string;
  level: 'school' | 'district' | 'city' | 'province';
}

export const MOCK_HONORS: IHonor[] = [
  {
    id: '1',
    title: '秋季运动会团体总分第一名',
    date: '2026-10-28',
    issuer: '学校德育处',
    description: '在2026年秋季运动会中，全班同学团结拼搏，以286分的总成绩荣获高二年级团体总分第一名，并打破三项校纪录。',
    level: 'school',
  },
  {
    id: '2',
    title: '文明班级',
    date: '2026-10-15',
    issuer: '学校德育处',
    description: '十月份文明班级评选中，我班在纪律、卫生、学风等方面表现优异，荣获高二年级"文明班级"荣誉称号。',
    level: 'school',
  },
  {
    id: '3',
    title: '优秀团支部',
    date: '2026-05-04',
    issuer: '团区委',
    description: '在2025-2026学年度共青团工作中表现突出，被授予区级"优秀团支部"荣誉称号。',
    level: 'district',
  },
  {
    id: '4',
    title: '合唱比赛一等奖',
    date: '2026-01-05',
    issuer: '学校艺术中心',
    description: '元旦文艺汇演合唱比赛中，我班演唱《仰望星空》荣获高一年级组一等奖。',
    level: 'school',
  },
  {
    id: '5',
    title: '科技创新大赛二等奖',
    date: '2026-04-20',
    issuer: '市教育局',
    description: '班级代表队在第18届中学生科技创新大赛中凭借《智能教室环境监测系统》项目荣获市级二等奖。',
    level: 'city',
  },
  {
    id: '6',
    title: '先进班集体',
    date: '2025-09-10',
    issuer: '学校',
    description: '2024-2025学年度表现突出，被评为校级"先进班集体"。',
    level: 'school',
  },
  {
    id: '7',
    title: '数学竞赛团体优胜奖',
    date: '2026-03-15',
    issuer: '市数学学会',
    description: '班级数学兴趣小组在全市高中数学联赛中荣获团体优胜奖，3名同学获个人奖项。',
    level: 'city',
  },
  {
    id: '8',
    title: '经典诵读比赛一等奖',
    date: '2025-12-18',
    issuer: '学校语文组',
    description: '在学校首届经典诵读比赛中，我班集体朗诵《少年中国说》荣获高一年级组一等奖。',
    level: 'school',
  },
];
