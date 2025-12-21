'use client';

import React from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface Column {
    header: string;
    accessor: string;
    itemprop?: string;
}

interface MicrodataTableProps {
    data: any[];
    columns: Column[];
    parentItemprop?: string;
}

export function MicrodataTable({ data, columns, parentItemprop }: MicrodataTableProps) {
    const { colorScheme } = useAccessibility();

    const getHeaderClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-800 border-gray-600 text-white';
        }
        if (colorScheme === 'white') {
            return 'bg-gray-100 border-black text-black';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-700 border-yellow-500 text-yellow-200';
        }
        return 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200 text-gray-900';
    };

    const getRowClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-900 divide-gray-700';
        }
        if (colorScheme === 'white') {
            return 'bg-white divide-gray-300';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-800 divide-blue-600';
        }
        return 'bg-white divide-gray-100';
    };

    const getRowHoverClasses = () => {
        if (colorScheme === 'black') {
            return 'hover:bg-gray-800';
        }
        if (colorScheme === 'white') {
            return 'hover:bg-gray-100';
        }
        if (colorScheme === 'blue') {
            return 'hover:bg-blue-700';
        }
        return 'hover:bg-gray-50';
    };

    const getCellTextClasses = () => {
        if (colorScheme === 'black') {
            return 'text-white';
        }
        if (colorScheme === 'white') {
            return 'text-black';
        }
        if (colorScheme === 'blue') {
            return 'text-yellow-100';
        }
        return 'text-gray-900';
    };

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-black';
        if (colorScheme === 'blue') return 'border-yellow-600';
        return 'border-gray-200';
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className={getHeaderClasses()}>
                        {columns.map((col, idx) => (
                            <th
                                key={idx}
                                className={`border-b-2 ${getBorderClasses()} px-4 py-3 text-left text-sm font-bold`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={`${getRowClasses()} divide-y`}>
                    {data.map((row, rowIdx) => (
                        <tr
                            key={rowIdx}
                            {...(parentItemprop && { itemProp: parentItemprop })}
                            className={`transition-colors ${getRowHoverClasses()}`}
                        >
                            {columns.map((col, colIdx) => (
                                <td
                                    key={colIdx}
                                    {...(col.itemprop && { itemProp: col.itemprop })}
                                    className={`px-4 py-3 text-sm font-medium ${getCellTextClasses()}`}
                                >
                                    {col.accessor === 'websiteUchred' && row[col.accessor] ? (
                                        <a
                                            href={row[col.accessor]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={colorScheme === 'blue' ? 'text-yellow-300 hover:text-yellow-200 underline font-bold' : 'text-primary-600 hover:text-primary-700 underline'}
                                        >
                                            {row[col.accessor]}
                                        </a>
                                    ) : (
                                        row[col.accessor] || '-'
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
