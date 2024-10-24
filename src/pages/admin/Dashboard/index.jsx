// src/pages/admin/Dashboard/index.jsx
import React from 'react';
import { 
  Users, 
  BookOpen, 
  Clock,
  Award,
  TrendingUp,
  UserCheck,
  BarChart2,
  AlertCircle
} from 'lucide-react';

const DashboardIndex = () => {
  // 概要統計データ
  const summaryStats = {
    totalUsers: 156,
    activeUsers: 142,
    totalCourses: 12,
    completionRate: 68,
    averageLearningTime: 4.2,
    totalLearningHours: 1240
  };

  // 人気コースデータ
  const popularCourses = [
    {
      id: 1,
      title: '5S活動の基礎と実践',
      enrollments: 89,
      completionRate: 75,
      averageRating: 4.5,
      category: '基礎'
    },
    {
      id: 2,
      title: '生産現場のムダ削減',
      enrollments: 76,
      completionRate: 68,
      averageRating: 4.3,
      category: '実践'
    },
    {
      id: 3,
      title: '品質管理の実践手法',
      enrollments: 65,
      completionRate: 62,
      averageRating: 4.4,
      category: '品質管理'
    }
  ];

  // 最近の活動
  const recentActivities = [
    {
      id: 1,
      type: 'course_completion',
      user: '佐藤健一',
      course: '5S活動の基礎と実践',
      date: '2024-03-22 15:30',
      score: 92
    },
    {
      id: 2,
      type: 'new_enrollment',
      user: '田中美咲',
      course: '生産現場のムダ削減',
      date: '2024-03-22 14:15'
    },
    {
      id: 3,
      type: 'high_score',
      user: '山本次郎',
      course: '品質管理の実践手法',
      date: '2024-03-22 11:20',
      score: 98
    }
  ];

  // アラートデータ
  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: '3名のユーザーが30日以上ログインしていません',
      action: 'ユーザー一覧を確認'
    },
    {
      id: 2,
      type: 'info',
      message: '新しいコースの承認が2件待機中です',
      action: 'コースを確認'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ダッシュボードヘッダー */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ダッシュボード</h1>
      </div>

      {/* アラート */}
      {alerts.map(alert => (
        <div 
          key={alert.id}
          className={`flex justify-between items-center p-4 rounded-lg ${
            alert.type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <AlertCircle className={`h-5 w-5 ${
              alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
            }`} />
            <span className={`${
              alert.type === 'warning' ? 'text-yellow-700' : 'text-blue-700'
            }`}>
              {alert.message}
            </span>
          </div>
          <button className={`text-sm font-medium ${
            alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
          } hover:underline`}>
            {alert.action}
          </button>
        </div>
      ))}

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">総ユーザー数</p>
              <h3 className="text-2xl font-bold">{summaryStats.totalUsers}名</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">アクティブユーザー</span>
            <span className="text-green-600">{summaryStats.activeUsers}名</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">総学習時間</p>
              <h3 className="text-2xl font-bold">{summaryStats.totalLearningHours}時間</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">1人あたりの平均</span>
            <span className="text-green-600">{summaryStats.averageLearningTime}時間/月</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">平均完了率</p>
              <h3 className="text-2xl font-bold">{summaryStats.completionRate}%</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-yellow-600 rounded-full h-2"
              style={{ width: `${summaryStats.completionRate}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 人気コース */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">人気のコース</h2>
            <div className="space-y-4">
              {popularCourses.map(course => (
                <div key={course.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <span className="text-sm text-gray-500">{course.category}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {course.enrollments}名が受講
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>完了率</span>
                        <span>{course.completionRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 rounded-full h-2"
                          style={{ width: `${course.completionRate}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`h-4 w-4 ${
                              star <= course.averageRating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {course.averageRating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 最近の活動 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">最近の活動</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'course_completion'
                    ? 'bg-green-100'
                    : activity.type === 'new_enrollment'
                    ? 'bg-blue-100'
                    : 'bg-yellow-100'
                }`}>
                  {activity.type === 'course_completion' ? (
                    <Award className={`h-5 w-5 text-green-600`} />
                  ) : activity.type === 'new_enrollment' ? (
                    <UserCheck className={`h-5 w-5 text-blue-600`} />
                  ) : (
                    <TrendingUp className={`h-5 w-5 text-yellow-600`} />
                  )}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>
                    {activity.type === 'course_completion' && ' がコースを完了'}
                    {activity.type === 'new_enrollment' && ' が新規受講開始'}
                    {activity.type === 'high_score' && ' が高評価を達成'}
                  </p>
                  <p className="text-sm text-gray-600">{activity.course}</p>
                  {activity.score && (
                    <p className="text-sm text-gray-600">スコア: {activity.score}点</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;