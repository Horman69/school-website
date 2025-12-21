'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function AccessibleVersion() {
    const { colorScheme, setColorScheme } = useAccessibility();

    const getButtonClasses = (isActive: boolean) => {
        return `px-6 py-3 rounded-lg font-bold transition-all border-2 ${isActive
                ? 'bg-primary-600 text-white border-primary-600 ring-2 ring-primary-300'
                : 'bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200'
            }`;
    };

    // Theme classes for the page
    const getPageClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-black text-white min-h-screen';
        }
        if (colorScheme === 'white') {
            return 'bg-white text-black min-h-screen';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-900 text-yellow-300 min-h-screen';
        }
        return 'bg-gray-50 text-gray-900 min-h-screen';
    };

    const getCardClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-900 border-gray-700 text-white';
        }
        if (colorScheme === 'white') {
            return 'bg-white border-black text-black';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-800 border-yellow-600 text-yellow-300';
        }
        return 'bg-white border-gray-200 text-gray-900';
    };

    const getInfoCardClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-800 border-gray-600 text-white';
        }
        if (colorScheme === 'white') {
            return 'bg-white border-black text-black';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-800 border-yellow-600 text-yellow-300';
        }
        return 'bg-blue-50 border-blue-200 text-gray-900';
    };

    const getTestCardClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-800 border-gray-600 text-white';
        }
        if (colorScheme === 'white') {
            return 'bg-white border-black text-black';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-800 border-yellow-600 text-yellow-300';
        }
        return 'bg-green-50 border-green-200 text-gray-900';
    };

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <Breadcrumbs items={[{ label: 'Версия для слабовидящих' }]} />

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">
                        Версия для слабовидящих
                    </h1>

                    <div className={`${getCardClasses()} rounded-xl shadow-soft border-2 p-8 mb-8`}>
                        <h2 className="text-2xl font-bold mb-6">
                            Настройки отображения
                        </h2>

                        <div className="space-y-8">
                            {/* Color Scheme */}
                            <div>
                                <h3 className="font-bold text-xl mb-4">Цветовая схема</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <button
                                        onClick={() => setColorScheme('normal')}
                                        className={getButtonClasses(colorScheme === 'normal')}
                                    >
                                        Обычная
                                    </button>
                                    <button
                                        onClick={() => setColorScheme('black')}
                                        className={getButtonClasses(colorScheme === 'black')}
                                    >
                                        Черная
                                    </button>
                                    <button
                                        onClick={() => setColorScheme('white')}
                                        className={getButtonClasses(colorScheme === 'white')}
                                    >
                                        Белая
                                    </button>
                                    <button
                                        onClick={() => setColorScheme('blue')}
                                        className={getButtonClasses(colorScheme === 'blue')}
                                    >
                                        Синяя
                                    </button>
                                </div>
                            </div>

                            {/* Current Theme Info */}
                            <div className="pt-6 border-t-2" style={{
                                borderColor: colorScheme === 'black' ? '#4b5563' :
                                    colorScheme === 'white' ? '#000' :
                                        colorScheme === 'blue' ? '#ca8a04' : '#e5e7eb'
                            }}>
                                <div className={`${getInfoCardClasses()} border-2 rounded-lg p-4`}>
                                    <p className="font-semibold">
                                        Текущая тема: <span className={colorScheme === 'blue' ? 'text-yellow-400' : 'text-primary-600'}>
                                            {colorScheme === 'normal' && 'Обычная'}
                                            {colorScheme === 'black' && 'Черная'}
                                            {colorScheme === 'white' && 'Белая'}
                                            {colorScheme === 'blue' && 'Синяя'}
                                        </span>
                                    </p>
                                    <p className="text-sm mt-2">
                                        Настройки применяются ко всему сайту и сохраняются автоматически.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className={`${getInfoCardClasses()} border-2 rounded-xl p-6 mb-8`}>
                        <h2 className="text-2xl font-bold mb-4">
                            ℹ️ Информация
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            Данная версия сайта предназначена для людей с ограниченными возможностями зрения.
                            Вы можете выбрать подходящую цветовую схему.
                        </p>
                        <p className="mb-6 leading-relaxed">
                            <strong>Настройки применяются ко всему сайту</strong> и сохраняются автоматически.
                            Вы можете вернуться на главную страницу - настройки останутся активными.
                        </p>
                        <Link
                            href="/"
                            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors text-lg"
                        >
                            Вернуться к главной странице
                        </Link>
                    </div>

                    {/* Test Instructions */}
                    <div className={`${getTestCardClasses()} border-2 rounded-xl p-6`}>
                        <h2 className="text-2xl font-bold mb-4">
                            🧪 Тестирование
                        </h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li><strong>Черная:</strong> Черный фон, белый текст</li>
                            <li><strong>Белая:</strong> Белый фон, черный текст, черные границы</li>
                            <li><strong>Синяя:</strong> Темно-синий фон, желтый текст</li>
                            <li>Нажмите "Вернуться к главной странице"</li>
                            <li>Проверьте, что главная страница тоже изменилась</li>
                            <li>Вернитесь сюда и выберите "Обычная" для сброса</li>
                        </ol>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
