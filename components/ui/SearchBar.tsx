'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SearchResult {
    title: string;
    url: string;
    description: string;
}

const searchableContent: SearchResult[] = [
    {
        title: 'Основные сведения',
        url: '/sveden/common',
        description: 'Информация об организации, адрес, телефон, email, учредитель, режим работы'
    },
    {
        title: 'Структура и органы управления',
        url: '/sveden/struct',
        description: 'Структурные подразделения, органы управления образовательной организацией'
    },
    {
        title: 'Документы',
        url: '/sveden/document',
        description: 'Устав, лицензия, свидетельство об аккредитации, локальные нормативные акты, правила приема'
    },
    {
        title: 'Образование',
        url: '/sveden/education',
        description: 'Образовательные программы, учебные планы, календарный график, методические материалы, численность обучающихся'
    },
    {
        title: 'Образовательные стандарты',
        url: '/sveden/eduStandarts',
        description: 'ФГОС, Федеральные государственные образовательные стандарты, требования к образованию'
    },
    {
        title: 'Руководство',
        url: '/sveden/managers',
        description: 'Руководитель, директор, заместители директора, руководящий состав'
    },
    {
        title: 'Педагогический состав',
        url: '/sveden/employees',
        description: 'Преподаватели, учителя, педагоги, квалификация, образование, стаж работы'
    },
    {
        title: 'Материально-техническое обеспечение',
        url: '/sveden/objects',
        description: 'МТО, оснащение, библиотека, спортзал, кабинеты, доступная среда, условия для инвалидов'
    },
    {
        title: 'Стипендии и меры поддержки',
        url: '/sveden/grants',
        description: 'Стипендии, социальная поддержка, общежитие, материальная помощь обучающимся'
    },
    {
        title: 'Платные образовательные услуги',
        url: '/sveden/paid_edu',
        description: 'Платные услуги, дополнительное образование, стоимость обучения, договор'
    },
    {
        title: 'Финансово-хозяйственная деятельность',
        url: '/sveden/budget',
        description: 'Финансы, бюджет, план ФХД, объем образовательной деятельности'
    },
    {
        title: 'Вакантные места для приема',
        url: '/sveden/vacant',
        description: 'Вакантные места, свободные места, прием, перевод обучающихся'
    },
    {
        title: 'Международное сотрудничество',
        url: '/sveden/inter',
        description: 'Международные связи, партнерство, сотрудничество с зарубежными организациями'
    },
    {
        title: 'Организация питания',
        url: '/sveden/catering',
        description: 'Питание, столовая, меню, условия питания обучающихся'
    },
];

export function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (value: string) => {
        setQuery(value);

        if (value.length < 2) {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const filtered = searchableContent.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.description.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filtered);
        setIsOpen(filtered.length > 0);
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
                    placeholder="Поиск по сайту..."
                    className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {isOpen && results.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-soft-lg z-50 max-h-96 overflow-y-auto">
                    {results.map((result, idx) => (
                        <Link
                            key={idx}
                            href={result.url}
                            onClick={() => {
                                setIsOpen(false);
                                setQuery('');
                            }}
                            className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                        >
                            <div className="font-semibold text-gray-900 mb-1">{result.title}</div>
                            <div className="text-sm text-gray-600">{result.description}</div>
                        </Link>
                    ))}
                </div>
            )}

            {isOpen && results.length === 0 && query.length >= 2 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-soft-lg z-50 px-4 py-3">
                    <div className="text-gray-600 text-sm">Ничего не найдено</div>
                </div>
            )}
        </div>
    );
}
