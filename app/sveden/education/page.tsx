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

                                {/* ФГОС НОО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Федеральные государственные образовательные стандарты:</h3>
                                    <div className="space-y-2">
                                        <DocumentLink href="/documents/noo/prikaz-286-fgos-noo.pdf" itemprop="eduFedDoc">
                                            Приказ №286 от 31.05.2021 ФГОС НОО
                                        </DocumentLink>
                                        <DocumentLink href="/documents/noo/prikaz-569-fgos-noo.pdf" itemprop="eduFedDoc">
                                            Приказ №569 от 18.07.2022 об изменении ФГОС НОО
                                        </DocumentLink>
                                        <DocumentLink href="https://cloud.mail.ru/public/iS67/zV4vdMxjQ" itemprop="eduFedDoc">
                                            Приказ №704 от 09.10.2024 о внесении изменений в ФОП
                                        </DocumentLink>
                                    </div>
                                </div>

                                {/* ООП НОО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Основная образовательная программа:</h3>
                                    <DocumentLink href="https://cloud.mail.ru/public/U71C/fYkAKSqDP" itemprop="eduOp">
                                        Основная образовательная программа НОО
                                    </DocumentLink>
                                </div>

                                {/* Учебный план */}
                                <div>
                                    <h3 className="font-semibold mb-2">Учебный план:</h3>
                                    <DocumentLink href="/documents/noo/Учебный-план-НОО.docx" itemprop="educationPlan">
                                        Учебный план НОО
                                    </DocumentLink>
                                </div>

                                {/* Календарный график */}
                                <div>
                                    <h3 className="font-semibold mb-2">Календарный учебный график:</h3>
                                    <DocumentLink href="/documents/noo/kalendarnyj-uchebnyj-grafik-noo.pdf" itemprop="educationShedule">
                                        Календарный учебный график НОО
                                    </DocumentLink>
                                </div>

                                {/* Рабочие программы */}
                                <div>
                                    <h3 className="font-semibold mb-2">Рабочие программы дисциплин:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <DocumentLink href="/documents/noo/русский-язык.pdf" itemprop="educationRpd">Русский язык</DocumentLink>
                                        <DocumentLink href="/documents/noo/литературное-чтение.pdf" itemprop="educationRpd">Литературное чтение</DocumentLink>
                                        <DocumentLink href="/documents/noo/английский-язык.pdf" itemprop="educationRpd">Английский язык</DocumentLink>
                                        <DocumentLink href="/documents/noo/математика.pdf" itemprop="educationRpd">Математика</DocumentLink>
                                        <DocumentLink href="/documents/noo/окружающий-мир.pdf" itemprop="educationRpd">Окружающий мир</DocumentLink>
                                        <DocumentLink href="/documents/noo/ОРКСЭ.pdf" itemprop="educationRpd">ОРКСЭ</DocumentLink>
                                        <DocumentLink href="/documents/noo/ИЗО.pdf" itemprop="educationRpd">Изобразительное искусство</DocumentLink>
                                        <DocumentLink href="/documents/noo/музыка.pdf" itemprop="educationRpd">Музыка</DocumentLink>
                                        <DocumentLink href="/documents/noo/труд.pdf" itemprop="educationRpd">Технология</DocumentLink>
                                        <DocumentLink href="/documents/noo/Физ-кул.pdf" itemprop="educationRpd">Физическая культура</DocumentLink>
                                    </div>
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

                                {/* ФГОС ООО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Федеральные государственные образовательные стандарты:</h3>
                                    <div className="space-y-2">
                                        <DocumentLink href="/documents/ooo/prikaz-287-fgos-ooo.pdf" itemprop="eduFedDoc">
                                            Приказ №287 от 31.05.2021 ФГОС ООО
                                        </DocumentLink>
                                        <DocumentLink href="/documents/ooo/prikaz-568-fgos-ooo.pdf" itemprop="eduFedDoc">
                                            Приказ №568 от 18.07.2022 о изменении ФГОС ООО
                                        </DocumentLink>
                                        <DocumentLink href="https://cloud.mail.ru/public/iS67/zV4vdMxjQ" itemprop="eduFedDoc">
                                            Приказ №704 от 09.10.2024 о внесении изменений в ФОП
                                        </DocumentLink>
                                    </div>
                                </div>

                                {/* ООП ООО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Основная образовательная программа:</h3>
                                    <DocumentLink href="https://cloud.mail.ru/public/U71C/fYkAKSqDP" itemprop="eduOp">
                                        Основная образовательная программа ООО
                                    </DocumentLink>
                                </div>

                                {/* Учебный план */}
                                <div>
                                    <h3 className="font-semibold mb-2">Учебный план:</h3>
                                    <DocumentLink href="/documents/ooo/Учебный-план-ООО.docx" itemprop="educationPlan">
                                        Учебный план ООО
                                    </DocumentLink>
                                </div>

                                {/* Календарный график */}
                                <div>
                                    <h3 className="font-semibold mb-2">Календарный учебный график:</h3>
                                    <DocumentLink href="/documents/ooo/Календарный-учебный-график-ООО.docx" itemprop="educationShedule">
                                        Календарный учебный график ООО
                                    </DocumentLink>
                                </div>

                                {/* Рабочие программы */}
                                <div>
                                    <h3 className="font-semibold mb-2">Рабочие программы дисциплин:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        <DocumentLink href="/documents/ooo/Русский-язык.pdf" itemprop="educationRpd">Русский язык</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Литература.pdf" itemprop="educationRpd">Литература</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Английский-язык.pdf" itemprop="educationRpd">Английский язык</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Математика.pdf" itemprop="educationRpd">Математика</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Информатика.pdf" itemprop="educationRpd">Информатика</DocumentLink>
                                        <DocumentLink href="/documents/ooo/История.pdf" itemprop="educationRpd">История</DocumentLink>
                                        <DocumentLink href="/documents/ooo/География.pdf" itemprop="educationRpd">География</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Биология.pdf" itemprop="educationRpd">Биология</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Физика.pdf" itemprop="educationRpd">Физика</DocumentLink>
                                        <DocumentLink href="/documents/ooo/ИЗО.pdf" itemprop="educationRpd">Изобразительное искусство</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Музыка.pdf" itemprop="educationRpd">Музыка</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Труд.pdf" itemprop="educationRpd">Технология</DocumentLink>
                                        <DocumentLink href="/documents/ooo/Физическая-культура.pdf" itemprop="educationRpd">Физическая культура</DocumentLink>
                                    </div>
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
