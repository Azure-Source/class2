// EXPORTS: IClassInfo, MOCK_CLASS_INFO
export interface IClassInfo {
  id: string
  className: string
  gradeName: string
  entranceYear: number
  graduationYear: number
  studentCount: number
  headTeacher: string
  teacherCount: number
  slogan: string
  classMotto: string
  classStyle: string
  description: string
  features: string[]
  graduationDate: string
}

export const MOCK_CLASS_INFO: IClassInfo = {
  id: '1',
  className: '高2024级2027届2班',
  gradeName: '高二',
  entranceYear: 2024,
  graduationYear: 2027,
  studentCount: 45,
  headTeacher: '李明华',
  teacherCount: 9,
  slogan: '青春逐梦，二班同行',
  classMotto: '博学笃志，团结奋进',
  classStyle: '勤学善思、活泼向上、团结友爱',
  description: '我们是高2024级2027届2班，一个由45名热血少年组成的温暖大家庭。在这里，我们挥洒汗水、追逐梦想，共同书写属于我们的青春篇章。',
  features: [
    '浓厚的学习氛围',
    '丰富的文体活动',
    '团结友爱的班级文化',
    '积极向上的精神风貌'
  ],
  graduationDate: '2027-06-08'
}