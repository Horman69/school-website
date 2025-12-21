'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { DocumentLink } from '@/components/ui/DocumentLink';
import { useAccessibility } from '@/contexts/AccessibilityContext';

export default function BudgetPage() {
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

    const getHeaderClasses = () => {
        if (colorScheme === 'black') return 'bg-gray-800 border-gray-600 text-white';
        if (colorScheme === 'white') return 'bg-gray-100 border-black text-black';
        if (colorScheme === 'blue') return 'bg-blue-700 border-yellow-500 text-yellow-200';
        return 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 text-gray-900';
    };

    const getRowClasses = () => {
        if (colorScheme === 'black') return 'bg-gray-900 divide-gray-700 hover:bg-gray-800';
        if (colorScheme === 'white') return 'bg-white divide-gray-300 hover:bg-gray-100';
        if (colorScheme === 'blue') return 'bg-blue-800 divide-blue-600 hover:bg-blue-700';
        return 'bg-white divide-gray-100 hover:bg-gray-50';
    };

    const getCellTextClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-100';
        return 'text-gray-900';
    };

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-black';
        if (colorScheme === 'blue') return 'border-yellow-600';
        return 'border-primary-200';
    };

    return (
        <div className={getPageClasses()}>
            <PageContainer>
                <div className="container mx-auto px-4 py-8">
                    <Breadcrumbs items={[
                        { label: 'Сведения об образовательной организации', href: '/' },
                        { label: 'Финансово-хозяйственная деятельность' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Финансово-хозяйственная деятельность</h1>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Объем образовательной деятельности</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={getHeaderClasses()}>
                                            <th className={`border-b-2 ${getBorderClasses()} px-6 py-3 text-left text-sm font-bold`}>Источник финансирования</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-6 py-3 text-left text-sm font-bold`}>Объем (тыс. руб.)</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${getRowClasses()} divide-y transition-colors`}>
                                        <tr>
                                            <td className={`px-6 py-4 text-sm font-medium ${getCellTextClasses()}`}>Федеральный бюджет</td>
                                            <td itemProp="finBFVolume" className={`px-6 py-4 text-sm font-semibold ${getCellTextClasses()}`}>0</td>
                                        </tr>
                                        <tr>
                                            <td className={`px-6 py-4 text-sm font-medium ${getCellTextClasses()}`}>Бюджет субъекта РФ</td>
                                            <td itemProp="finBRVolume" className={`px-6 py-4 text-sm font-semibold ${getCellTextClasses()}`}>0</td>
                                        </tr>
                                        <tr>
                                            <td className={`px-6 py-4 text-sm font-medium ${getCellTextClasses()}`}>Местный бюджет</td>
                                            <td itemProp="finBMVolume" className={`px-6 py-4 text-sm font-semibold ${getCellTextClasses()}`}>15000</td>
                                        </tr>
                                        <tr>
                                            <td className={`px-6 py-4 text-sm font-medium ${getCellTextClasses()}`}>Платные услуги</td>
                                            <td itemProp="finPVolume" className={`px-6 py-4 text-sm font-semibold ${getCellTextClasses()}`}>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>План финансово-хозяйственной деятельности</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <DocumentLink href="/documents/plan-fhd.pdf" itemprop="finPlanDocLink" hasSignature>
                                Скачать план ФХД
                            </DocumentLink>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
