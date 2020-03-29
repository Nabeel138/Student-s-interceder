import { Injectable } from '@angular/core';
import { Product } from './meta';

@Injectable()
export class DataService {
  products: Product[] = [
    {
      id: 1,
      title: 'Kendriya Vidyalaya Shirt',
      description: 'School Shirt available in all sizes',
      picture: '/assets/p1-1.jpg',
      price: 550,
      sale: 500,
      photos: [
        {
          thumb: '/assets/p1-1.jpg',
          full: '/assets/p1-1.jpg',
          description: 'Shirts',
        },
        {
          thumb: '/assets/p1-2.jpg',
          full: '/assets/p1-2.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-3.jpg',
          full: '/assets/p1-3.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p1-4.jpg',
          full: '/assets/p1-4.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 2,
      title: 'DPS School Jacket',
      description: 'School Jacket and athletic fit!',
      picture: '/assets/p2-1.jpg',
      price: 900,
      sale: 810,
      photos: [
        {
          thumb: '/assets/p2-1.jpg',
          full: '/assets/p2-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p2-2.jpg',
          full: '/assets/p2-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 3,
      title: 'Girls School Kit',
      description: 'Tailored fit.',
      picture: '/assets/p3-1.jpg',
      price: 750,
      sale: 700,
      photos: [
        {
          thumb: '/assets/p3-1.jpg',
          full: '/assets/p3-1.jpg',
          description: 'Jacket',
        },
        {
          thumb: '/assets/p3-2.jpg',
          full: '/assets/p3-2.jpg',
          description: 'Jacket',
        },
      ],
    },
    {
      id: 4,
      title: 'R.D. Sharma Class 10',
      description: 'Best selling Math Book',
      picture: '/assets/p4-1.jpg',
      price: 790,
      sale: 550,
      photos: [
        {
          thumb: '/assets/p4-1.jpg',
          full: '/assets/p4-1.jpg',
          description: 'Base Layer Top',
        },
        {
          thumb: '/assets/p4-2.jpg',
          full: '/assets/p4-2.jpg',
          description: 'Base Layer Top',
        },
      ],
    },
    {
      id: 5,
      title: 'H.C. Verma Concepts of Physics',
      description: 'Physics reference book by H.C. Verma. ',
      picture: '/assets/p5-1.jpg',
      price: 1250,
      sale: 1090,
      photos: [
        {
          thumb: '/assets/p5-1.jpg',
          full: '/assets/p5-1.jpg',
          description: 'Lucy',
        },
        {
          thumb: '/assets/p5-2.jpg',
          full: '/assets/p5-2.jpg',
          description: 'Lucy',
        },
      ],
    },
    {
      id: 6,
      title: 'Sleveless Vest',
      description: 'For School events.',
      picture: '/assets/p6-1.jpg',
      price: 350,
      sale: 300,
      photos: [
        {
          thumb: '/assets/p6-1.jpg',
          full: '/assets/p6-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-2.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-3.jpg',
          full: '/assets/p6-3.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p6-4.jpg',
          full: '/assets/p6-4.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 7,
      title: 'K.V. Hoodie',
      description: 'Hoodie for winters.',
      picture: '/assets/p7-1.jpg',
      price: 740,
      sale: 700,
      photos: [
        {
          thumb: '/assets/p7-1.jpg',
          full: '/assets/p7-1.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-2.jpg',
          full: '/assets/p7-2.jpg',
          description: 'Vest',
        },
        {
          thumb: '/assets/p7-3.jpg',
          full: '/assets/p7-3.jpg',
          description: 'Vest',
        },
      ],
    },
    {
      id: 8,
      title: 'Natraj Pencil Box',
      description: 'Pack of 10.',
      picture: '/assets/p8-1.jpg',
      price: 50,
      sale: 40,
      photos: [
        {
          thumb: '/assets/p8-1.jpg',
          full: '/assets/p8-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-2.jpg',
          full: '/assets/p8-2.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p8-3.jpg',
          full: '/assets/p8-4.jpg',
          description: 'Pants',
        },
      ],
    },
    {
      id: 9,
      title: 'Rynolds Pen Set',
      description: 'Set of 3 pens',
      picture: '/assets/p9-1.jpg',
      price: 50,
      sale: 45,
      photos: [
        {
          thumb: '/assets/p9-1.jpg',
          full: '/assets/p9-1.jpg',
          description: 'Pants',
        },
        {
          thumb: '/assets/p9-2.jpg',
          full: '/assets/p9-2.jpg',
          description: 'Pants',
        },
      ],
    },
  ];
}
