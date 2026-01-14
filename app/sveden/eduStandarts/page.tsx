'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function EduStandartsPage() {
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
                        { label: 'Образовательные стандарты' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Образовательные стандарты и требования</h1>

                    {/* Начальное общее образование (НОО) */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Начальное общее образование (НОО)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <DocumentLink href="/documents/noo/prikaz-569-fgos-noo.pdf" itemprop="eduFedDoc">
                                    Приказ №569 от 18.07.2022 об изменении ФГОС НОО
                                </DocumentLink>
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС начального общего образования (официальный сайт)
                                </DocumentLink>
                                <DocumentLink href="https://cloud.mail.ru/public/iS67/zV4vdMxjQ" itemprop="eduFedDoc">
                                    Приказ №704 от 09.10.2024 о внесении изменений в ФОП НОО, ООО, СОО
                                </DocumentLink>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Основное общее образование (ООО) */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Основное общее образование (ООО)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС основного общего образования (официальный сайт)
                                </DocumentLink>
                                <DocumentLink href="https://cloud.mail.ru/public/iS67/zV4vdMxjQ" itemprop="eduFedDoc">
                                    Приказ №704 от 09.10.2024 о внесении изменений в ФОП НОО, ООО, СОО
                                </DocumentLink>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Среднее общее образование (СОО) */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Среднее общее образование (СОО)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС среднего общего образования (официальный сайт)
                                </DocumentLink>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
