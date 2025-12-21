'use client';

import React from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface DocumentLinkProps {
    href: string;
    children: React.ReactNode;
    itemprop?: string;
    hasSignature?: boolean;
}

export function DocumentLink({ href, children, itemprop, hasSignature = false }: DocumentLinkProps) {
    const { colorScheme } = useAccessibility();

    const getLinkClasses = () => {
        if (colorScheme === 'black') {
            return 'text-blue-400 hover:text-blue-300';
        }
        if (colorScheme === 'white') {
            return 'text-blue-700 hover:text-blue-800';
        }
        if (colorScheme === 'blue') {
            return 'text-yellow-300 hover:text-yellow-200';
        }
        return 'text-primary-600 hover:text-primary-700';
    };

    const getIconBgClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-blue-900 text-blue-300';
        }
        if (colorScheme === 'white') {
            return 'bg-blue-100 text-blue-700';
        }
        if (colorScheme === 'blue') {
            return 'bg-yellow-600 text-blue-900';
        }
        return 'bg-primary-100 text-primary-600';
    };

    const getBadgeClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-green-900 text-green-300 border-green-700';
        }
        if (colorScheme === 'white') {
            return 'bg-green-100 text-green-800 border-green-300';
        }
        if (colorScheme === 'blue') {
            return 'bg-green-700 text-yellow-200 border-green-500';
        }
        return 'bg-green-100 text-green-800 border-green-300';
    };

    return (
        <div className="flex items-center gap-3 flex-wrap">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium underline transition-colors ${getLinkClasses()}`}
                {...(itemprop && { itemProp: itemprop })}
            >
                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getIconBgClasses()}`}>
                    📄
                </span>
                <span className="break-words">{children}</span>
            </a>
            {hasSignature && (
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${getBadgeClasses()}`}>
                    ✓ ЭП
                </span>
            )}
        </div>
    );
}
