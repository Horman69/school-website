import { Metadata } from 'next';

const SITE_URL = 'https://educampvietnam.ru';
const SITE_NAME = 'EduCamp';

export function generateSvedenMetadata(
    title: string,
    description: string,
    path: string
): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    return {
        title: fullTitle,
        description,
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: SITE_NAME,
            locale: 'ru_RU',
            type: 'website',
            images: [
                {
                    url: `${SITE_URL}/og.jpg`,
                    width: 1200,
                    height: 630,
                    alt: fullTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [`${SITE_URL}/og-image.jpg`],
        },
        alternates: {
            canonical: url,
        },
    };
}

// Metadata presets for sveden sections
export const svedenMetadata = {
    common: generateSvedenMetadata(
        'Основные сведения',
        'Полная информация об образовательной организации EduCamp: юридические сведения, контактная информация, режим и график работы школы и детского сада в Нячанге',
        '/sveden/common'
    ),

    struct: generateSvedenMetadata(
        'Структура и органы управления',
        'Структура управления образовательной организацией EduCamp, административный состав и органы управления',
        '/sveden/struct'
    ),

    document: generateSvedenMetadata(
        'Документы',
        'Устав, лицензия и основные документы образовательной организации EduCamp',
        '/sveden/document'
    ),

    education: generateSvedenMetadata(
        'Образование',
        'Информация о реализуемых образовательных программах, формах обучения, численности обучающихся в EduCamp',
        '/sveden/education'
    ),

    eduStandarts: generateSvedenMetadata(
        'Образовательные стандарты',
        'Федеральные государственные образовательные стандарты и требования, применяемые в EduCamp',
        '/sveden/eduStandarts'
    ),

    employees: generateSvedenMetadata(
        'Педагогический состав',
        'Информация о педагогических работниках EduCamp: квалификация, опыт, образование преподавателей',
        '/sveden/employees'
    ),

    managers: generateSvedenMetadata(
        'Руководство',
        'Руководство образовательной организации EduCamp',
        '/sveden/managers'
    ),

    objects: generateSvedenMetadata(
        'Материально-техническое обеспечение',
        'Информация о материально-техническом обеспечении образовательного процесса в EduCamp',
        '/sveden/objects'
    ),

    grants: generateSvedenMetadata(
        'Стипендии и меры поддержки',
        'Информация о стипендиях и других мерах поддержки обучающихся в EduCamp',
        '/sveden/grants'
    ),

    paid_edu: generateSvedenMetadata(
        'Платные образовательные услуги',
        'Информация о порядке оказания платных образовательных услуг в EduCamp',
        '/sveden/paid_edu'
    ),

    budget: generateSvedenMetadata(
        'Финансово-хозяйственная деятельность',
        'Информация о финансово-хозяйственной деятельности образовательной организации EduCamp',
        '/sveden/budget'
    ),

    vacant: generateSvedenMetadata(
        'Вакантные места',
        'Информация о вакантных местах для приема и перевода обучающихся в EduCamp',
        '/sveden/vacant'
    ),

    inter: generateSvedenMetadata(
        'Международное сотрудничество',
        'Информация о международном сотрудничестве образовательной организации EduCamp',
        '/sveden/inter'
    ),

    catering: generateSvedenMetadata(
        'Организация питания',
        'Информация об организации питания обучающихся в EduCamp',
        '/sveden/catering'
    ),
};
