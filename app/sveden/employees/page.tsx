'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import type { Teacher } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const teachers: Teacher[] = [
    {
        fio: 'Иванова Мария Петровна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Математика, Русский язык, Литературное чтение',
        teachingLevel: 'Высшее образование - специалитет, магистратура',
        employeeQualification: 'Педагогическое образование',
        degree: 'Кандидат педагогических наук',
        academStat: 'Доцент',
        profDevelopment: 'Курсы повышения квалификации "Современные методы обучения", 2023 г.',
        genExperience: '15 лет',
        specExperience: '15 лет',
        teachingOp: 'Начальное общее образование',
    },
    {
        fio: 'Петров Иван Сергеевич',
        post: 'Учитель математики',
        teachingDiscipline: 'Математика, Алгебра, Геометрия',
        teachingLevel: 'Высшее образование - специалитет, магистратура',
        employeeQualification: 'Математика и информатика',
        genExperience: '10 лет',
        specExperience: '10 лет',
        teachingOp: 'Основное общее образование, Среднее общее образование',
    },
];

export default function EmployeesPage() {
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
                        { label: 'Педагогический состав' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Педагогический состав</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Преподаватели</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={getHeaderClasses()}>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>ФИО</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Должность</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Дисциплины</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Образование</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Стаж</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${getRowClasses()} divide-y transition-colors`}>
                                        {teachers.map((teacher, idx) => (
                                            <tr key={idx} itemProp="teachingStaff">
                                                <td itemProp="fio" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.fio}</td>
                                                <td itemProp="post" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.post}</td>
                                                <td itemProp="teachingDiscipline" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.teachingDiscipline}</td>
                                                <td itemProp="teachingLevel" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.teachingLevel}</td>
                                                <td itemProp="genExperience" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.genExperience}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
