// src/components/layout/Header.jsx
import React from 'react';
import { ChevronDown, Bell } from 'lucide-react';

const Header = ({ currentPage, userName }) => {
  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'ダッシュボード';
      case 'materials': return '教材管理';
      case 'users': return 'ユーザー管理';
      case 'progress': return '進捗管理';
      case 'course': return 'コース視聴';
      default: return 'ダッシュボード';
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
      <div className="flex justify-between items-center px-8 py-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {getPageTitle()}
        </h2>
        <div className="flex items-center gap-6">
          {/* 通知ベル */}
          <button className="relative text-gray-600 hover:text-gray-900">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          {/* ユーザーメニュー */}
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 py-2 px-3 rounded-lg transition-colors">
            <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="rounded-full w-8 h-8 border-2 border-gray-200"
            />
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{userName}</p>
              <p className="text-xs text-gray-500">管理者</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;