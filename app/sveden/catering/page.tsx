'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function CateringPage() {
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

    const getLabelClasses = () => {
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
                        { label: 'Организация питания' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Организация питания в образовательной организации</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Условия питания обучающихся</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div itemProp="meals" className="space-y-2">
                                <p className={`font-semibold ${getLabelClasses()}`} itemProp="objName">Столовая</p>
                                <p className={getTextClasses()} itemProp="objAddress">г. Москва, ул. Ленина, д. 1, 1 этаж</p>
                                <p className={getTextClasses()} itemProp="objSq">Площадь: 150 м²</p>
                                <p className={getTextClasses()} itemProp="objCnt">Количество посадочных мест: 100</p>
                                <p className={getTextClasses()} itemProp="objOvz">Приспособлена для использования инвалидами и лицами с ОВЗ</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Условия охраны здоровья обучающихся</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div itemProp="health" className="space-y-2">
                                <p className={`font-semibold ${getLabelClasses()}`} itemProp="objName">Медицинский кабинет</p>
                                <p className={getTextClasses()} itemProp="objAddress">г. Москва, ул. Ленина, д. 1, 1 этаж</p>
                                <p className={getTextClasses()} itemProp="objSq">Площадь: 20 м²</p>
                                <p className={getTextClasses()} itemProp="objOvz">Приспособлен для использования инвалидами и лицами с ОВЗ</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
