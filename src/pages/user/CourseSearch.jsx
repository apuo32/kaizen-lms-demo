// src/pages/user/CourseSearch.jsx
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Target,
  User,
  BarChart2 
} from 'lucide-react';

const CourseSearch = ({ onCourseSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // カテゴリーオプション
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: '5s', name: '5S' },
    { id: 'quality', name: '品質管理' },
    { id: 'waste', name: 'ムダ削減' },
    { id: 'safety', name: '安全管理' },
    { id: 'leadership', name: 'リーダーシップ' },
    { id: 'problem-solving', name: '問題解決' }
  ];

  // レベルオプション
  const levels = [
    { id: 'all', name: 'すべて' },
    { id: 'basic', name: '基礎' },
    { id: 'intermediate', name: '実践' },
    { id: 'advanced', name: '上級' }
  ];

  // コースデータ
const courses = [
  {
    id: 1,
    title: '5S活動の基礎と実践',
    description: '整理・整頓・清掃・清潔・躾の基本を学び、職場の生産性向上を実現します。',
    category: '5s',
    level: 'basic',
    duration: '4時間',
    rating: 4.8,
    students: 328,
    tags: ['5S', '職場改善', '基礎'],
    instructor: '山田 清一',
    position: '生産管理部長',
    updatedAt: '2024-03-01',
    outcomes: [
      '5Sの基本原則の理解',
      '職場での実践方法の習得',
      '改善活動の進め方'
    ]
  },
  {
    id: 2,
    title: '現場のムダ削減実践講座',
    description: '7つのムダを理解し、効率的な生産体制の構築方法を学びます。',
    category: 'waste',
    level: 'intermediate',
    duration: '6時間',
    rating: 4.6,
    students: 245,
    tags: ['ムダ削減', '生産性向上', '実践'],
    instructor: '鈴木 誠',
    position: '生産技術マネージャー',
    updatedAt: '2024-03-10',
    outcomes: [
      '7つのムダの特定方法',
      '改善施策の立案と実行',
      'コスト削減効果の測定'
    ]
  },
  {
    id: 3,
    title: 'QC手法による品質改善',
    description: '品質管理の基本と各種QC手法を活用した改善活動の進め方を解説します。',
    category: 'quality',
    level: 'intermediate',
    duration: '5時間',
    rating: 4.7,
    students: 189,
    tags: ['品質管理', 'QC手法', '実践'],
    instructor: '田中 品質',
    position: '品質管理部長',
    updatedAt: '2024-03-15',
    outcomes: [
      'QC7つ道具の活用方法',
      '品質データの分析手法',
      '改善活動の進め方'
    ]
  },
  {
    id: 4,
    title: 'リーダーシップの基礎と応用',
    description: '効果的なリーダーシップスキルを学び、チームの成長と成果を促進します。',
    category: 'leadership',
    level: 'advanced',
    duration: '3時間',
    rating: 4.9,
    students: 112,
    tags: ['リーダーシップ', 'チームマネジメント', '応用'],
    instructor: '高橋 リーダー',
    position: 'チームリーダー',
    updatedAt: '2024-04-01',
    outcomes: [
      '効果的なコミュニケーションスキルの習得',
      'チームのモチベーション向上法',
      '組織内の問題解決能力の強化'
    ]
  },
  {
    id: 5,
    title: '在庫管理の最適化',
    description: '在庫管理の基本を学び、効率的な在庫運用の手法を習得します。',
    category: 'inventory',
    level: 'basic',
    duration: '2時間',
    rating: 4.5,
    students: 78,
    tags: ['在庫管理', '効率化', '基礎'],
    instructor: '佐藤 在庫',
    position: '在庫管理責任者',
    updatedAt: '2024-04-05',
    outcomes: [
      '在庫回転率の理解と計算',
      '適正在庫の維持方法',
      '在庫コストの削減手法'
    ]
  },
  {
    id: 6,
    title: 'PDCAサイクルを用いた改善活動',
    description: 'PDCAサイクルの活用方法を学び、継続的な改善プロセスを促進します。',
    category: 'improvement',
    level: 'intermediate',
    duration: '4.5時間',
    rating: 4.7,
    students: 152,
    tags: ['PDCA', '改善', '継続的学習'],
    instructor: '松本 改善',
    position: '改善プロジェクトマネージャー',
    updatedAt: '2024-04-10',
    outcomes: [
      'PDCAサイクルの理解と応用',
      '業務プロセスの分析と改善',
      '効果的なフィードバックの提供'
    ]
  }
];

  // 検索とフィルタリング
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || course.category === selectedCategory;
    
    const matchesLevel = 
      selectedLevel === 'all' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 検索バーとフィルター */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="学びたいコースを検索..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* コース一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => onCourseSelect(course)}
            className="
              bg-white rounded-lg shadow-md overflow-hidden cursor-pointer 
              transform transition-transform duration-200 ease-in-out 
              hover:shadow-md hover:-translate-y-1 hover:scale-102
            "
          >
            {/* コースサムネイル */}
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>

            {/* コース情報 */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <span
                  className={`
                    text-xs px-2 py-1 rounded-full
                    ${
                      course.level === 'basic'
                        ? 'bg-green-100 text-green-800'
                        : course.level === 'intermediate'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }
                  `}
                >
                  {levels.find((l) => l.id === course.level)?.name}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* 学習成果 */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  学習後に身につくスキル
                </h4>
                <ul className="space-y-1">
                  {course.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Target className="h-4 w-4 text-blue-500" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* コース詳細情報 */}
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students}名受講
                </div>
                <div className="flex items-center gap-1">
                  <BarChart2 className="h-4 w-4" />
                  実践的な演習あり
                </div>
              </div>

              {/* 講師情報 */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">{course.instructor}</p>
                  <p className="text-xs text-gray-500">{course.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* 該当コースなし */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            コースが見つかりませんでした
          </h3>
          <p className="text-gray-600">
            検索条件を変更して、もう一度お試しください
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseSearch;