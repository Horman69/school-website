'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { MicrodataTable } from '@/components/microdata/MicrodataTable';
import type { VacantPlace } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const vacantPlaces: VacantPlace[] = [
    {
        eduCode: '',
        eduName: 'Начальное общее образование',
        eduLevel: 'Начальное общее образование',
        eduCourse: '1',
        eduForm: 'Очная',
        numberBFVacant: 0,
        numberBRVacant: 0,
        numberBMVacant: 25,
        numberPVacant: 0,
    },
    {
        eduCode: '',
        eduName: 'Основное общее образование',
        eduLevel: 'Основное общее образование',
        eduCourse: '5',
        eduForm: 'Очная',
        numberBFVacant: 0,
        numberBRVacant: 0,
        numberBMVacant: 20,
        numberPVacant: 0,
    },
];

export default function VacantPage() {
    const { colorScheme } = useAccessibility();

    const getPageClasses = () => {
        if (colorScheme === 'black') return 'bg-black text-white min-h-screen';
        if (colorScheme === 'white') return 'bg-white text-black min-h-screen';
        if (colorScheme === 'blue') return 'bg-blue-900 text-yellow-300 min-h-screen';
        return 'bg-gray-50 text-gray-900 min-h-screen';
    };

    const getTitleClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-300';
        return 'text-gray-900';
    };

    const getTextClasses = () => {
        if (colorScheme === 'black') return 'text-gray-400';
        if (colorScheme === 'white') return 'text-gray-700';
        if (colorScheme === 'blue') return 'text-yellow-200';
        return 'text-gray-800';
    };

    const getHeaderClasses = () => {
        if (colorScheme === 'black') return 'bg-gray-800 border-gray-600 text-white';
        if (colorScheme === 'white') return 'bg-gray-100 border-black text-black';
        if (colorScheme === 'blue') return 'bg-blue-700 border-yellow-500 text-yellow-200';
        return 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 text-gray-900';
    };

    const getRowClasses = () => {
        if (colorScheme === 'black') return 'bg-gray-900 divide-gray-700 hover:bg-gray-800';
        if (colorScheme === 'white') return 'bg-white divide-gray-300 hover:bg-gray-100';
        if (colorScheme === 'blue') return 'bg-blue-800 divide-blue-600 hover:bg-blue-700';
        return 'bg-white divide-gray-100 hover:bg-gray-50';
    };

    const getCellTextClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-100';
        return 'text-gray-900';
    };

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-black';
        if (colorScheme === 'blue') return 'border-yellow-600';
        return 'border-primary-200';
    };

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Вакантные места' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Вакантные места для приема (перевода) обучающихся</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Информация о вакантных местах</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={getHeaderClasses()}>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Уровень образования</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Курс</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Форма обучения</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-center text-sm font-bold`}>Фед. бюджет</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-center text-sm font-bold`}>Рег. бюджет</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-center text-sm font-bold`}>Местн. бюджет</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-center text-sm font-bold`}>Платно</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${getRowClasses()} divide-y transition-colors`}>
                                        {vacantPlaces.map((place, idx) => (
                                            <tr key={idx} itemProp="vacant">
                                                <td itemProp="eduName" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{place.eduName}</td>
                                                <td itemProp="eduCourse" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{place.eduCourse}</td>
                                                <td itemProp="eduForm" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{place.eduForm}</td>
                                                <td itemProp="numberBFVacant" className={`px-4 py-3 text-sm text-center font-semibold ${getCellTextClasses()}`}>{place.numberBFVacant}</td>
                                                <td itemProp="numberBRVacant" className={`px-4 py-3 text-sm text-center font-semibold ${getCellTextClasses()}`}>{place.numberBRVacant}</td>
                                                <td itemProp="numberBMVacant" className={`px-4 py-3 text-sm text-center font-semibold ${getCellTextClasses()}`}>{place.numberBMVacant}</td>
                                                <td itemProp="numberPVacant" className={`px-4 py-3 text-sm text-center font-semibold ${getCellTextClasses()}`}>{place.numberPVacant}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className={`text-sm mt-4 ${getTextClasses()}`}>
                                Информация обновлена: {new Date().toLocaleDateString('ru-RU')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
