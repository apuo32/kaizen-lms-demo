// src/pages/admin/Users/UserProgress.jsx
import React from 'react';
import { 
  ArrowLeft,
  Clock,
  BookOpen,
  Award,
  Calendar,
  BarChart,
  CheckCircle,
  Timer,
  AlertCircle
} from 'lucide-react';

const UserProgress = () => {
  // ユーザー情報（実際のアプリケーションではAPIから取得）
  const userData = {
    id: 1,
    name: '山田 太郎',
    email: 'yamada.t@example.com',
    department: '製造部',
    position: '製造課長',
    joinDate: '2024-01-15',
    totalLearningTime: 24.5,
    lastAccess: '2024-03-22',
    completionRate: 75,
    activeDays: 18
  };

  // コース進捗データ
  const courseProgress = [
    {
      id: 1,
      title: '5S活動の基礎と実践',
      progress: 100,
      completedAt: '2024-02-15',
      score: 92,
      totalTime: '4時間',
      status: 'completed'
    },
    {
      id: 2,
      title: '生産現場のムダ削減',
      progress: 60,
      lastAccess: '2024-03-20',
      totalTime: '3時間',
      status: 'in_progress'
    },
    {
      id: 3,
      title: '品質管理の実践手法',
      progress: 0,
      enrolledAt: '2024-03-21',
      totalTime: '5時間',
      status: 'not_started'
    }
  ];

  // 月別学習時間データ
  const monthlyLearningData = [
    { month: '1月', hours: 8 },
    { month: '2月', hours: 12 },
    { month: '3月', hours: 4.5 }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ヘッダー */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            ユーザー一覧に戻る
          </button>
        </div>
      </div>

      {/* ユーザー情報 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl font-medium text-gray-600">
                {userData.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-gray-600">{userData.email}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>最終アクセス: {userData.lastAccess}</p>
                <p>登録日: {userData.joinDate}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
              <span>{userData.department}</span>
              <span>{userData.position}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 学習統計 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3">
            <Clock className="h-10 w-10 text-blue-500" />
            <div>
              <p className="text-gray-600">総学習時間</p>
              <p className="text-2xl font-bold">{userData.totalLearningTime}時間</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-10 w-10 text-green-500" />
            <div>
              <p className="text-gray-600">完了率</p>
              <p className="text-2xl font-bold">{userData.completionRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3">
            <Calendar className="h-10 w-10 text-purple-500" />
            <div>
              <p className="text-gray-600">学習実施日数</p>
              <p className="text-2xl font-bold">{userData.activeDays}日</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3">
            <Award className="h-10 w-10 text-yellow-500" />
            <div>
              <p className="text-gray-600">完了コース</p>
              <p className="text-2xl font-bold">
                {courseProgress.filter(course => course.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* コース進捗 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">コース進捗状況</h2>
        <div className="space-y-6">
          {courseProgress.map(course => (
            <div key={course.id} className="border-b last:border-b-0 pb-6 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1">
                      <Timer className="h-4 w-4" />
                      {course.totalTime}
                    </span>
                    {course.status === 'completed' && (
                      <span className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        スコア: {course.score}点
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  {course.status === 'completed' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      完了
                    </span>
                  )}
                  {course.status === 'in_progress' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <BarChart className="h-4 w-4 mr-1" />
                      学習中
                    </span>
                  )}
                  {course.status === 'not_started' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      未開始
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>進捗状況</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${
                      course.status === 'completed' 
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              {course.status === 'completed' && (
                <p className="text-sm text-gray-600 mt-2">
                  完了日: {course.completedAt}
                </p>
              )}
              {course.status === 'in_progress' && (
                <p className="text-sm text-gray-600 mt-2">
                  最終アクセス: {course.lastAccess}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 月別学習時間 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">月別学習時間</h2>
        <div className="h-64">
          {/* ここにRechartsなどを使用してグラフを表示 */}
          <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center text-gray-500">
            {monthlyLearningData.map((data, index) => (
              <div key={index} className="flex flex-col items-center mx-4">
                <div className="h-32 w-16 bg-blue-100 rounded-t relative">
                  <div 
                    className="absolute bottom-0 w-full bg-blue-500 rounded-t"
                    style={{ height: `${(data.hours / 12) * 100}%` }}
                  />
                </div>
                <div className="text-sm mt-2">{data.month}</div>
                <div className="text-sm text-gray-600">{data.hours}時間</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress;