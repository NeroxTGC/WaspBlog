// Import the images
import bestDirectionToStudyImage from '../articles/best-direction-to-study-for-competitive-exams/components/best-direction-to-study-for-competitive-exams.webp';
import dpepImage from '../articles/DPEP/components/dpep.webp';

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  href: string;
  image: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export const articles: Article[] = [
  {
    id: '2',
    title: 'DPEP',
    description: 'DPEP',
    date: '2024-11-16',
    href: '/dpep',
    image: dpepImage,
    slug: 'dpep',
    excerpt: 'DPEP',
    category: 'Education',
    readTime: '4 min read',
    featured: false,
    createdAt: new Date('2024-11-16'),
    updatedAt: new Date('2024-11-16'),
    userId: 'TooGraded',
  },
  {
    id: '1',
        title: 'Best Direction to Study for Competitive Exams: Vastu Tips (2024)',
        description: 'Learn about the most auspicious directions for studying according to Vastu Shastra. Discover how proper study room orientation can enhance focus and academic success..',
        date: '2024-11-10',
        href: '/best-direction-to-study-for-competitive-exams',
        image: bestDirectionToStudyImage,
        slug: 'best-direction-to-study-for-competitive-exams',
        excerpt: 'Learn about the most auspicious directions for studying according to Vastu Shastra. Discover how proper study room orientation can enhance focus and academic success.',
        category: 'Education',
        readTime: '4 min read',
        featured: false,
        createdAt: new Date('2024-11-10'),
        updatedAt: new Date('2024-11-10'),
        userId: 'TooGraded',
    },
];