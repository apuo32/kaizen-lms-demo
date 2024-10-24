// src/pages/admin/Materials/CourseEdit.jsx
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Eye, 
  Save,
  Clock,
  Users,
  Target,
  BookOpen,
  BarChart
} from 'lucide-react';
import CourseForm from '../../../components/admin/CourseForm';

const CourseEdit = () => {
  // 編集中のコースデータ（実際のアプリケーションではAPIから取得）
  const [courseData] = useState({
    id: 1,
    title: '5S活動の基礎と実践',
    description: '整理・整頓・清掃・清潔・躾の基本から実践的な導入方法まで学べます。',
    category: 'basic',
    objectives: [
      '5Sの各要素について正しく理解し説明できるようになる',
      '現場での5S活動の実践方法を習得する',
      '5S活動の導入・推進計画が立案できるようになる'
    ],
    targetAudience: '製造現場のリーダー、5S活動推進担当者',
    duration: '4時間',
    difficulty: 'intermediate',
    thumbnail: null,
    status: 'published',
    stats: {
      totalStudents: 125,
      completionRate: 68,
      averageRating: 4.5,
      totalReviews: 45
    }
  });

  // プレビューモード状態
  const [showPreview, setShowPreview] = useState(false);

  // 保存処理
  const handleSave = (formData) => {
    console.log('Saving course data:', formData);
    // API呼び出しなどの保存処理をここに実装
  };

  // プレビュー表示
  const Preview = () => (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <BookOpen className="h-12 w-12 text-gray-400" />
      </div>

      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
        <p className="text-gray-600">{courseData.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{courseData.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{courseData.difficulty === 'intermediate' ? '中級' : '初級'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">{courseData.stats.totalStudents}名が受講</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-600">完了率 {courseData.stats.completionRate}%</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">学習目標</h2>
          <ul className="space-y-2">
            {courseData.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-600">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">対象者</h2>
          <p className="text-gray-600">{courseData.targetAudience}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            コース一覧に戻る
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              <Eye className="h-5 w-5" />
              {showPreview ? '編集に戻る' : 'プレビュー'}
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Save className="h-5 w-5" />
              保存
            </button>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="bg-white rounded-lg shadow-md">
        {showPreview ? (
          <Preview />
        ) : (
          <CourseForm
            initialData={courseData}
            onSubmit={handleSave}
            onCancel={() => window.history.back()}
          />
        )}
      </div>

      {/* コースの統計情報 */}
      {courseData.status === 'published' && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">コースの統計情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">総受講者数</div>
              <div className="text-2xl font-bold text-gray-900">
                {courseData.stats.totalStudents}名
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">完了率</div>
              <div className="text-2xl font-bold text-gray-900">
                {courseData.stats.completionRate}%
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">平均評価</div>
              <div className="text-2xl font-bold text-gray-900">
                {courseData.stats.averageRating}/5.0
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">レビュー数</div>
              <div className="text-2xl font-bold text-gray-900">
                {courseData.stats.totalReviews}件
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseEdit;