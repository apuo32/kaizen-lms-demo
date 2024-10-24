// src/pages/user/UserDashboard.jsx
import React from 'react';
import { 
  Clock, 
  BookOpen, 
  Target,
  Award,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

const UserDashboard = ({ onCourseSelect }) => {
  // ユーザーの学習データ
  const userData = {
    stats: {
      totalLearningTime: 12.5,
      completedCourses: 3,
      improvementPoints: 82,
      completionRate: 75
    },
    weeklyGoal: {
      targetHours: 2,
      currentHours: 1.5
    },
    improvements: {
      submitted: 3,
      implemented: 2,
      underReview: 1
    }
  };

  const currentCourses = [
    {
      id: 1,
      title: '5S活動の基礎と実践',
      progress: 60,
      nextLesson: '整理・整頓の具体的手法',
      lastAccessed: '2024-03-22',
      category: '基礎'
    },
    {
      id: 2,
      title: '現場のムダ削減実践',
      progress: 30,
      nextLesson: '7つのムダの特定方法',
      lastAccessed: '2024-03-21',
      category: '実践'
    },
    {
      id: 3,
      title: '品質管理のための統計手法',
      progress: 45,
      nextLesson: 'QC7つ道具の活用方法',
      lastAccessed: '2024-03-19',
      category: '基礎',
      description: 'QC手法を用いて品質管理の基礎と応用を学ぶコース',
    },
    {
      id: 4,
      title: 'リーダーシップ強化のためのコミュニケーション術',
      progress: 80,
      nextLesson: 'フィードバックの技術',
      lastAccessed: '2024-03-20',
      category: '基礎',
      description: 'チームを導くための実践的なコミュニケーションスキルを学びます',
    }
  ];  

  const todaySchedule = [
    {
      time: '14:00',
      type: 'learning',
      title: '5S活動の基礎と実践',
      duration: '30分'
    },
    {
      time: '15:00',
      type: 'kaizen',
      title: '週次カイゼン活動報告',
      duration: '45分'
    }
  ];

  const recentImprovements = [
    {
      id: 1,
      title: '工具置き場の改善',
      status: 'implemented',
      date: '2024-03-20',
      impact: '作業時間20%削減'
    },
    {
      id: 2,
      title: '日次点検シートの改善',
      status: 'under_review',
      date: '2024-03-21',
      department: '製造部'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 今日の学習目標 */}
      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-semibold text-orange-600">今日の学習目標</h2>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-orange-600">
              {userData.weeklyGoal.currentHours}/{userData.weeklyGoal.targetHours}時間
            </p>
            <p className="text-gray-600">週間目標の進捗</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-white rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-full h-2 transition-all"
              style={{ width: `${(userData.weeklyGoal.currentHours / userData.weeklyGoal.targetHours) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 受講中のコース */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">受講中のコース</h2>
              <span className="text-sm text-gray-500">
                {userData.stats.completedCourses}コース完了
              </span>
            </div>
            <div className="space-y-4">
              {currentCourses.map(course => (
                <div key={course.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-800">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        次のレッスン: {course.nextLesson}
                      </p>
                    </div>
                    <span 
                      className={`
                        text-sm px-3 py-1 rounded-full 
                        ${
                          course.category === '基礎' 
                            ? 'bg-green-100 text-green-800' 
                            : course.category === '実践' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-gray-100 text-gray-800'
                        }
                      `}
                    >
                      {course.category}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>進捗状況</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-full h-2" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => onCourseSelect(course)}
                      className="text-orange-600 hover:text-orange-700 flex items-center gap-2 transition-colors duration-200"
                    >
                      学習を続ける
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 学習統計 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">学習の成果</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">総学習時間</span>
                </div>
                <span className="font-medium text-gray-800">{userData.stats.totalLearningTime}時間</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">受講済みコース</span>
                </div>
                <span className="font-medium text-gray-800">{userData.improvements.submitted}件</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-600">平均スコア</span>
                </div>
                <span className="font-medium text-gray-800">{userData.stats.improvementPoints}点</span>
              </div>
            </div>
          </section>

          {/* 今日の予定 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">今日の予定</h2>
            <div className="space-y-4">
              {todaySchedule.map((schedule, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 rounded-lg transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-16 text-sm text-gray-600">
                    {schedule.time}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{schedule.title}</p>
                    <p className="text-sm text-gray-600">{schedule.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;