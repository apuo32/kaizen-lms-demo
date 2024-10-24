// src/pages/admin/Users/index.jsx
import React, { useState } from 'react';
import { 
  UserPlus, 
  Download, 
  Upload,
  Users as UsersIcon
} from 'lucide-react';
import UserTable from '../../../components/admin/UserTable';

const UsersIndex = () => {
  // モーダルの状態管理
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // 統計情報
  const userStats = {
    totalUsers: 156,
    activeUsers: 142,
    newUsersThisMonth: 8,
    averageCompletion: 68
  };

  // 進捗確認ハンドラー
  const handleViewProgress = (userId) => {
    // 進捗確認ページへの遷移
    console.log(`Viewing progress for user ${userId}`);
    // window.location.href = `/admin/users/${userId}/progress`;
  };

  // CSVインポートハンドラー
  const handleCsvImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      // CSVインポート処理
      console.log('Importing CSV:', file.name);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ヘッダー */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">ユーザー管理</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="file"
              accept=".csv"
              className="hidden"
              id="csv-upload"
              onChange={handleCsvImport}
            />
            <label
              htmlFor="csv-upload"
              className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50 cursor-pointer"
            >
              <Upload className="h-5 w-5" />
              CSVインポート
            </label>
          </div>
          <button 
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50"
            onClick={() => {
              // CSVエクスポート処理
              console.log('Exporting user data to CSV');
            }}
          >
            <Download className="h-5 w-5" />
            CSVエクスポート
          </button>
          <button
            onClick={() => setShowAddUserModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <UserPlus className="h-5 w-5" />
            ユーザー追加
          </button>
        </div>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">総ユーザー数</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.totalUsers}名</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <UsersIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-green-600">
              今月 +{userStats.newUsersThisMonth}名
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">アクティブユーザー</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.activeUsers}名</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <UserPlus className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              アクティブ率 {Math.round((userStats.activeUsers / userStats.totalUsers) * 100)}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">平均完了率</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.averageCompletion}%</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Download className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-yellow-600 rounded-full h-2"
              style={{ width: `${userStats.averageCompletion}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600">今月の新規ユーザー</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.newUsersThisMonth}名</p>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg">
              <UserPlus className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-600">
              先月比 +12%
            </p>
          </div>
        </div>
      </div>

      {/* ユーザーテーブル */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <UserTable onViewProgress={handleViewProgress} />
        </div>
      </div>

      {/* CSVインポートのガイドライン */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-800 mb-2">CSVインポートについて</h3>
        <p className="text-sm text-blue-600">
          CSVファイルには以下の列が必要です：名前、メールアドレス、部署、役職
        </p>
        <a 
          href="#" 
          className="text-sm text-blue-800 hover:underline mt-1 inline-block"
        >
          テンプレートをダウンロード
        </a>
      </div>
    </div>
  );
};

export default UsersIndex;