// src/App.js
import React, { useState } from 'react';
import Login from './pages/Login';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// ユーザーページのインポート
import UserDashboard from './pages/user/UserDashboard';
import CourseSearch from './pages/user/CourseSearch';
import MyPage from './pages/user/MyPage';
import CourseView from './pages/user/CourseView';
import Progress from './pages/user/Progress';

// 管理者ページのインポート
import AdminDashboard from './pages/admin/Dashboard';
import MaterialsIndex from './pages/admin/Materials/index';
import CourseEdit from './pages/admin/Materials/CourseEdit';
import UsersIndex from './pages/admin/Users/index';
import UserProgress from './pages/admin/Users/UserProgress';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    if (user.role === 'admin') {
      switch (currentPage) {
        case 'dashboard':
          return <AdminDashboard />;
        case 'materials':
          return <MaterialsIndex onCourseEdit={(course) => {
            setSelectedCourse(course);
            setCurrentPage('course-edit');
          }} />;
        case 'course-edit':
          return <CourseEdit 
            course={selectedCourse}
            onBack={() => setCurrentPage('materials')}
          />;
        case 'users':
          return <UsersIndex onViewProgress={(userId) => {
            setCurrentPage('user-progress');
          }} />;
        case 'user-progress':
          return <UserProgress onBack={() => setCurrentPage('users')} />;
        default:
          return <AdminDashboard />;
      }
    }

    switch (currentPage) {
      case 'dashboard':
        return <UserDashboard onCourseSelect={(course) => {
          setSelectedCourse(course);
          setCurrentPage('course-view');
        }} />;
      case 'course-search':
        return <CourseSearch onCourseSelect={(course) => {
          setSelectedCourse(course);
          setCurrentPage('course-view');
        }} />;
      case 'course-view':
        return <CourseView course={selectedCourse} onBack={() => setCurrentPage('dashboard')} />;
      case 'my-page':
        return <MyPage />;
      case 'progress':
        return <Progress />;
      default:
        return <UserDashboard />;
    }
  };

  const getNavigationItems = () => {
    if (user.role === 'admin') {
      return [
        { id: 'dashboard', label: 'ダッシュボード' },
        { id: 'materials', label: '教材管理' },
        { id: 'users', label: 'ユーザー管理' }
      ];
    }

    return [
      { id: 'dashboard', label: 'ホーム' },
      { id: 'course-search', label: 'コースを探す' },
      { id: 'my-page', label: 'マイページ' },
      { id: 'progress', label: '学習進捗' }
    ];
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F2F0EE' }}>
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        userRole={user.role}
        navigationItems={getNavigationItems()}
      />
      <div className="flex-1 ml-64">
        <main className="p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
