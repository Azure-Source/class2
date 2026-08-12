// EXPORTS: IGalleryImage, MOCK_GALLERY_IMAGES
export interface IGalleryImage {
  id: string
  title: string
  category: '集体活动' | '运动会' | '文艺汇演' | '日常学习' | '团建活动'
  imageUrl: string
  description: string
}

export const MOCK_GALLERY_IMAGES: IGalleryImage[] = [
  {
    id: '1',
    title: '开学典礼合影',
    category: '集体活动',
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
    description: '高2024级开学典礼全体同学合影留念',
  },
  {
    id: '2',
    title: '运动会接力赛',
    category: '运动会',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    description: '运动会4×100米接力赛精彩瞬间',
  },
  {
    id: '3',
    title: '文艺汇演大合唱',
    category: '文艺汇演',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    description: '元旦文艺汇演班级大合唱表演',
  },
  {
    id: '4',
    title: '课堂学习剪影',
    category: '日常学习',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    description: '同学们专注听讲的课堂日常',
  },
  {
    id: '5',
    title: '秋季团建活动',
    category: '团建活动',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
    description: '秋季户外团建拓展活动合影',
  },
  {
    id: '6',
    title: '运动会开幕式',
    category: '运动会',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    description: '春季运动会开幕式方队入场',
  },
  {
    id: '7',
    title: '小组讨论学习',
    category: '日常学习',
    imageUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800',
    description: '课间小组合作探究学习场景',
  },
  {
    id: '8',
    title: '校园歌唱比赛',
    category: '文艺汇演',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800',
    description: '校园十大歌手比赛班级代表演出',
  },
  {
    id: '9',
    title: '志愿者服务',
    category: '集体活动',
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    description: '班级志愿者社区服务活动',
  },
  {
    id: '10',
    title: '生日会团建',
    category: '团建活动',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
    description: '班级集体生日会温馨时刻',
  },
]