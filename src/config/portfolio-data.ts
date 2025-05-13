import type { Persona } from '@/types/portfolio';

export const portfolioData: Record<Persona['id'], Persona> = {
  'Co-Host': {
    id: 'Co-Host',
    title: 'Co-Host',
    emoji: '📷',
    color: 'linear-gradient(90deg, #1A237E 0%, #3949AB 50%, #5C6BC0 100%)',
    description: '',
    experiences: [{
      title: 'Buah Hatiku Sayang TVRI',
      description: 'Sebagai Co-Host Cilik di Buah Hatiku Sayang TVRI',
      date: '2024-Sekarang',
      tags: ['Hosting', 'Children\'s TV', 'Entertainment']
    },
    {
      title: 'Funtime RTV',
      description: 'Sebagai Special Guest di Funtime RTV',
      date: '2016',
      tags: ['Hosting', 'Children\'s TV', 'Entertainment']
    }]
  },
  'programmer': {
    id: 'programmer',
    title: 'Programmer',
    emoji: '💻',
    color: 'linear-gradient(90deg, #0F2027 0%, #203A43 60%, #2C5364 100%)',
    description: '',
    experiences: [
      {
        title: 'Membuat Website Portofolio',
        description: 'Membuat Website Portfolio Pribadi dengan Template Next.js',
        date: '2025',
        tags: ['Web Development', 'React', 'Next.js']
      }
    ]
  },
  'music maker': {
    id: 'music maker',
    title: 'Membuat Musik',
    emoji: '🎵',
    color: 'linear-gradient(90deg, #2C3E50 0%, #3498DB 50%, #2980B9 100%)',
    description: 'Crafting melodies that resonate with the soul',
    experiences: [
      {
        title: 'Membuat Musik',
        description: 'Sebenernya cuman hobi sih, tapi seru juga bikin musik :)',
        date: '',
        tags: ['Music Production', 'DAW', 'Beatmaking']
      }
    ]
  }
}; 


