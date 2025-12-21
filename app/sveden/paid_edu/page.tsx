'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function PaidEduPage() {
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

    const getSubtitleClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-200';
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
                        { label: 'Платные образовательные услуги' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Платные образовательные услуги</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Информация о платных услугах</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h3 className={`font-semibold mb-2 ${getSubtitleClasses()}`}>Наличие платных услуг</h3>
                                    <p itemProp="paidEdu" className={getTextClasses()}>
                                        Платные образовательные услуги не предоставляются.
                                    </p>
                                </div>
                                <div>
                                    <h3 className={`font-semibold mb-2 ${getSubtitleClasses()}`}>Образец договора</h3>
                                    <p itemProp="paidDog" className={getTextClasses()}>
                                        Образец договора: отсутствует.
                                    </p>
                                </div>
                                <div>
                                    <h3 className={`font-semibold mb-2 ${getSubtitleClasses()}`}>Стоимость обучения</h3>
                                    <p itemProp="paidSt" className={getTextClasses()}>
                                        Стоимость обучения: отсутствует.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
