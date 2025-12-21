'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { MicrodataTable } from '@/components/microdata/MicrodataTable';
import type { StructOrgUprav } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const structureData: StructOrgUprav[] = [
    {
        name: 'Начальная школа',
        fio: 'Иванова Мария Петровна',
        post: 'Заведующий начальной школой',
        addressStr: 'г. Москва, ул. Ленина, д. 1, корпус 1',
        email: 'nachalnaya@school1.ru',
        divisionClauseDocLink: '/documents/polojenie-nachalnaya.pdf',
    },
    {
        name: 'Средняя и старшая школа',
        fio: 'Петров Иван Сергеевич',
        post: 'Заведующий средней и старшей школой',
        addressStr: 'г. Москва, ул. Ленина, д. 1, корпус 2',
        email: 'srednyaya@school1.ru',
        divisionClauseDocLink: '/documents/polojenie-srednyaya.pdf',
    },
];

export default function StructPage() {
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

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Структура и органы управления' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Структура и органы управления образовательной организацией</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Структурные подразделения</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <MicrodataTable
                                data={structureData}
                                parentItemprop="structOrgUprav"
                                columns={[
                                    { header: 'Наименование', accessor: 'name', itemprop: 'name' },
                                    { header: 'Руководитель', accessor: 'fio', itemprop: 'fio' },
                                    { header: 'Должность', accessor: 'post', itemprop: 'post' },
                                    { header: 'Адрес', accessor: 'addressStr', itemprop: 'addressStr' },
                                    { header: 'Email', accessor: 'email', itemprop: 'email' },
                                ]}
                            />
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
