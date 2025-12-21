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

                    <Card>
                        <CardHeader>
                            <CardTitle>Федеральные государственные образовательные стандарты (ФГОС)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС начального общего образования
                                </DocumentLink>
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС основного общего образования
                                </DocumentLink>
                                <DocumentLink href="https://fgos.ru/" itemprop="eduFedDoc">
                                    ФГОС среднего общего образования
                                </DocumentLink>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
