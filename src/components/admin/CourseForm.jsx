// src/components/admin/CourseForm.jsx
import React, { useState } from 'react';
import { X, Upload, Plus, Trash2 } from 'lucide-react';

const CourseForm = ({ onSubmit, onCancel, initialData = null }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    category: initialData?.category || 'basic',
    objectives: initialData?.objectives || [''],
    targetAudience: initialData?.targetAudience || '',
    duration: initialData?.duration || '',
    difficulty: initialData?.difficulty || 'beginner',
    videoUrl: initialData?.videoUrl || '',
    thumbnail: initialData?.thumbnail || null,
    status: initialData?.status || 'draft'
  });

  // カテゴリーオプション
  const categories = [
    { value: 'basic', label: '基礎' },
    { value: 'practice', label: '実践' },
    { value: 'quality', label: '品質管理' },
    { value: 'leadership', label: 'リーダーシップ' },
    { value: 'problem-solving', label: '問題解決' },
    { value: 'team-management', label: 'チームマネジメント' }
  ];

  // 難易度オプション
  const difficultyLevels = [
    { value: 'beginner', label: '初級' },
    { value: 'intermediate', label: '中級' },
    { value: 'advanced', label: '上級' }
  ];

  // 学習目標の追加
  const handleAddObjective = () => {
    setFormData({
      ...formData,
      objectives: [...formData.objectives, '']
    });
  };

  // 学習目標の削除
  const handleRemoveObjective = (index) => {
    const newObjectives = formData.objectives.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      objectives: newObjectives
    });
  };

  // 学習目標の更新
  const handleObjectiveChange = (index, value) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = value;
    setFormData({
      ...formData,
      objectives: newObjectives
    });
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }} className="relative">
      {/* ヘッダー部分 - 固定 */}
      <div className="bg-white px-6 py-4 border-b sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {initialData ? 'コースを編集' : '新規コース作成'}
          </h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {initialData ? '更新する' : '作成する'}
            </button>
          </div>
        </div>
      </div>

      {/* スクロール可能なコンテンツ部分 */}
      <div className="p-6 max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className="space-y-6">
          {/* 基本情報 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                コースタイトル<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="例：5S活動の基礎と実践"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                カテゴリー<span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 動画URL */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              動画URL<span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              value={formData.videoUrl}
              onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="例：https://example.com/video.mp4"
            />
            <p className="text-sm text-gray-500">
              動画ファイルの共有URLを入力してください
            </p>
          </div>

          {/* コース説明 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              コース説明<span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="コースの概要と目的を記載してください"
            />
          </div>

          {/* 学習目標 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              学習目標<span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {formData.objectives.map((objective, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => handleObjectiveChange(index, e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    placeholder="このコースを通じて習得できること"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveObjective(index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddObjective}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <Plus className="h-4 w-4" />
                学習目標を追加
              </button>
            </div>
          </div>

          {/* 対象者と所要時間 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                対象者<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.targetAudience}
                onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="例：製造現場のリーダー、品質管理担当者"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                想定学習時間<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="例：2時間"
              />
            </div>
          </div>

          {/* 難易度とステータス */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                難易度<span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.difficulty}
                onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              >
                {difficultyLevels.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                公開ステータス<span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="draft">下書き</option>
                <option value="published">公開</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CourseForm;