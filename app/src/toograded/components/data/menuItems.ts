import {
  CalculatorIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon,
  DocumentIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<any>;
  subItems?: MenuItem[];
}
export const gradebook: MenuItem[] = [
  {
    name: 'Gradebook',
    description: 'View and manage your grades.',
    icon: AcademicCapIcon,
    href: '/gradebook'
  }
]
export const calculators: MenuItem[] = [
  {
    name: 'SGPA Calculator',
    description: 'Calculate your Semester Grade Point Average quickly and accurately.',
    icon: CalculatorIcon,
    href: '/#',
    subItems: [
      {
        name: 'SGPA to Percentage',
        description: 'Convert SGPA to percentage easily',
        icon: ArrowPathIcon,
        href: '/#'
      },
      {
        name: 'CGPA to Percentage',
        description: 'Convert CGPA to percentage accurately',
        icon: ArrowPathIcon,
        href: '/#'
      },
      {
        name: 'Mark Percentage',
        description: 'Calculate mark percentage efficiently',
        icon: ChartBarIcon,
        href: '/#'
      }
    ]
  },
  {
    name: 'CGPA Calculator',
    description: 'Calculate your Cumulative Grade Point Average with precision.',
    icon: CalculatorIcon,
    href: '/#'
  },
  {
    name: 'Engineering CGPA',
    description: 'Specialized calculator for engineering students.',
    icon: AcademicCapIcon,
    href: '/#'
  },
  {
    name: 'SGPA to CGPA',
    description: 'Convert between SGPA and CGPA seamlessly.',
    icon: ArrowsRightLeftIcon,
    href: '/#'
  }
];

export const resources: MenuItem[] = [
  {
    name: 'Casual Leave Application',
    description: 'Apply for casual leave easily.',
    icon: DocumentIcon,
    href: '/#'
  },
  {
    name: 'Pomodoro Timer',
    description: 'Boost your productivity with our customizable Pomodoro Timer.',
    icon: ClockIcon,
    href: '/#'
  }
];