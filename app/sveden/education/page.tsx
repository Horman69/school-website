'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function EducationPage() {
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
                        { label: 'Образование' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Образование</h1>

                    {/* Начальное общее образование (НОО) */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Начальное общее образование (НОО)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {/* Основная информация */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Уровень образования</div>
                                        <div className="font-medium">Начальное общее образование</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Форма обучения</div>
                                        <div className="font-medium">Очная</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Срок обучения</div>
                                        <div className="font-medium">4 года</div>
                                    </div>
                                </div>

                                {/* ООП НОО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Основная образовательная программа:</h3>
                                    <DocumentLink href="https://cloud.mail.ru/public/U71C/fYkAKSqDP" itemprop="eduOp">
                                        Основная образовательная программа НОО
                                    </DocumentLink>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    {/* Основное общее образование (ООО) */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Основное общее образование (ООО)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {/* Основная информация */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Уровень образования</div>
                                        <div className="font-medium">Основное общее образование</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Форма обучения</div>
                                        <div className="font-medium">Очная</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold mb-1 text-gray-600">Срок обучения</div>
                                        <div className="font-medium">5 лет</div>
                                    </div>
                                </div>

                                {/* ООП ООО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Основная образовательная программа:</h3>
                                    <DocumentLink href="https://cloud.mail.ru/public/U71C/fYkAKSqDP" itemprop="eduOp">
                                        Основная образовательная программа ООО
                                    </DocumentLink>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    {/* Языки обучения */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Языки, на которых осуществляется образование</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="language" className="font-medium">Русский язык</p>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
