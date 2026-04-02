import {
  Coffee,
  Fuel,
  Hotel,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from 'lucide-react';

export const SERVICES = [
  {
    id: 1,
    title: 'Karburant Cilësor',
    description:
      'Naftë dhe benzinë me standard të lartë për performancë të sigurt dhe të qëndrueshme.',
    icon: Fuel,
  },
  {
    id: 2,
    title: 'Hotel',
    description: 'Akomodohuni dhe shijoni hotelin tonë i cili gjendet ne Vorë',
    icon: Hotel,
  },
  {
    id: 3,
    title: 'Shërbime Auto',
    description:
      'Kontrolle bazë, vajra, goma dhe ndihmë e shpejtë për nevojat e përditshme të makinës.',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'Mini Market',
    description:
      'Produkte të përditshme, ujë, pije dhe artikuj të nevojshëm gjatë udhëtimit tuaj.',
    icon: ShoppingBag,
  },
  {
    id: 5,
    title: 'Kafe & Snacks',
    description:
      'Pushim i shkurtër me kafe, pije freskuese dhe snack-e për çdo udhëtar.',
    icon: Coffee,
  },
  {
    id: 6,
    title: 'Shërbim i Besueshëm',
    description:
      'Staf miqësor, ambient i rregullt dhe shërbim i disponueshëm për t’ju ndihmuar në çdo kohë.',
    icon: ShieldCheck,
  },
];
