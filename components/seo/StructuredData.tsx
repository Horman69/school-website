'use client';

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "EduCamp",
        "alternateName": "Едукамп",
        "url": "https://educamp.site",
        "logo": "https://educamp.site/logo.png",
        "description": "Российская школа и детский сад в Нячанге, Вьетнам. Образование для детей от 4 до 12 лет по российской программе.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN",
            "addressLocality": "Нячанг",
            "addressRegion": "Кханьхоа",
            "streetAddress": "Nha Trang, Vietnam"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.2388",
            "longitude": "109.1967"
        },
        "email": "info@educamp.site",
        "sameAs": [
            "https://t.me/educampvietnam"
        ],
        "foundingDate": "2023",
        "priceRange": "$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function WebSiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "EduCamp",
        "url": "https://educamp.site",
        "description": "Официальный сайт образовательной организации EduCamp - школа и детский сад в Нячанге, Вьетнам",
        "inLanguage": "ru",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://educamp.site/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://educamp.site${item.url}`
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
