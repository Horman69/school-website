'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { InfoGrid } from '@/components/ui/InfoGrid';
import { DocumentLink } from '@/components/ui/DocumentLink';
import { MicrodataTable } from '@/components/microdata/MicrodataTable';
import type { SchoolInfo, Uchreditel } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

// Данные школы (будут уточнены позже)
const schoolData: SchoolInfo = {
    fullName: 'Образовательная организация Educamp',
    shortName: 'Educamp',
    regDate: 'Уточняется',
    address: 'Вьетнам, г. Нячанг (точный адрес уточняется)',
    telephone: 'Уточняется',
    email: 'Уточняется',
    workTime: 'Пн-Пт: 8:00-17:00 (уточняется)',

    uchreditel: [
        {
            nameUchred: 'Уточняется',
            addressUchred: 'Уточняется',
            telUchred: 'Уточняется',
            mailUchred: 'Уточняется',
            websiteUchred: '',
        },
    ],

    licenseDocLink: '',
    accreditationDocLink: '',
};

export default function CommonPage() {
    const { colorScheme } = useAccessibility();

    // Theme helper functions
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
                        { label: 'Основные сведения' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Основные сведения</h1>

                    {/* Основная информация */}
                    <Card
                        className="mb-6"
                        itemScope
                        itemType="https://schema.org/EducationalOrganization"
                    >
                        <CardHeader>
                            <CardTitle>Общая информация</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <InfoGrid
                                columns={2}
                                data={[
                                    { label: 'Полное наименование', value: schoolData.fullName, itemprop: 'fullName' },
                                    { label: 'Сокращенное наименование', value: schoolData.shortName || '-', itemprop: 'shortName' },
                                    { label: 'Дата создания', value: schoolData.regDate, itemprop: 'regDate' },
                                    { label: 'Адрес', value: schoolData.address, itemprop: 'address' },
                                    { label: 'Телефон', value: schoolData.telephone, itemprop: 'telephone' },
                                    { label: 'Email', value: schoolData.email, itemprop: 'email' },
                                    { label: 'Режим работы', value: schoolData.workTime || '-', itemprop: 'workTime' },
                                ]}
                            />
                        </CardContent>
                    </Card>

                    {/* Учредители */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Учредители</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <MicrodataTable
                                data={schoolData.uchreditel}
                                parentItemprop="uchreditel"
                                columns={[
                                    { header: 'Наименование', accessor: 'nameUchred', itemprop: 'nameUchred' },
                                    { header: 'Адрес', accessor: 'addressUchred', itemprop: 'addressUchred' },
                                    { header: 'Телефон', accessor: 'telUchred', itemprop: 'telUchred' },
                                    { header: 'Email', accessor: 'mailUchred', itemprop: 'mailUchred' },
                                    { header: 'Сайт', accessor: 'websiteUchred', itemprop: 'websiteUchred' },
                                ]}
                            />
                        </CardContent>
                    </Card>

                    {/* Документы */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Документы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <DocumentLink href={schoolData.licenseDocLink} itemprop="licenseDocLink">
                                    Лицензия на осуществление образовательной деятельности
                                </DocumentLink>
                                {schoolData.accreditationDocLink && (
                                    <DocumentLink href={schoolData.accreditationDocLink} itemprop="accreditationDocLink">
                                        Свидетельство о государственной аккредитации
                                    </DocumentLink>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
