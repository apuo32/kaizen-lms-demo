// src/components/layout/Sidebar.jsx
import React from 'react';
import {
  Layout,
  Video,
  Users,
  BookOpen,
  BarChart,
  Search,
  User,
  LogOut
} from 'lucide-react';
import logo from '../../assets/images/kaizen_logo_color.png';

const Sidebar = ({ currentPage, onPageChange, userRole, navigationItems, onLogout }) => {
  const getIcon = (id) => {
    switch (id) {
      case 'dashboard':
        return BookOpen;
      case 'materials':
        return Video;
      case 'users':
        return Users;
      case 'progress':
        return BarChart;
      case 'course-search':
        return Search;
      case 'my-page':
        return User;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="w-64 h-screen bg-white p-6 fixed top-0 left-0 flex flex-col shadow-xl border-r">
      {/* ロゴとヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LMS Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
            LMS
          </h1>
        </div>
      </div>

      {/* ナビゲーションメニュー */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = getIcon(item.id);
            return (
              <li
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600 font-medium shadow-sm' 
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-orange-500'
                }`}
              >
                <IconComponent className={`h-5 w-5 transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-orange-500'
                    : 'text-gray-400 group-hover:text-orange-400'
                }`} />
                {item.label}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ログアウトボタン */}
      <button
        onClick={onLogout}
        className="flex items-center gap-2 p-3 mt-auto rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
      >
        <LogOut className="h-5 w-5" />
        ログアウト
      </button>

      {/* 下部の装飾 */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="text-xs text-gray-400 text-center">
          &copy; KAIZEN LMS 製作委員会 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;