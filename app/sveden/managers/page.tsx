'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { MicrodataTable } from '@/components/microdata/MicrodataTable';
import type { Manager } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const director: Manager = {
    fio: 'Сидоров Петр Иванович',
    post: 'Директор',
    telephone: '+7 (495) 123-45-67',
    email: 'director@school1.ru',
};

const deputies: Manager[] = [
    {
        fio: 'Иванова Мария Петровна',
        post: 'Заместитель директора по учебной работе',
        telephone: '+7 (495) 123-45-68',
        email: 'zavuch@school1.ru',
    },
    {
        fio: 'Петрова Анна Сергеевна',
        post: 'Заместитель директора по воспитательной работе',
        telephone: '+7 (495) 123-45-69',
        email: 'vospitanie@school1.ru',
    },
];

export default function ManagersPage() {
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
                        { label: 'Руководство' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Руководство. Педагогический (научно-педагогический) состав</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Руководитель образовательной организации</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <MicrodataTable
                                data={[director]}
                                parentItemprop="rucovodstvo"
                                columns={[
                                    { header: 'ФИО', accessor: 'fio', itemprop: 'fio' },
                                    { header: 'Должность', accessor: 'post', itemprop: 'post' },
                                    { header: 'Телефон', accessor: 'telephone', itemprop: 'telephone' },
                                    { header: 'Email', accessor: 'email', itemprop: 'email' },
                                ]}
                            />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Заместители руководителя</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <MicrodataTable
                                data={deputies}
                                parentItemprop="rucovodstvoZam"
                                columns={[
                                    { header: 'ФИО', accessor: 'fio', itemprop: 'fio' },
                                    { header: 'Должность', accessor: 'post', itemprop: 'post' },
                                    { header: 'Телефон', accessor: 'telephone', itemprop: 'telephone' },
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
