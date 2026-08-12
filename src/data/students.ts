// EXPORTS: IStudent, MOCK_STUDENTS
export interface IStudent {
  id: string
  name: string
  constellation: string
  hobbies: string
  motto: string
  imageUrl: string
  isClassLeader?: boolean
  position?: string
}

export const MOCK_STUDENTS: IStudent[] = [
  {
    id: '1',
    name: '李明轩',
    constellation: '狮子座',
    hobbies: '篮球、编程、阅读',
    motto: '天道酬勤，厚积薄发',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg',
    isClassLeader: true,
    position: '班长'
  },
  {
    id: '2',
    name: '王思琪',
    constellation: '处女座',
    hobbies: '钢琴、绘画、书法',
    motto: '细节决定成败',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/2.jpg',
    isClassLeader: true,
    position: '副班长'
  },
  {
    id: '3',
    name: '张浩然',
    constellation: '双子座',
    hobbies: '数学竞赛、围棋',
    motto: '学无止境，勇攀高峰',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/3.jpg',
    isClassLeader: true,
    position: '学习委员'
  },
  {
    id: '4',
    name: '陈雨萱',
    constellation: '天秤座',
    hobbies: '舞蹈、唱歌、表演',
    motto: '舞动青春，绽放光彩',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/4.jpg',
    isClassLeader: true,
    position: '文艺委员'
  },
  {
    id: '5',
    name: '刘子豪',
    constellation: '白羊座',
    hobbies: '足球、跑步、健身',
    motto: '运动使生命更精彩',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/5.jpg',
    isClassLeader: true,
    position: '体育委员'
  },
  {
    id: '6',
    name: '赵晓雅',
    constellation: '巨蟹座',
    hobbies: '手工、摄影、旅行',
    motto: '生活需要仪式感',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/6.jpg',
    isClassLeader: true,
    position: '劳动委员'
  },
  {
    id: '7',
    name: '孙梓涵',
    constellation: '天蝎座',
    hobbies: '写作、阅读、辩论',
    motto: '笔墨间自有乾坤',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/7.jpg'
  },
  {
    id: '8',
    name: '周俊杰',
    constellation: '射手座',
    hobbies: '吉他、摄影、滑板',
    motto: '自由是灵魂的氧气',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/8.jpg'
  },
  {
    id: '9',
    name: '吴梦琪',
    constellation: '双鱼座',
    hobbies: '画画、看电影、烘焙',
    motto: '做个温暖的人',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/9.jpg'
  },
  {
    id: '10',
    name: '郑文博',
    constellation: '水瓶座',
    hobbies: '机器人、编程、科技制作',
    motto: '创新改变世界',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/10.jpg'
  },
  {
    id: '11',
    name: '黄诗涵',
    constellation: '金牛座',
    hobbies: '古筝、茶艺、插花',
    motto: '静以修身，俭以养德',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/11.jpg'
  },
  {
    id: '12',
    name: '朱天宇',
    constellation: '摩羯座',
    hobbies: '篮球、物理实验',
    motto: '脚踏实地，仰望星空',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/1.jpg'
  },
  {
    id: '13',
    name: '何欣怡',
    constellation: '双子座',
    hobbies: '英语演讲、辩论、旅行',
    motto: '世界那么大，我想去看看',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/2.jpg'
  },
  {
    id: '14',
    name: '罗浩然',
    constellation: '狮子座',
    hobbies: '游泳、羽毛球、阅读',
    motto: '永不言弃，超越自我',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/3.jpg'
  },
  {
    id: '15',
    name: '谢雨桐',
    constellation: '处女座',
    hobbies: '小提琴、芭蕾、绘画',
    motto: '艺术滋养心灵',
    imageUrl: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ylcylz_fsph_ryhs/ljhwZthlaukjlkulzlp/feisuda/avatar/base/4.jpg'
  }
]