// src/pages/user/Progress.jsx
import React from 'react';
import { 
  TrendingUp,
  Clock,
  Target,
  Award,
  CheckCircle,
  Lightbulb,
  BarChart2,
  Users,
  Star,
  ArrowRight
} from 'lucide-react';

const Progress = () => {
  // 進捗データ
  const progressData = {
    summary: {
      totalLearningHours: 45,
      completedCourses: 3,
      improvementPoints: 90,
      implementedKaizens: 30
    },
    skillProgress: {
      '5S活動': 85,
      'ムダ削減': 70,
      '品質管理': 60,
      '問題解決': 75,
      '標準化': 80
    },
    monthlyProgress: [
      { month: '1月', hours: 12, kaizens: 2 },
      { month: '2月', hours: 15, kaizens: 1 },
      { month: '3月', hours: 18, kaizens: 2 }
    ],
    recentAchievements: [
      {
        id: 1,
        type: 'kaizen',
        title: '工具置き場の改善',
        date: '2024-03-20',
        impact: '作業時間20%削減',
        points: 100
      },
      {
        id: 2,
        type: 'course',
        title: '5S活動の基礎と実践',
        date: '2024-03-15',
        score: 92,
        points: 50
      },
      {
        id: 3,
        type: 'kaizen',
        title: '日次点検シートの改善',
        date: '2024-03-10',
        impact: '記録時間30分短縮',
        points: 80
      }
    ],
    implementationResults: [
      {
        title: '作業エリアの5S改善',
        before: '工具の探索に5分',
        after: '探索時間1分以内',
        impact: '80%時間削減'
      },
      {
        title: '在庫管理の効率化',
        before: '過剰在庫20%',
        after: '適正在庫維持',
        impact: 'コスト15%削減'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* 進捗サマリー */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">総学習時間</p>
              <p className="text-2xl font-bold">{progressData.summary.totalLearningHours}時間</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">完了コース</p>
              <p className="text-2xl font-bold">{progressData.summary.completedCourses}個</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600">平均スコア</p>
              <p className="text-2xl font-bold">{progressData.summary.improvementPoints}点</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">総KAIZEN件数</p>
              <p className="text-2xl font-bold">{progressData.summary.implementedKaizens}件</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* スキル習熟度 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">スキル習熟度</h2>
            <div className="space-y-4">
              {Object.entries(progressData.skillProgress).map(([skill, level]) => (
                <div key={skill}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{skill}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`rounded-full h-2 ${
                        level >= 80 ? 'bg-green-500' :
                        level >= 60 ? 'bg-blue-500' :
                        level >= 40 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 月別活動実績 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">月別受講件数</h2>
            <div className="space-y-4">
              {progressData.monthlyProgress.map((month, index) => (
                <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{month.month}</span>
                    <span className="text-sm text-gray-600">
                      完了したコース {month.kaizens}件
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">学習時間</div>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2"
                          style={{ width: `${(month.hours / 20) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{month.hours}時間</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 最近の実績 */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">最近の受講履歴</h2>
            <div className="space-y-4">
              {progressData.recentAchievements.map(achievement => (
                <div 
                  key={achievement.id}
                  className="flex items-start gap-3 border-b last:border-b-0 pb-4 last:pb-0"
                >
                  <div className={`p-2 rounded-lg ${
                    achievement.type === 'kaizen' 
                      ? 'bg-green-100' 
                      : 'bg-blue-100'
                  }`}>
                    {achievement.type === 'kaizen' ? (
                      <TrendingUp className={`h-5 w-5 ${
                        achievement.type === 'kaizen' 
                          ? 'text-green-600' 
                          : 'text-blue-600'
                      }`} />
                    ) : (
                      <Star className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        {achievement.score && (
                          <p className="text-sm text-blue-600">スコア: {achievement.score}点</p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* アドバイス */}
          <section className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">KAIZENアドバイス</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-sm text-gray-700">
                  品質管理のスキルをさらに向上させることで、より効果的な改善活動が可能になります。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart2 className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-sm text-gray-700">
                  データに基づく改善提案を増やすことで、より説得力のある改善活動が期待できます。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-sm text-gray-700">
                  チームメンバーとの協働による改善活動を推進することで、より大きな成果が期待できます。
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Progress;