// src/data/mockData.js
export const coursesData = [
  {
    id: 1,
    title: 'React基礎講座',
    description: 'Reactの基本を学ぶ',
    progress: 80,
    totalStudents: 25,
    completed: 20,
    lessons: [
      { id: 1, title: 'Reactの基本概念', duration: '10:00', completed: true },
      { id: 2, title: 'コンポーネントとProps', duration: '15:00', completed: false },
    ]
  },
  {
    id: 2,
    title: 'TypeScript入門',
    description: 'TypeScriptの基礎',
    progress: 60,
    totalStudents: 30,
    completed: 15,
    lessons: [
      { id: 1, title: 'TypeScriptとは', duration: '12:00', completed: true },
      { id: 2, title: '型システム', duration: '18:00', completed: false },
    ]
  }
];

export const userData = {
  id: 1,
  name: '山田太郎',
  role: 'admin', // or 'employee'
  department: '開発部'
};