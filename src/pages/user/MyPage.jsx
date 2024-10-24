// src/pages/user/MyPage.jsx
import React, { useState } from 'react';
import { 
  BookOpen, 
  Award,
  Target,
  Clock,
  TrendingUp,
  CheckCircle,
  ChartBar,
  Lightbulb,
  Users,
  User,
  Star
} from 'lucide-react';

const MyPage = () => {
  const [activeTab, setActiveTab] = useState('progress');

  // ユーザーデータ
  const userData = {
    name: '山田 太郎',
    email: 'yamada.t@example.com',
    department: '製造部',
    position: '製造課長',
    joinDate: '2024-10-24',
    profileImage: '/api/placeholder/150/150',
    achievements: {
      totalLearningHours: 24,
      completedCourses: 3,
      kaizens: {
        submitted: 8,
        implemented: 3,
        underReview: 2
      },
      improvementPoints: 90,
      badges: [
        { id: 1, name: '5S達人', icon: '🏆', description: '5S活動で優れた成果を達成' },
        { id: 2, name: 'KAIZEN推進者', icon: '⭐', description: '5件以上のKAIZENコースを受講' },
        { id: 3, name: '品質マスター', icon: '🎯', description: 'QC手法の実践を受講' }
      ]
    }
  };

  // 完了したコース履歴
  const completedCourses = [
    {
      id: 1,
      title: '5S活動の基礎と実践',
      completedDate: '2024-02-15',
      score: 92,
      category: '5S',
    },
    {
      id: 2,
      title: '品質管理の基礎',
      completedDate: '2024-03-01',
      score: 88,
      category: '品質管理',
    },
    {
      id: 3,
      title: '品質管理の基礎',
      completedDate: '2024-03-01',
      score: 88,
      category: '品質管理',
    }
  ];

  // 改善活動履歴
  const kaizenHistory = [
    {
      id: 1,
      title: '工具管理ボードの導入',
      status: 'implemented',
      date: '2024-03-01',
      category: '5S',
    },
    {
      id: 2,
      title: '日次点検シートのデジタル化',
      status: 'implemented',
      date: '2024-02-15',
      category: 'ムダ削減',
    },
    {
      id: 3,
      title: '作業手順書の視覚化',
      status: 'under_review',
      date: '2024-03-20',
      category: '標準化',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* プロフィールセクション */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gray-300">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                品質マスター
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                  <p className="text-gray-600">
                    {userData.department} - {userData.position}
                  </p>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      完了したコース: {userData.achievements.kaizens.implemented}件
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      平均スコア: {userData.achievements.improvementPoints}点
                    </p>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>受講開始: {userData.joinDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* タブナビゲーション */}
      <div className="border-b mb-6">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('progress')}
            className={`py-2 px-4 border-b-2 font-medium ${
              activeTab === 'progress'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            学習進捗
          </button>
          <button
            onClick={() => setActiveTab('kaizen')}
            className={`py-2 px-4 border-b-2 font-medium ${
              activeTab === 'kaizen'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            改善活動
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`py-2 px-4 border-b-2 font-medium ${
              activeTab === 'achievements'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            獲得バッジ
          </button>
        </nav>
      </div>

      {/* タブコンテンツ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'progress' && (
            <>
              {/* 完了したコース */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">完了したコース</h2>
                <div className="space-y-4">
                  {completedCourses.map(course => (
                    <div key={course.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{course.title}</h3>
                          <p className="text-sm text-gray-600">カテゴリー: {course.category}</p>
                        </div>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          スコア: {course.score}点
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>完了日: {course.completedDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === 'kaizen' && (
            <>
              {/* 改善活動履歴 */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">KAIZEN履歴</h2>
                <div className="space-y-4">
                  {kaizenHistory.map(kaizen => (
                    <div key={kaizen.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${
                          kaizen.status === 'implemented' 
                            ? 'bg-green-100' 
                            : 'bg-yellow-100'
                        }`}>
                          {kaizen.status === 'implemented' ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <ChartBar className="h-5 w-5 text-yellow-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{kaizen.title}</h3>
                              <p className="text-sm text-gray-600">
                                カテゴリー: {kaizen.category}
                              </p>
                            </div>
                            <span className={`text-sm px-2 py-1 rounded-full ${
                              kaizen.status === 'implemented'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {kaizen.status === 'implemented' ? '社長賞' : '優良賞'}
                            </span>
                          </div>
                          {kaizen.impact && (
                            <p className="text-sm text-green-600 mt-2">
                              改善効果: {kaizen.impact}
                            </p>
                          )}
                          {kaizen.description && (
                            <p className="text-sm text-gray-600 mt-2">
                              {kaizen.description}
                            </p>
                          )}
                          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                            <span>{kaizen.date}</span>
                            {kaizen.likes && (
                              <span className="flex items-center gap-1">
                                👍 {kaizen.likes}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === 'achievements' && (
            <>
              {/* 獲得バッジ */}
              <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">獲得バッジ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.achievements.badges.map(badge => (
                    <div key={badge.id} className="border rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{badge.icon}</span>
                        <div>
                          <h3 className="font-medium">{badge.name}</h3>
                          <p className="text-sm text-gray-600">{badge.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 活動サマリー */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">今月の活動サマリー</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>KAIZEN件数</span>
                  <span>{userData.achievements.kaizens.submitted}件</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${(userData.achievements.kaizens.implemented / userData.achievements.kaizens.submitted) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  うち{userData.achievements.kaizens.implemented}件が提出済み
                </p>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  <span>平均スコア</span>
                </div>
                <span className="font-medium">{userData.achievements.improvementPoints}点</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <span>完了コース</span>
                </div>
                <span className="font-medium">{userData.achievements.completedCourses}件</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>総学習時間</span>
                </div>
                <span className="font-medium">{userData.achievements.totalLearningHours}時間</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyPage;