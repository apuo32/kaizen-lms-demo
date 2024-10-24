// src/components/admin/UserTable.jsx
import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Eye, 
  MoreVertical,
  Mail,
  UserCheck,
  UserX
} from 'lucide-react';

const UserTable = ({ onViewProgress }) => {
  // 状態管理
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // サンプルユーザーデータ
  const users = [
    {
      id: 1,
      name: '山田 太郎',
      email: 'yamada.t@example.com',
      department: '製造部',
      position: '製造課長',
      enrolledCourses: 3,
      completedCourses: 2,
      lastAccess: '2024-03-22',
      status: 'active'
    },
    {
      id: 2,
      name: '鈴木 花子',
      email: 'suzuki.h@example.com',
      department: '品質管理部',
      position: '主任',
      enrolledCourses: 4,
      completedCourses: 4,
      lastAccess: '2024-03-21',
      status: 'active'
    },
    {
      id: 3,
      name: '佐藤 健一',
      email: 'sato.k@example.com',
      department: '生産技術部',
      position: '課長',
      enrolledCourses: 2,
      completedCourses: 1,
      lastAccess: '2024-03-20',
      status: 'inactive'
    }
  ];

  // 部署リスト
  const departments = [
    { value: 'all', label: 'すべての部署' },
    { value: 'manufacturing', label: '製造部' },
    { value: 'quality', label: '品質管理部' },
    { value: 'engineering', label: '生産技術部' },
    { value: 'management', label: '管理部' }
  ];

  // ステータスオプション
  const statusOptions = [
    { value: 'all', label: 'すべてのステータス' },
    { value: 'active', label: 'アクティブ' },
    { value: 'inactive', label: '非アクティブ' }
  ];

  // 検索とフィルタリングの適用
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = 
      selectedDepartment === 'all' || user.department === selectedDepartment;
    
    const matchesStatus = 
      selectedStatus === 'all' || user.status === selectedStatus;

    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-4">
      {/* 検索・フィルターバー */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="ユーザーを検索..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            {departments.map(dept => (
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            {statusOptions.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ユーザーテーブル */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ユーザー
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                所属・役職
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                コース進捗
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                最終アクセス
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ステータス
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                アクション
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-600 font-medium">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.department}</div>
                  <div className="text-sm text-gray-500">{user.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {user.completedCourses}/{user.enrolledCourses} コース完了
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ 
                        width: `${(user.completedCourses / user.enrolledCourses) * 100}%`
                      }}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.lastAccess}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? 'アクティブ' : '非アクティブ'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => onViewProgress(user.id)}
                      className="text-blue-600 hover:text-blue-900"
                      title="進捗を確認"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      className="text-gray-600 hover:text-gray-900"
                      title="メール送信"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                    <button
                      className={`${
                        user.status === 'active' 
                          ? 'text-red-600 hover:text-red-900'
                          : 'text-green-600 hover:text-green-900'
                      }`}
                      title={user.status === 'active' ? 'アカウントを無効化' : 'アカウントを有効化'}
                    >
                      {user.status === 'active' ? (
                        <UserX className="h-5 w-5" />
                      ) : (
                        <UserCheck className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 該当ユーザーがいない場合 */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <div className="text-gray-500 mb-2">
            該当するユーザーが見つかりません
          </div>
          <div className="text-sm text-gray-400">
            検索条件を変更してお試しください
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;