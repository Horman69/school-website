'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import type { EducationProgram } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

// Данные образовательных программ (ЗАПОЛНИТЕ РЕАЛЬНЫМИ ДАННЫМИ)
const educationPrograms: EducationProgram[] = [
    {
        eduCode: '',
        eduName: 'Начальное общее образование',
        eduLevel: 'Начальное общее образование',
        eduForm: 'Очная',
        learningTerm: '4 года',
        opMain: '/documents/edu/nachalnoe-opisanie.pdf',
        educationPlan: '/documents/edu/nachalnoe-plan.pdf',
        educationRpd: ['/documents/edu/rpd-1.pdf', '/documents/edu/rpd-2.pdf'],
        educationShedule: '/documents/edu/nachalnoe-grafik.pdf',
        numberAll: 250,
        numberBF: 0,
        numberBR: 0,
        numberBM: 250,
        numberP: 0,
    },
    {
        eduCode: '',
        eduName: 'Основное общее образование',
        eduLevel: 'Основное общее образование',
        eduForm: 'Очная',
        learningTerm: '5 лет',
        opMain: '/documents/edu/osnovnoe-opisanie.pdf',
        educationPlan: '/documents/edu/osnovnoe-plan.pdf',
        educationRpd: ['/documents/edu/rpd-3.pdf', '/documents/edu/rpd-4.pdf'],
        educationShedule: '/documents/edu/osnovnoe-grafik.pdf',
        numberAll: 300,
        numberBF: 0,
        numberBR: 0,
        numberBM: 300,
        numberP: 0,
    },
    {
        eduCode: '',
        eduName: 'Среднее общее образование',
        eduLevel: 'Среднее общее образование',
        eduForm: 'Очная',
        learningTerm: '2 года',
        opMain: '/documents/edu/srednee-opisanie.pdf',
        educationPlan: '/documents/edu/srednee-plan.pdf',
        educationRpd: ['/documents/edu/rpd-5.pdf', '/documents/edu/rpd-6.pdf'],
        educationShedule: '/documents/edu/srednee-grafik.pdf',
        numberAll: 100,
        numberBF: 0,
        numberBR: 0,
        numberBM: 100,
        numberP: 0,
    },
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

    const getLabelClasses = () => {
        if (colorScheme === 'black') return 'text-gray-400';
        if (colorScheme === 'white') return 'text-gray-700';
        if (colorScheme === 'blue') return 'text-yellow-400';
        return 'text-gray-800';
    };

    const getValueClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-100';
        return 'text-gray-900';
    };

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-gray-300';
        if (colorScheme === 'blue') return 'border-blue-600';
        return 'border-gray-100';
    };

    const getStatBoxClasses = () => {
        if (colorScheme === 'black') return 'bg-gray-800';
        if (colorScheme === 'white') return 'bg-gray-100';
        if (colorScheme === 'blue') return 'bg-blue-800';
        return 'bg-gray-50';
    };

    const getStatNumberClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-200';
        return 'text-primary-600';
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

                    {/* Программы */}
                    <div className="space-y-6 mb-6">
                        {educationPrograms.map((program, idx) => (
                            <Card key={idx} itemProp="eduOp">
                                <CardHeader>
                                    <CardTitle itemProp="eduName">{program.eduName}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {/* Основная информация */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        <div>
                                            <div className={`text-sm font-semibold mb-1 ${getLabelClasses()}`}>Уровень образования</div>
                                            <div itemProp="eduLevel" className={getValueClasses()}>{program.eduLevel}</div>
                                        </div>
                                        <div>
                                            <div className={`text-sm font-semibold mb-1 ${getLabelClasses()}`}>Форма обучения</div>
                                            <div itemProp="eduForm" className={getValueClasses()}>{program.eduForm}</div>
                                        </div>
                                        <div>
                                            <div className={`text-sm font-semibold mb-1 ${getLabelClasses()}`}>Срок обучения</div>
                                            <div itemProp="learningTerm" className={getValueClasses()}>{program.learningTerm}</div>
                                        </div>
                                    </div>

                                    {/* Документы */}
                                    <div className={`border-t pt-4 mb-6 ${getBorderClasses()}`}>
                                        <h3 className={`font-semibold mb-3 ${getValueClasses()}`}>Документы программы</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <DocumentLink href={program.opMain} itemprop="opMain" hasSignature>
                                                Описание образовательной программы
                                            </DocumentLink>
                                            <DocumentLink href={program.educationPlan} itemprop="educationPlan" hasSignature>
                                                Учебный план
                                            </DocumentLink>
                                            <DocumentLink href={program.educationShedule} itemprop="educationShedule" hasSignature>
                                                Календарный учебный график
                                            </DocumentLink>
                                            <details className={colorScheme === 'blue' ? 'text-yellow-300' : 'text-primary-600'}>
                                                <summary className={`cursor-pointer font-medium flex items-center gap-2 ${colorScheme === 'blue' ? 'hover:text-yellow-200' : 'hover:text-primary-700'}`}>
                                                    <span className="text-xl">📄</span>
                                                    Рабочие программы дисциплин ({program.educationRpd.length})
                                                </summary>
                                                <div className="ml-7 mt-2 space-y-2">
                                                    {program.educationRpd.map((rpd, rpdIdx) => (
                                                        <DocumentLink key={rpdIdx} href={rpd} itemprop="educationRpd" hasSignature>
                                                            РПД {rpdIdx + 1}
                                                        </DocumentLink>
                                                    ))}
                                                </div>
                                            </details>
                                        </div>
                                    </div>

                                    {/* Численность */}
                                    <div className={`border-t pt-4 ${getBorderClasses()}`}>
                                        <h3 className={`font-semibold mb-3 ${getValueClasses()}`}>Численность обучающихся</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className={`rounded-lg p-3 ${getStatBoxClasses()}`}>
                                                <div className={`text-xs mb-1 ${getLabelClasses()}`}>Всего</div>
                                                <div itemProp="numberAll" className={`text-2xl font-bold ${getStatNumberClasses()}`}>{program.numberAll}</div>
                                            </div>
                                            <div className={`rounded-lg p-3 ${getStatBoxClasses()}`}>
                                                <div className={`text-xs mb-1 ${getLabelClasses()}`}>Федеральный бюджет</div>
                                                <div itemProp="numberBF" className={`text-2xl font-bold ${getValueClasses()}`}>{program.numberBF}</div>
                                            </div>
                                            <div className={`rounded-lg p-3 ${getStatBoxClasses()}`}>
                                                <div className={`text-xs mb-1 ${getLabelClasses()}`}>Региональный бюджет</div>
                                                <div itemProp="numberBR" className={`text-2xl font-bold ${getValueClasses()}`}>{program.numberBR}</div>
                                            </div>
                                            <div className={`rounded-lg p-3 ${getStatBoxClasses()}`}>
                                                <div className={`text-xs mb-1 ${getLabelClasses()}`}>Местный бюджет</div>
                                                <div itemProp="numberBM" className={`text-2xl font-bold ${getValueClasses()}`}>{program.numberBM}</div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Языки обучения */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Языки, на которых осуществляется образование</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="language" className={`font-medium ${getValueClasses()}`}>Русский язык</p>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
