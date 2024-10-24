// src/pages/user/CourseView.jsx
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  PlayCircle, 
  PauseCircle, 
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  FileText,
  Download,
  Lightbulb,
  User,
  Target
} from 'lucide-react';

const CourseView = ({ onBack }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // コースデータ
  const course = {
    id: 1,
    title: '5S活動の基礎と実践',
    description: '整理・整頓・清掃・清潔・躾の基本を学び、職場の生産性向上を実現します。',
    instructor: {
      name: '山田 清一',
      position: '生産管理部長',
      experience: '製造現場での改善活動30年'
    },
    lessons: [
      {
        id: 1,
        title: '5Sの基本概念と重要性',
        duration: '15分',
        type: 'video',
        completed: true,
        points: [
          '5Sの定義と各要素の説明',
          '製造現場における5Sの重要性',
          '改善活動の基盤としての5S'
        ],
        materials: [
          { type: 'pdf', name: '5Sチェックリスト', size: '1.2MB' },
          { type: 'pdf', name: '改善事例集', size: '2.4MB' }
        ]
      },
      {
        id: 2,
        title: '整理・整頓の実践手法',
        duration: '20分',
        type: 'video',
        completed: true,
        points: [
          '不要物の特定と廃棄基準',
          '置き場管理と見える化',
          '作業効率向上のための配置'
        ],
        materials: [
          { type: 'pdf', name: '整理・整頓実施手順書', size: '1.5MB' },
          { type: 'excel', name: '在庫管理表テンプレート', size: '500KB' }
        ]
      },
      {
        id: 3,
        title: '清掃・清潔の標準化',
        duration: '18分',
        type: 'video',
        completed: false,
        points: [
          '日常清掃の手順と重点箇所',
          '清掃基準の設定方法',
          '維持管理の仕組みづくり'
        ],
        materials: [
          { type: 'pdf', name: '清掃基準書', size: '1.1MB' },
          { type: 'pdf', name: '点検表テンプレート', size: '800KB' }
        ]
      },
      {
        id: 4,
        title: '躾と継続的な改善活動',
        duration: '25分',
        type: 'practice',
        completed: false,
        points: [
          '規律ある職場づくり',
          '標準作業の定着',
          '継続的な改善の進め方'
        ],
        materials: [
          { type: 'pdf', name: '改善活動計画シート', size: '900KB' },
          { type: 'excel', name: '進捗管理表', size: '600KB' }
        ]
      }
    ],
    practicalTasks: [
      {
        title: '現状分析',
        description: '自職場の5S状況を分析し、課題を特定する',
        duration: '2時間',
        template: '現状分析シート.xlsx'
      },
      {
        title: '改善計画立案',
        description: '特定した課題に対する改善案を作成する',
        duration: '3時間',
        template: '改善計画書.xlsx'
      }
    ]
  };

  const [completedLessons, setCompletedLessons] = useState(
    course.lessons.reduce((acc, lesson) => ({
      ...acc,
      [lesson.id]: lesson.completed
    }), {})
  );

  const VideoPlayer = () => (
    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/407e0lI_pj0?si=koGI2HmngDqNQK5g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );  

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* ヘッダー */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ChevronLeft className="h-5 w-5" />
          コース一覧に戻る
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* ビデオプレイヤー */}
          <VideoPlayer />
          
          {/* レッスン詳細 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {course.lessons[currentLesson].title}
              </h2>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  {course.lessons[currentLesson].duration}
                </span>
              </div>
            </div>

            {/* 学習ポイント */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">このレッスンの学習ポイント</h3>
              <ul className="space-y-2">
                {course.lessons[currentLesson].points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Target className="h-5 w-5 text-blue-500 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 教材ダウンロード */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium mb-3">補助教材</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.lessons[currentLesson].materials.map((material, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">{material.name}</p>
                        <p className="text-sm text-gray-500">{material.size}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 実践課題 */}
          {course.lessons[currentLesson].type === 'practice' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">実践課題</h2>
              <div className="space-y-4">
                {course.practicalTasks.map((task, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        想定所要時間: {task.duration}
                      </span>
                    </div>
                    <button className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Download className="h-4 w-4" />
                      {task.template}をダウンロード
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 講師情報 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">講師紹介</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-gray-600">{course.instructor.position}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {course.instructor.experience}
            </p>
          </div>

          {/* レッスン一覧 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">レッスン一覧</h2>
            <div className="space-y-2">
              {course.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setCurrentLesson(index);
                    setIsPlaying(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-md ${
                    currentLesson === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {completedLessons[lesson.id] ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p className={`font-medium ${
                      currentLesson === index ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {lesson.title}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{lesson.duration}</span>
                      {lesson.type === 'practice' && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                          実践
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 学習の進捗 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">学習の進捗</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>完了状況</span>
                  <span>
                    {Object.values(completedLessons).filter(Boolean).length}/{course.lessons.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2"
                    style={{ 
                      width: `${(Object.values(completedLessons).filter(Boolean).length / course.lessons.length) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;