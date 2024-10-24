// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course, onClick, userRole }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>進捗</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 rounded-full h-2" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        {userRole === 'admin' && (
          <div className="flex justify-between text-sm text-gray-600">
            <span>受講者数: {course.totalStudents}</span>
            <span>完了者数: {course.completed}</span>
          </div>
        )}
        <button 
          onClick={() => onClick(course)}
          className="w-full bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200"
        >
          {userRole === 'admin' ? 'コースを編集' : 'コースを受講'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;