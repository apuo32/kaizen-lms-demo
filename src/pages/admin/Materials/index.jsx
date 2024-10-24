// src/pages/admin/Materials/index.jsx
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  Filter,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import CourseForm from '../../../components/admin/CourseForm';

const MaterialsIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // サンプルデータ
  const courses = [
    {
      id: 1,
      title: '5S活動の基礎と実践',
      description: '整理・整頓・清掃・清潔・躾の基本から実践的な導入方法まで学べます。',
      category: '基礎',
      status: 'published',
      students: 125,
      completionRate: 68,
      updatedAt: '2024-03-20'
    },
    {
      id: 2,
      title: '生産現場のムダ削減',
      description: '7つのムダの特定と改善アプローチについて解説します。',
      category: '実践',
      status: 'published',
      students: 98,
      completionRate: 72,
      updatedAt: '2024-03-21'
    },
    {
      id: 3,
      title: '品質管理の実践手法',
      description: 'QCサークル活動の進め方と問題解決手法を学びます。',
      category: '品質管理',
      status: 'draft',
      students: 0,
      completionRate: 0,
      updatedAt: '2024-03-22'
    },
    {
      id: 4,
      title: '現場リーダーのためのカイゼン推進',
      description: 'チーム主導のカイゼン活動の進め方と成果の出し方。',
      category: 'リーダーシップ',
      status: 'published',
      students: 75,
      completionRate: 55,
      updatedAt: '2024-03-19'
    }
  ];

  const handleEditClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleNewCourseClick = () => {
    setSelectedCourse(null);
    setShowModal(true);
  };

  const handleDeleteClick = (course) => {
    if (window.confirm(`「${course.title}」を削除してもよろしいですか？`)) {
      console.log(`Deleting course: ${course.id}`);
      // 削除処理をここに実装
    }
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'all' || course.category === selectedCategory;
      const matchesStatus = 
        selectedStatus === 'all' || course.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus, courses]);

  const CourseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-screen">
        <CourseForm 
          onSubmit={(formData) => {
            console.log('Form submitted:', formData);
            setShowModal(false);
            setSelectedCourse(null);
          }}
          onCancel={() => {
            setShowModal(false);
            setSelectedCourse(null);
          }}
          initialData={selectedCourse}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ヘッダー部分 */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">教材管理</h1>
        <button
          onClick={handleNewCourseClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          新規コース作成
        </button>
      </div>

      {/* 検索・フィルターバー */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="コースを検索..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">すべてのカテゴリー</option>
            <option value="基礎">基礎</option>
            <option value="実践">実践</option>
            <option value="品質管理">品質管理</option>
            <option value="リーダーシップ">リーダーシップ</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">すべてのステータス</option>
            <option value="published">公開中</option>
            <option value="draft">下書き</option>
          </select>
        </div>
      </div>

      {/* コース一覧テーブル */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                コース名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                カテゴリー
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                受講者数
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                完了率
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                最終更新
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                アクション
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCourses.map(course => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{course.title}</div>
                  <div className="text-sm text-gray-500">{course.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {course.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    course.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.status === 'published' ? '公開中' : '下書き'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.students}名
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.completionRate}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {course.updatedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button 
                      className="text-blue-600 hover:text-blue-900"
                      onClick={() => {alert('実際には動画視聴ページに遷移します');}}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-900"
                      onClick={() => handleEditClick(course)}
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteClick(course)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* モーダルの表示 */}
      {showModal && <CourseModal />}
    </div>
  );
};

export default MaterialsIndex;
