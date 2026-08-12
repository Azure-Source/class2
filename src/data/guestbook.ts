// EXPORTS: IGuestbookMessage, MOCK_GUESTBOOK_MESSAGES, GUESTBOOK_STORAGE_KEY
export interface IGuestbookMessage {
  id: string;
  nickname: string;
  content: string;
  timestamp: number;
  source: 'mock' | 'user';
  /** 发布者账号，登录用户发布时记录，用于区分"我"的留言和管理员删除 */
  author?: string;
}

export const GUESTBOOK_STORAGE_KEY = '__class2_guestbook_messages';

export const MOCK_GUESTBOOK_MESSAGES: IGuestbookMessage[] = [
  {
    id: 'mock-1',
    nickname: '李明轩',
    content: '二班是我高中最温暖的家，感谢每一位同学和老师！我们一起加油，向未来出发！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
    source: 'mock',
  },
  {
    id: 'mock-2',
    nickname: '王思琪',
    content: '运动会拿第一的时候真的超级感动，大家都太棒了！二班最棒！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
    source: 'mock',
  },
  {
    id: 'mock-3',
    nickname: '张浩然',
    content: '学习虽然辛苦，但有大家一起努力就不觉得累了。继续冲！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 8,
    source: 'mock',
  },
  {
    id: 'mock-4',
    nickname: '陈雨萱',
    content: '文艺汇演我们班的合唱简直是天籁之音！期待下次表演～',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 12,
    source: 'mock',
  },
  {
    id: 'mock-5',
    nickname: '刘子豪',
    content: '足球队加油！下学期联赛我们要拿冠军！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 15,
    source: 'mock',
  },
  {
    id: 'mock-6',
    nickname: '赵晓雅',
    content: '教室后面的植物角又开新花啦，大家记得来看看哦～',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 20,
    source: 'mock',
  },
  {
    id: 'mock-7',
    nickname: '孙梓涵',
    content: '研学旅行是我最开心的三天，和大家在一起的时光总是那么美好。',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 30,
    source: 'mock',
  },
  {
    id: 'mock-8',
    nickname: '周俊杰',
    content: '新的学期新的开始，希望二班每个人都能实现自己的小目标！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 45,
    source: 'mock',
  },
  {
    id: 'mock-9',
    nickname: '吴梦琪',
    content: '生日快乐！今天班级生日会超级温馨，谢谢大家准备的惊喜～',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 60,
    source: 'mock',
  },
  {
    id: 'mock-10',
    nickname: '郑文博',
    content: '科技创新大赛二等奖！感谢团队的每一位成员，我们继续努力！',
    timestamp: Date.now() - 1000 * 60 * 60 * 24 * 90,
    source: 'mock',
  },
];
