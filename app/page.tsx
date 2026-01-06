'use client';

import React from 'react';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAccessibility } from '@/contexts/AccessibilityContext';

// Icon components
const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const AcademicIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TeacherIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoneyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FoodIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const sections = [
  { name: 'Основные сведения', href: '/sveden/common', Icon: BuildingIcon, description: 'Информация об организации' },
  { name: 'Структура и органы управления', href: '/sveden/struct', Icon: BuildingIcon, description: 'Структурные подразделения' },
  { name: 'Документы', href: '/sveden/document', Icon: DocumentIcon, description: 'Уставные документы' },
  { name: 'Образование', href: '/sveden/education', Icon: BookIcon, description: 'Образовательные программы' },
  { name: 'Образовательные стандарты', href: '/sveden/eduStandarts', Icon: AcademicIcon, description: 'ФГОС и требования' },
  { name: 'Руководство', href: '/sveden/managers', Icon: UsersIcon, description: 'Руководящий состав' },
  { name: 'Педагогический состав', href: '/sveden/employees', Icon: TeacherIcon, description: 'Преподаватели' },
  { name: 'Материально-техническое обеспечение', href: '/sveden/objects', Icon: BuildingIcon, description: 'Оснащение и доступная среда' },
  { name: 'Стипендии и меры поддержки', href: '/sveden/grants', Icon: MoneyIcon, description: 'Поддержка обучающихся' },
  { name: 'Платные образовательные услуги', href: '/sveden/paid_edu', Icon: CardIcon, description: 'Платные услуги' },
  { name: 'Финансово-хозяйственная деятельность', href: '/sveden/budget', Icon: ChartIcon, description: 'Финансовая информация' },
  { name: 'Вакантные места для приема', href: '/sveden/vacant', Icon: ClipboardIcon, description: 'Свободные места' },
  { name: 'Международное сотрудничество', href: '/sveden/inter', Icon: GlobeIcon, description: 'Международные связи' },
  { name: 'Организация питания', href: '/sveden/catering', Icon: FoodIcon, description: 'Условия питания' },
];

export default function Home() {
  const { colorScheme } = useAccessibility();

  // Theme classes - EXPLICIT colors for each theme
  const getThemeClasses = () => {
    if (colorScheme === 'black') {
      return 'bg-black text-white';
    }
    if (colorScheme === 'white') {
      return 'bg-white text-black';
    }
    if (colorScheme === 'blue') {
      return 'bg-blue-900 text-yellow-300';
    }
    // NORMAL theme - explicit colors!
    return 'bg-gray-50 text-gray-900';
  };

  const getHeroClasses = () => {
    if (colorScheme === 'black') {
      return 'bg-gray-900 text-white';
    }
    if (colorScheme === 'white') {
      return 'bg-white text-black border-b-4 border-black';
    }
    if (colorScheme === 'blue') {
      return 'bg-blue-950 text-yellow-300 border-b-4 border-yellow-500';
    }
    return 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white';
  };

  const getStatsClasses = () => {
    if (colorScheme === 'black') {
      return 'bg-gray-900 border-gray-700 text-white';
    }
    if (colorScheme === 'white') {
      return 'bg-white border-black text-black';
    }
    if (colorScheme === 'blue') {
      return 'bg-blue-900 border-yellow-600 text-yellow-300';
    }
    return 'bg-white border-gray-200 text-gray-900';
  };

  const getCardClasses = () => {
    if (colorScheme === 'black') {
      return 'bg-gray-900 border-gray-700 hover:border-gray-500 text-white';
    }
    if (colorScheme === 'white') {
      return 'bg-white border-black hover:border-gray-700 text-black';
    }
    if (colorScheme === 'blue') {
      return 'bg-blue-800 border-yellow-600 hover:border-yellow-400 text-yellow-300';
    }
    return 'bg-white border-gray-200 hover:border-primary-300 text-gray-900';
  };

  const getSectionTitleClasses = () => {
    if (colorScheme === 'black') {
      return 'text-white';
    }
    if (colorScheme === 'white') {
      return 'text-black';
    }
    if (colorScheme === 'blue') {
      return 'text-yellow-300';
    }
    return 'text-gray-900';
  };


  return (
    <div className={getThemeClasses()}>
      <PageContainer>
        {/* Hero Section - Premium Design - Updated */}
        <div
          className={`${getHeroClasses()} relative overflow-hidden`}
          style={{
            backgroundImage: 'url(/images/educamp/hero/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary-600/80"></div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl"></div>
                  <div className="relative w-24 h-24 bg-white/15 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">EduCamp</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light opacity-95">
                Российское образование во Вьетнаме
              </p>
              <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light opacity-90">
                Школа и детский сад для детей от 4 до 12 лет
              </p>

              {/* Contact Info Cards */}
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

                <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">г. Нячанг, Вьетнам</span>
                </div>

                <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">Уточняется</span>
                </div>

                <div className="group flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="font-medium">@Educampvietnam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`${getStatsClasses()} border-b shadow-sm`}>
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                <div className="text-5xl font-bold text-primary-700 mb-2">4-12</div>
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Возраст (лет)</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                <div className="text-5xl font-bold text-primary-700 mb-2">15</div>
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Макс. в классе</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                <div className="text-5xl font-bold text-primary-700 mb-2">3</div>
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Программы</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                <div className="text-5xl font-bold text-primary-700 mb-2">3</div>
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Года во Вьетнаме</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div id="sections" className="container mx-auto px-4 py-12 scroll-mt-20">
          <div className="mb-10 text-center">
            <h2 className={`text-4xl font-bold mb-3 ${getSectionTitleClasses()}`}>
              Сведения об образовательной организации
            </h2>
            <p className={`text-lg font-medium max-w-3xl mx-auto ${getSectionTitleClasses()}`}>
              Информация размещена в соответствии с Приказом Рособрнадзора №1493 от 04.08.2023
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => {
              const IconComponent = section.Icon;
              return (
                <Link
                  key={idx}
                  href={section.href}
                  className={`group block ${getCardClasses()} rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden border transform hover:-translate-y-1`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                        <IconComponent />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold mb-2 group-hover:text-primary-700 transition-colors leading-tight">
                          {section.name}
                        </h3>
                        <p className="text-sm leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </PageContainer >
    </div >
  );
}
