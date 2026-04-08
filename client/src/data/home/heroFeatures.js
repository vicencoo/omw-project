import { Clock, Fuel, ShieldCheck } from 'lucide-react';

export const getHeroFeatures = (t) => [
  {
    id: 1,
    icon: Fuel,
    label: t('firstLabel'),
    text: t('firstText'),
  },
  {
    id: 2,
    icon: Clock,
    label: t('secondLabel'),
    text: t('secondText'),
  },
  {
    id: 3,
    icon: ShieldCheck,
    label: t('thirdLabel'),
    text: t('thirdText'),
  },
];
