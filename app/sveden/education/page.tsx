'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const nooWorkPrograms = [
    { href: '/documents/noo/английский-язык.pdf', label: 'Английский язык' },
    { href: '/documents/noo/ИЗО.pdf', label: 'ИЗО' },
    { href: '/documents/noo/литературное-чтение.pdf', label: 'Литературное чтение' },
    { href: '/documents/noo/математика.pdf', label: 'Математика' },
    { href: '/documents/noo/музыка.pdf', label: 'Музыка' },
    { href: '/documents/noo/окружающий-мир.pdf', label: 'Окружающий мир' },
    { href: '/documents/noo/ОРКСЭ.pdf', label: 'ОРКСЭ' },
    { href: '/documents/noo/русский-язык.pdf', label: 'Русский язык' },
    { href: '/documents/noo/труд.pdf', label: 'Труд' },
    { href: '/documents/noo/Физ-кул.pdf', label: 'Физическая культура' },
];

const oooWorkPrograms = [
    { href: '/documents/ooo/Алгебра.pdf', label: 'Алгебра' },
    { href: '/documents/ooo/Английский-язык.pdf', label: 'Английский язык' },
    { href: '/documents/ooo/Биология.pdf', label: 'Биология' },
    { href: '/documents/ooo/Вероятность-и-статистика.pdf', label: 'Вероятность и статистика' },
    { href: '/documents/ooo/География.pdf', label: 'География' },
    { href: '/documents/ooo/Геометрия.pdf', label: 'Геометрия' },
    { href: '/documents/ooo/ИЗО.pdf', label: 'ИЗО' },
    { href: '/documents/ooo/Информатика.pdf', label: 'Информатика' },
    { href: '/documents/ooo/История.pdf', label: 'История' },
    { href: '/documents/ooo/Литература.pdf', label: 'Литература' },
    { href: '/documents/ooo/Математика.pdf', label: 'Математика' },
    { href: '/documents/ooo/Музыка.pdf', label: 'Музыка' },
    { href: '/documents/ooo/ОБЗР.pdf', label: 'ОБЗР' },
    { href: '/documents/ooo/Обществознание.pdf', label: 'Обществознание' },
    { href: '/documents/ooo/Русский-язык.pdf', label: 'Русский язык' },
    { href: '/documents/ooo/Труд.pdf', label: 'Труд' },
    { href: '/documents/ooo/Физика.pdf', label: 'Физика' },
    { href: '/documents/ooo/Физическая-культура.pdf', label: 'Физическая культура' },
    { href: '/documents/ooo/Химия.pdf', label: 'Химия' },
];

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
                                    <div className="space-y-2">
                                        <DocumentLink href="https://cloud.mail.ru/public/jebR/RucCzpqtx" itemprop="eduOp">
                                            Основная образовательная программа НОО
                                        </DocumentLink>
                                        <DocumentLink href="/documents/noo/Учебный план НОО.pdf" itemprop="educationPlan">
                                            Учебный план НОО
                                        </DocumentLink>
                                        <DocumentLink href="/documents/noo/kalendarnyj-uchebnyj-grafik-noo.pdf" itemprop="educationShedule">
                                            Календарный учебный график НОО
                                        </DocumentLink>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Рабочие программы:</h3>
                                    <div className="space-y-2">
                                        {nooWorkPrograms.map((program) => (
                                            <DocumentLink key={program.href} href={program.href} itemprop="educationRpd">
                                                {program.label}
                                            </DocumentLink>
                                        ))}
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

                                {/* ООП ООО */}
                                <div>
                                    <h3 className="font-semibold mb-2">Основная образовательная программа:</h3>
                                    <div className="space-y-2">
                                        <DocumentLink href="https://cloud.mail.ru/public/Dp1M/o5ih9e11T" itemprop="eduOp">
                                            Основная образовательная программа ООО
                                        </DocumentLink>
                                        <DocumentLink href="/documents/ooo/Учебный план 5-9 класс.pdf" itemprop="educationPlan">
                                            Учебный план ООО (5-9 класс)
                                        </DocumentLink>
                                        <DocumentLink href="/documents/ooo/Календарный-учебный-график-ООО.docx" itemprop="educationShedule">
                                            Календарный учебный график ООО
                                        </DocumentLink>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Рабочие программы:</h3>
                                    <div className="space-y-2">
                                        {oooWorkPrograms.map((program) => (
                                            <DocumentLink key={program.href} href={program.href} itemprop="educationRpd">
                                                {program.label}
                                            </DocumentLink>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Программы части, формируемой участниками образовательных отношений (ЧФУ):</h3>
                                    <div className="space-y-2">
                                        <DocumentLink href="/documents/ooo/Программа ЧФУ 5-8 класс.pdf" itemprop="educationRpd">
                                            Программа ЧФУ 5-8 класс
                                        </DocumentLink>
                                        <DocumentLink href="/documents/ooo/Программа ЧФУ 5-9 класс.pdf" itemprop="educationRpd">
                                            Программа ЧФУ 5-9 класс
                                        </DocumentLink>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Программы внеурочной деятельности:</h3>
                                    <div className="space-y-2">
                                        <DocumentLink href="/documents/ooo/Программы внеурочной деятельности 5-9 кл.pdf" itemprop="educationRpd">
                                            Программы внеурочной деятельности 5-9 класс
                                        </DocumentLink>
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

                    {/* Положение о ЭИОС */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Дополнительные документы</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DocumentLink href="/documents/noo/Положение-о-ЭИОС.pdf">
                                Положение об электронной информационно-образовательной среде
                            </DocumentLink>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
