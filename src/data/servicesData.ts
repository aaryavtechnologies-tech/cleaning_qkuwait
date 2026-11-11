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
    iconName: 'Building2',
  },
  {
    id: 'house',
    image: '/images/service-house.jpg',
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
    iconName: 'Armchair',
  },
  {
    id: 'kitchen',
    image: '/images/service-kitchen.jpg',
    iconName: 'Utensils',
  },
  {
    id: 'school',
    image: '/images/service-school.jpg',
    iconName: 'GraduationCap',
  },
  {
    id: 'garden',
    image: '/images/service-garden.jpg',
    iconName: 'Trees',
  },
];

