export type ServiceId =
  | 'apartment'
  | 'house'
  | 'carpet'
  | 'rug'
  | 'sofa'
  | 'kitchen'
  | 'school'
  | 'garden';

export interface ServiceItemConfig {
  id: ServiceId;
  image: string;
  video?: string;
  iconName:
    | 'Building2'
    | 'Home'
    | 'Layers'
    | 'Sparkles'
    | 'Armchair'
    | 'Utensils'
    | 'GraduationCap'
    | 'Trees';
}

export const SERVICES_LIST: ServiceItemConfig[] = [
  {
    id: 'apartment',
    image: '/images/service-apartment.jpg',
    video: '/videos/work-15.mp4',
    iconName: 'Building2',
  },
  {
    id: 'house',
    image: '/images/service-house.jpg',
    video: '/videos/work-14.mp4',
    iconName: 'Home',
  },
  {
    id: 'carpet',
    image: '/images/service-carpet.jpg',
    iconName: 'Layers',
  },
  {
    id: 'rug',
    image: '/images/service-rug.jpg',
    iconName: 'Sparkles',
  },
  {
    id: 'sofa',
    image: '/images/service-sofa.jpg',
    video: '/videos/work-03.mp4',
    iconName: 'Armchair',
  },
  {
    id: 'kitchen',
    image: '/images/service-kitchen.jpg',
    video: '/videos/work-07.mp4',
    iconName: 'Utensils',
  },
  {
    id: 'school',
    image: '/images/service-school.jpg',
    video: '/videos/work-01.mp4',
    iconName: 'GraduationCap',
  },
  {
    id: 'garden',
    image: '/images/service-garden.jpg',
    iconName: 'Trees',
  },
];

