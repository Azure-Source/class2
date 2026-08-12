// EXPORTS: IAnnouncement, MOCK_ANNOUNCEMENTS
export interface IAnnouncement {
  id: string
  title: string
  date: string
  summary: string
  content: string
  type: 'announcement' | 'activity'
  imageUrl: string
}

export const MOCK_ANNOUNCEMENTS: IAnnouncement[] = [
  {
    id: '1',
    title: '秋季运动会圆满落幕',
    date: '2026-10-28',
    summary: '我班荣获团体总分第一名，打破三项校纪录。',
    content: '在刚刚结束的秋季运动会上，我班同学奋勇拼搏，团结协作，最终以总分286分荣获高二年级团体第一名。其中男子100米、女子4×100米接力、男子跳远三个项目打破校纪录。感谢每位运动员的付出和全班同学的加油助威！',
    type: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
  },
  {
    id: '2',
    title: '期中考试安排通知',
    date: '2026-11-05',
    summary: '期中考试定于11月15日-17日举行，请做好复习准备。',
    content: '各位同学、家长：本学期期中考试定于11月15日至17日进行。考试科目涵盖语文、数学、英语、物理、化学、生物六科。请同学们合理安排复习时间，注意劳逸结合，以最佳状态迎接考试。考试座位表已张贴在教室公告栏。',
    type: 'announcement',
    imageUrl: '',
  },
  {
    id: '3',
    title: '研学旅行活动回顾',
    date: '2026-09-30',
    summary: '为期三天的科技研学之旅圆满结束，同学们收获满满。',
    content: '9月28日-30日，全班同学前往市科技馆和大学城开展了为期三天的研学旅行活动。同学们参观了航天展厅、人工智能实验室，与大学生面对面交流，拓宽了视野，激发了学习热情。返程后每位同学都提交了研学心得。',
    type: 'activity',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
  },
  {
    id: '4',
    title: '文明班级评选结果公示',
    date: '2026-10-15',
    summary: '我班荣获十月份"文明班级"荣誉称号。',
    content: '经学校德育处综合评定，我班在十月份的文明班级评选中脱颖而出，荣获高二年级"文明班级"荣誉称号。这是对我们班班风班貌的肯定，希望同学们继续保持，争取更大进步！',
    type: 'announcement',
    imageUrl: '',
  },
  {
    id: '5',
    title: '元旦文艺汇演节目征集',
    date: '2026-12-01',
    summary: '学校元旦文艺汇演开始报名，欢迎有才艺的同学积极参与。',
    content: '2027年元旦文艺汇演将于12月30日在校大礼堂举行。现面向全校征集节目，形式包括歌唱、舞蹈、小品、器乐等。有意参加的同学请于12月15日前到文艺委员处报名，班级将先进行内部选拔。',
    type: 'announcement',
    imageUrl: '',
  },
]