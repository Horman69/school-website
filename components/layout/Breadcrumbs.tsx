import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    showBackButton?: boolean;
}

export function Breadcrumbs({ items, showBackButton = true }: BreadcrumbsProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <nav className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                    Главная
                </Link>
                {items.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <span className="text-gray-600">/</span>
                        {item.href ? (
                            <Link href={item.href} className="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-semibold">{item.label}</span>
                        )}
                    </React.Fragment>
                ))}
            </nav>

            {showBackButton && (
                <Link
                    href="/#sections"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 font-semibold hover:bg-gray-50 hover:border-primary-300 transition-all shadow-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Назад</span>
                </Link>
            )}
        </div>
    );
}
