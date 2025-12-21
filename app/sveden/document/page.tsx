'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import type { DocumentsInfo } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

// Данные документов (ЗАПОЛНИТЕ РЕАЛЬНЫМИ ССЫЛКАМИ)
const documentsData: DocumentsInfo = {
    ustav: '/documents/ustav.pdf',
    pravPriem: '/documents/prav-priem.pdf',
    modeDoc: '/documents/mode.pdf',
    formObuch: '/documents/form-obuch.pdf',
    pravVnutRasp: '/documents/prav-vnut-rasp.pdf',
    pravPerev: '/documents/prav-perev.pdf',
    pravOtchis: '/documents/prav-otchis.pdf',
    pravVosst: '/documents/prav-vosst.pdf',
    reportEduDoc: '/documents/report-edu.pdf',
    predписания: 'Предписаний нет',
    kolDogovor: '/documents/kol-dogovor.pdf',
};

const documentSections = [
    { title: 'Устав образовательной организации', link: documentsData.ustav, itemprop: 'ustav', hasSignature: false },
    { title: 'Правила приема обучающихся', link: documentsData.pravPriem, itemprop: 'pravPriem', hasSignature: true },
    { title: 'Режим занятий обучающихся', link: documentsData.modeDoc, itemprop: 'modeDoc', hasSignature: true },
    { title: 'Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся', link: documentsData.formObuch, itemprop: 'formObuch', hasSignature: true },
    { title: 'Правила внутреннего распорядка обучающихся', link: documentsData.pravVnutRasp, itemprop: 'pravVnutRasp', hasSignature: true },
    { title: 'Порядок и основания перевода обучающихся', link: documentsData.pravPerev, itemprop: 'pravPerev', hasSignature: true },
    { title: 'Порядок и основания отчисления обучающихся', link: documentsData.pravOtchis, itemprop: 'pravOtchis', hasSignature: true },
    { title: 'Порядок и основания восстановления обучающихся', link: documentsData.pravVosst, itemprop: 'pravVosst', hasSignature: true },
    { title: 'Отчет о результатах самообследования', link: documentsData.reportEduDoc, itemprop: 'reportEduDoc', hasSignature: true },
    { title: 'Коллективный договор', link: documentsData.kolDogovor, itemprop: 'kolDogovor', hasSignature: true },
];

export default function DocumentPage() {
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
        if (colorScheme === 'black') return 'text-gray-300';
        if (colorScheme === 'white') return 'text-gray-700';
        if (colorScheme === 'blue') return 'text-yellow-200';
        return 'text-gray-700';
    };

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-gray-300';
        if (colorScheme === 'blue') return 'border-blue-600';
        return 'border-gray-100';
    };

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Документы' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Документы</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Локальные нормативные акты</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {documentSections.map((doc, idx) => (
                                    <div key={idx} className={`pb-4 last:border-0 last:pb-0 border-b ${getBorderClasses()}`}>
                                        <h3 className={`text-sm font-semibold mb-2 ${getSubtitleClasses()}`}>{doc.title}</h3>
                                        <DocumentLink
                                            href={doc.link || '#'}
                                            itemprop={doc.itemprop}
                                            hasSignature={doc.hasSignature}
                                        >
                                            Скачать документ
                                        </DocumentLink>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Предписания органов надзора</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p itemProp="predписания" className="text-gray-700">{documentsData.predписания}</p>
                        </CardContent>
                    </Card>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-gray-700">
                            <strong>Примечание:</strong> Документы, отмеченные бейджем "ЭП", подписаны квалифицированной электронной подписью.
                            Для проверки подписи используйте программу КриптоПро или аналогичную.
                        </p>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
