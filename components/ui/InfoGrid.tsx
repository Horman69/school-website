'use client';

import React from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface InfoGridProps {
    data: Array<{
        label: string;
        value: string | React.ReactNode;
        itemprop?: string;
    }>;
    columns?: 1 | 2 | 3;
    className?: string;
}

export function InfoGrid({ data, columns = 2, className = '' }: InfoGridProps) {
    const { colorScheme } = useAccessibility();

    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    };

    const getLabelClasses = () => {
        if (colorScheme === 'black') return 'text-gray-400';
        if (colorScheme === 'white') return 'text-gray-700';
        if (colorScheme === 'blue') return 'text-yellow-400';
        return 'text-gray-700';
    };

    const getValueClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-100';
        return 'text-gray-900';
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
            {data.map((item, idx) => (
                <div key={idx} className="space-y-1">
                    <dt className={`text-sm font-bold uppercase tracking-wide ${getLabelClasses()}`}>
                        {item.label}
                    </dt>
                    <dd
                        className={`text-base font-medium ${getValueClasses()}`}
                        {...(item.itemprop && { itemProp: item.itemprop })}
                    >
                        {item.value}
                    </dd>
                </div>
            ))}
        </div>
    );
}
