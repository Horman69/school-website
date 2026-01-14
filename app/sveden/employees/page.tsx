'use client';

import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import type { Teacher } from '@/lib/microdata/types';
import { useAccessibility } from '@/contexts/AccessibilityContext';

const teachers: Teacher[] = [
    {
        fio: 'Александрова Анна Юрьевна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы, Английский язык, Изобразительное искусство',
        teachingLevel: 'Высшее: ФГБОУ ВПО "ВГТУ" Экономист-менеджер (2009-2013). Переподготовка: Учитель начальных классов, учитель английского языка (910 час.), Учитель изобразительного искусства (1320 час.)',
        employeeQualification: 'Учитель начальных классов, учитель английского языка, преподаватель изобразительного искусства',
        profDevelopment: 'АНО ДПО "Московская академия профессиональных компетенций" (14.07.23-29.12.23, 16.07.23-25.02.24)',
        genExperience: '8 лет',
        specExperience: '5 лет',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Атобателе Мария Николаевна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Среднее специальное: Курс ский педагогический колледж, Учитель музыки и музыкальный руководитель (2009). Высшее: Московский финансово-промышленный университет "Синергия", Управление и менеджмент (2024)',
        employeeQualification: 'Учитель начальных классов',
        profDevelopment: 'Курсы Инфоурок "Учитель начальных классов" (638 часов)',
        genExperience: '12 лет',
        specExperience: '5 лет',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Дяденко Юлия Леонидовна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Высшее: Новосибирский государственный педагогический университет, Учитель начальных классов (1998)',
        employeeQualification: 'Педагогика и методика начального образования',
        profDevelopment: 'АО "Издательство "Просвещение": серия вебинаров по русскому языку и методике начального образования (2025)',
        genExperience: '18 лет',
        specExperience: '7 лет',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Ибадова Лилия Анатольевна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Высшее: Тобольский государственный педагогический институт им. Д.И. Менделеева, Учитель русского языка, литературы и английского языка (2007)',
        employeeQualification: 'Учитель русского языка, литературы и английского языка',
        profDevelopment: 'Московская академия профессиональных компетенций "Методика преподавания русского языка" (72 часа, 2021); "Русский язык как государственный язык РФ" (36 часов, 2021); ГАОУ ТО ДПР "ТОГИРРО" (16 часов, 2022)',
        genExperience: '15 лет',
        specExperience: '5 лет',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Коровина Альбина Фаритовна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Высшее: Псковский государственный университет, Бакалавр "Информационные системы и технологии" (2014-2018), Магистр "Русская филология" (2018-2020)',
        employeeQualification: 'Учитель начальных классов',
        profDevelopment: 'ЦНОИ (АНО ДПО "Академия инноваций") "Педагогическое образование: учитель начальных классов" (560 часов, 01.11.2025-31.03.2026)',
        genExperience: '7 лет',
        specExperience: '2 года',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Машина Елена Геннадьевна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Высшее: Московский Государственный Гуманитарный Университет им. Шолохова, Педагог-психолог (2003-2008)',
        employeeQualification: 'Психолого-педагогическое образование',
        genExperience: '14 лет',
        specExperience: '2 года',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Осипова Кристина Николаевна',
        post: 'Учитель начальных классов',
        teachingDiscipline: 'Начальные классы',
        teachingLevel: 'Высшее: Волгоградский государственный социально-педагогический университет, Специальное (дефектологическое) образование, Учитель-логопед (2017-2021)',
        employeeQualification: 'Учитель-логопед, учитель-дефектолог',
        profDevelopment: 'АНО ДПО "Наро-Фоминский социально-деловой центр "Карьера" "Логопедия" (авг. 2023 - дек. 2023); АНО ДПО "Московская академия профессиональных компетенций" "Специальное (дефектологическое)" (апр. 2024 - фев. 2025)',
        genExperience: '2 года',
        specExperience: '2 года',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Саваскул Елена Анатольевна',
        post: 'Учитель русского языка и литературы',
        teachingDiscipline: 'Русский язык, Литература',
        teachingLevel: 'Среднее специальное: Ставропольское высшее педагогическое училище, Воспитатель ДОУ (1996). Высшее: Ставропольский педагогический университет, Филология (2006)',
        employeeQualification: 'Учитель русского языка и литературы',
        profDevelopment: 'Московская академия профессиональных компетенций "Содержание и применение ФГОС ООО" (72 часа, 2022); "Преподавание родного языка и литературы" (144 часа, 2022)',
        genExperience: '23 года',
        specExperience: '4 года',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Семенова Татьяна Владимировна',
        post: 'Учитель математики',
        teachingDiscipline: 'Математика',
        teachingLevel: 'Высшее: Хабаровский Государственный педагогический университет, Физико-математический факультет, Учитель математики и информатики (1989-1995)',
        employeeQualification: 'Учитель математики и информатики',
        profDevelopment: 'Центр дополнительного образования "Луч знаний" "Особенности преподавания учебного курса «Вероятность и статистика» в рамках реализации ФОП ООО и СОО" (108 часов)',
        genExperience: '17 лет',
        specExperience: '5 лет',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Афанасьева Валентина Николаевна',
        post: 'Учитель изобразительного искусства',
        teachingDiscipline: 'Изобразительное искусство',
        teachingLevel: 'Высшее техническое: МГТУ им. Н.Э. Баумана, Инженер "Стартовые и технические комплексы ракет и космических аппаратов" (2016)',
        employeeQualification: 'Учитель изобразительного искусства',
        profDevelopment: 'ООО "Центр повышения квалификации и переподготовки "Луч знаний" "Изобразительное искусство: теория и методика преподавания" (1000 часов, сент. 2025 - ноя. 2025)',
        genExperience: '8 лет',
        specExperience: '3 года',
        teachingOp: 'ООП НОО, ООП ООО',
    },
    {
        fio: 'Аллахвердиев Константин Альбертович',
        post: 'Учитель физической культуры',
        teachingDiscipline: 'Физическая культура',
        teachingLevel: 'Высшее: Бурятский Государственный Университет, Факультет физической культуры, спорта и туризма (2005-2010)',
        employeeQualification: 'Учитель физической культуры',
        genExperience: '12 лет',
        specExperience: '2 года',
        teachingOp: 'ООП НОО',
    },
    {
        fio: 'Гончаров Александр Юрьевич',
        post: 'Учитель истории',
        teachingDiscipline: 'История, Обществознание',
        teachingLevel: 'Высшее: Юридический институт Сибирского федерального университета, Бакалавр (2012). Магистратура: Институт экономики, управления и природопользования СФУ (2014)',
        employeeQualification: 'Учитель истории и обществознания',
        profDevelopment: 'КГПИ им. В.П. Астафьева "Учитель истории и обществознания" (2024-2025)',
        genExperience: '7 лет',
        specExperience: '1 год',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Кубик Валерия Евгеньевна',
        post: 'Учитель английского языка',
        teachingDiscipline: 'Английский язык',
        teachingLevel: 'Высшее: Иркутский государственный университет, Институт филологии, иностранных языков и медиакоммуникации, Лингвистика "Перевод и переводоведение" Английский-корейский (2017-2021, диплом с отличием)',
        employeeQualification: 'Лингвист-переводчик',
        genExperience: '2 года',
        specExperience: '2 года',
        teachingOp: 'ООП НОО, ООП ООО',
    },
    {
        fio: 'Долгов Георгий Дмитриевич',
        post: 'Учитель биологии',
        teachingDiscipline: 'Биология',
        teachingLevel: 'Высшее: Уфимский Университет науки и технологий (УУНиТ), Химический факультет, Бакалавр (2023)',
        employeeQualification: 'Бакалавр химии',
        genExperience: '2 года',
        specExperience: '2 года',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Панина Татьяна Юрьевна',
        post: 'Учитель физики',
        teachingDiscipline: 'Физика',
        teachingLevel: 'Высшее: Пермский национальный исследовательский политехнический университет, Электротехническая специальность "Инноватика" (2019)',
        employeeQualification: 'Инженер-инноватор',
        genExperience: '4 года',
        specExperience: '1 год',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Сайфетдинов Тимур Мавлютович',
        post: 'Учитель физической культуры',
        teachingDiscipline: 'Физическая культура',
        teachingLevel: 'Высшее: Московский институт инженеров транспорта, Инженер-строитель железных дорог (2006). Российский государственный университет физической культуры, спорта, молодёжи и туризма, Инструктор по спорту (2020). Московский институт открытого образования, Педагог по физической культуре и спорту (2017)',
        employeeQualification: 'Педагог по физической культуре и спорту, инструктор по спорту',
        profDevelopment: 'ВФСК "Готов к труду и обороне" (ГТО)',
        genExperience: '15 лет',
        specExperience: '2 года',
        teachingOp: 'ООП ООО',
    },
    {
        fio: 'Чакур Надежда Сергеевна',
        post: 'Учитель географии, учитель труда',
        teachingDiscipline: 'География, Технология (труд)',
        teachingLevel: 'Высшее: Белорусский государственный университет, Географический факультет, Преподаватель географии, географ (2005)',
        employeeQualification: 'Преподаватель географии, географ',
        profDevelopment: '"Особенности подготовки к проведению ВПР в рамках мониторинга качества образования по учебному предмету «География» в условиях реализации ФГОС ООО" (дек. 2025)',
        genExperience: '17 лет',
        specExperience: '2 года',
        teachingOp: 'ООП ООО',
    },
];

export default function EmployeesPage() {
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
                        { label: 'Педагогический состав' }
                    ]} />

                    <h1 className={`text-4xl font-bold mb-8 ${getTitleClasses()}`}>Педагогический состав</h1>

                    <Card>
                        <CardHeader>
                            <CardTitle>Педагогический состав образовательной организации Educamp</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className={getHeaderClasses()}>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>ФИО</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Должность</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Дисциплины</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Образование</th>
                                            <th className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}>Стаж</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${getRowClasses()} divide-y transition-colors`}>
                                        {teachers.map((teacher, idx) => (
                                            <tr key={idx} itemProp="teachingStaff">
                                                <td itemProp="fio" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.fio}</td>
                                                <td itemProp="post" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.post}</td>
                                                <td itemProp="teachingDiscipline" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.teachingDiscipline}</td>
                                                <td itemProp="teachingLevel" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.teachingLevel}</td>
                                                <td itemProp="genExperience" className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}>{teacher.genExperience}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </PageContainer>
        </div>
    );
}
