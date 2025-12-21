'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function GrantsPage() {
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
        if (colorScheme === 'black') return 'text-gray-300';
        if (colorScheme === 'white') return 'text-gray-700';
        if (colorScheme === 'blue') return 'text-yellow-100';
        return 'text-gray-700';
    };
    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Стипендии и меры поддержки' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Стипендии и меры поддержки обучающихся</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Стипендии</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="grant" className={`leading-relaxed ${getTextClasses()}`}>
                                Выплата стипендий обучающимся не предусмотрена (общеобразовательная организация).
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Меры социальной поддержки</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="support" className={`leading-relaxed ${getTextClasses()}`}>
                                Обучающимся предоставляется бесплатное питание (завтраки и обеды для учащихся 1-4 классов).
                                Дети из малообеспеченных семей обеспечиваются бесплатными учебниками.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
