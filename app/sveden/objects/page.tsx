'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function ObjectsPage() {
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

    const getLabelClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-200';
        return 'text-gray-900';
    };

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Материально-техническое обеспечение' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Материально-техническое обеспечение и оснащенность образовательного процесса</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Оборудованные учебные кабинеты</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="purposeCab" className={`leading-relaxed ${getTextClasses()}`}>
                                В школе имеется 30 оборудованных учебных кабинетов, оснащенных современной техникой и учебными пособиями.
                                Все кабинеты приспособлены для использования инвалидами и лицами с ОВЗ.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Библиотека</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div itemProp="purposeLibr" className="space-y-2">
                                <p className={`font-semibold ${getLabelClasses()}`} itemProp="objName">Библиотека</p>
                                <p className={getTextClasses()} itemProp="objAddress">г. Москва, ул. Ленина, д. 1, 1 этаж</p>
                                <p className={getTextClasses()} itemProp="objSq">Площадь: 100 м²</p>
                                <p className={getTextClasses()} itemProp="objCnt">Количество мест: 30</p>
                                <p className={getTextClasses()} itemProp="objOvz">Приспособлена для использования инвалидами и лицами с ОВЗ</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Объекты спорта</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div itemProp="purposeSport" className="space-y-2">
                                <p className={`font-semibold ${getLabelClasses()}`} itemProp="objName">Спортивный зал</p>
                                <p className={getTextClasses()} itemProp="objAddress">г. Москва, ул. Ленина, д. 1, 1 этаж</p>
                                <p className={getTextClasses()} itemProp="objSq">Площадь: 200 м²</p>
                                <p className={getTextClasses()} itemProp="objOvz">Приспособлен для использования инвалидами и лицами с ОВЗ</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Доступ к информационным системам</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="comNet" className={`mb-4 leading-relaxed ${getTextClasses()}`}>
                                Все учебные кабинеты оборудованы компьютерами с доступом к сети Интернет.
                                Скорость подключения: 100 Мбит/с.
                            </p>
                            <p itemProp="comNetOvz" className={`leading-relaxed ${getTextClasses()}`}>
                                Доступ к информационным системам приспособлен для использования инвалидами и лицами с ОВЗ.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
