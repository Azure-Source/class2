// EXPORTS: ITeacher, MOCK_TEACHERS
export interface ITeacher {
  id: string
  name: string
  subject: string
  teachingStyle: string
  imageUrl: string
  isHeadTeacher?: boolean
}

export const MOCK_TEACHERS: ITeacher[] = [
  {
    id: '1',
    name: '王建国',
    subject: '语文',
    teachingStyle: '幽默风趣，注重文学素养培养',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg',
    isHeadTeacher: true,
  },
  {
    id: '2',
    name: '李明华',
    subject: '数学',
    teachingStyle: '逻辑清晰，善于启发思考',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/2.jpg',
  },
  {
    id: '3',
    name: '张雪梅',
    subject: '英语',
    teachingStyle: '互动教学，注重口语表达',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/3.jpg',
  },
  {
    id: '4',
    name: '陈志强',
    subject: '物理',
    teachingStyle: '实验结合，讲解深入浅出',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/4.jpg',
  },
  {
    id: '5',
    name: '刘芳',
    subject: '化学',
    teachingStyle: '细致耐心，重视基础训练',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/5.jpg',
  },
  {
    id: '6',
    name: '赵晓燕',
    subject: '生物',
    teachingStyle: '生动形象，联系生活实际',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/6.jpg',
  },
]