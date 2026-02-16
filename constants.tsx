
import { Project, NavLink, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ah-futsal',
    link: 'https://futsal-ruddy.vercel.app/',
    title: 'A&H Futsal',
    category: ['Web App', 'Booking System'],
    year: '2026',
    role: 'Full-Stack Developer',
    services: ['Next.js 16', 'Supabase', 'Dynamic Pricing'],
    description: 'A professional futsal court booking platform designed to streamline venue management and enhance user experience with modern web technologies.',
    challenge: 'Creating an intuitive booking system with real-time slot availability, dynamic pricing based on peak/off-peak hours, and a comprehensive admin dashboard for managing bookings, food stalls, and user roles.',
    solution: 'Built a full-stack application using Next.js 16 with App Router, integrated Supabase for authentication and database management, implemented glassmorphism UI with dark/light mode support, and created an advanced booking engine with time-range selection and automated receipt generation.',
    image: '/images/futsal/image.png',
    gallery: [
      '/images/futsal/image2.png'],
    techStack: ['Next.js 16', 'Tailwind v4', 'Supabase', 'PostgreSQL', 'TypeScript'],
    features: [
      'Dynamic Booking Engine with time-range selection',
      'Real-time slot availability tracking',
      'Dynamic pricing (peak/off-peak hours)',
      'Food court integration with stall management',
      'Role-based access control (Admin/User)',
      'Automated PDF receipt generation',
      'Glassmorphism UI with dark/light themes',
      'Responsive admin dashboard with analytics'
    ],
    nextProjectId: 'task-board'
  },
  {
    id: 'task-board',
    link: 'https://task-board-seven-nu.vercel.app/login',
    title: 'Task Board',
    category: ['Project Management', 'Collaboration'],
    year: '2026',
    role: 'Full-Stack Developer',
    services: ['Next.js 16', 'Kanban', 'RBAC'],
    description: 'A modern, responsive project management application designed to streamline team collaboration with an intuitive Kanban interface.',
    challenge: 'Building a robust task management system that supports drag-and-drop functionality, file attachments via cloud storage, role-based permissions, and real-time progress tracking across multiple projects.',
    solution: 'Developed a comprehensive Kanban board using dnd-kit for smooth drag-and-drop, integrated Supabase Storage for file management, implemented role-based authentication with distinct Admin and Member roles, and created an admin dashboard with real-time statistics and CSV reporting capabilities.',
    image: '/images/taskboard/image.png',
    gallery: [
      '/images/taskboard/image2.png'
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'CSS Modules', '@dnd-kit', 'lucide-react'],
    features: [
      'Kanban board with drag-and-drop interface',
      'Role-based access control (Admin/Member)',
      'File attachment system via Supabase Storage',
      'Real-time assignee progress tracking',
      'Admin dashboard with statistics',
      'CSV export for reporting',
      'Multi-project support',
      'Mobile-responsive design'
    ],
    nextProjectId: 'flood-relief'
  },
  {
    id: 'flood-relief',
    link: 'https://collection-point-flood.vercel.app/',
    title: 'Flood Relief',
    category: ['Crisis Management', 'Mapping'],
    year: '2026',
    role: 'Full-Stack Developer',
    services: ['Next.js 16', 'Leaflet', 'Real-time Data'],
    description: 'A comprehensive flood relief coordination platform designed to connect affected communities with resources and volunteers during crisis situations.',
    challenge: 'Creating an interactive mapping system for real-time tracking of relief collection points, incident reporting, and resource management while ensuring the platform remains accessible and performant during high-traffic emergency scenarios.',
    solution: 'Implemented an interactive Leaflet-based map with real-time markers for collection points and incidents, built a robust reporting system for community submissions, developed an admin dashboard with role-based permissions (Super Admin, Admin, Read-Only), and optimized for server-side rendering to ensure fast load times.',
    image: '/images/floodrelief/image.png',
    gallery: [
      '/images/floodrelief/image2.png'
    ],
    techStack: ['Next.js 16', 'Tailwind v4', 'Supabase', 'Leaflet', 'TypeScript', 'PostgreSQL'],
    features: [
      'Interactive map with real-time markers',
      'Community incident reporting system',
      'Collection point management',
      'Multi-tier admin dashboard (Super Admin, Admin, Read-Only)',
      'Resource allocation tracking',
      'Server-side rendering for performance',
      'Modern CSS with Tailwind v4',
      'Mobile-optimized responsive design'
    ],
    nextProjectId: 'ah-futsal'
  },
  {
    id: 'rag-chatbot',
    link: '#',
    title: 'AI RAG Chatbot (Under Development)',
    category: ['Artificial Intelligence', 'Conversational AI'],
    year: '2026',
    role: 'Full-Stack AI Developer',

    services: [
      'Next.js 16',
      'LLM Integration',
      'Vector Database',
      'Real-time Streaming'
    ],

    description:
      'An intelligent Retrieval-Augmented Generation (RAG) chatbot designed to provide context-aware, accurate responses by combining large language models with custom knowledge base retrieval.',

    challenge:
      'Building a scalable RAG pipeline that retrieves relevant documents from a vector database, injects contextual knowledge into LLM prompts, and streams responses in real-time while maintaining low latency and high accuracy.',

    solution:
      'Implemented a full RAG architecture using document embeddings stored in a vector database, semantic similarity search for retrieval, and LLM-based response generation. Built a clean chat interface with streaming responses, conversation memory, and optimized API routes for performance and scalability.',

    image: 'https://placehold.co/800x500?text=Under+Construction',

    gallery: [
      'https://placehold.co/800x500?text=Under+Construction'
    ],

    techStack: [
      'Next.js 16',
      'TypeScript',
      'OpenAI API',
      'Supabase / PostgreSQL',
      'Vector Embeddings',
      'Tailwind v4',
      'Server Actions',
      'Edge Functions'
    ],

    features: [
      'Retrieval-Augmented Generation architecture',
      'Semantic search with vector embeddings',
      'Custom knowledge base upload',
      'Real-time streaming AI responses',
      'Conversation memory handling',
      'Role-based admin dashboard',
      'Secure API routes',
      'Mobile-responsive chat interface'
    ],

    nextProjectId: 'ah-futsal'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-ihsan-b37890232' },
  { label: 'GitHub', href: 'https://github.com/ihsanakm' },
  { label: 'Email', href: 'mailto:akmohammedihsan@gmail.com' }
];

