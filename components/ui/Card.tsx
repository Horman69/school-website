'use client';

import React from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
}

export function Card({ children, className = '', itemProp, itemScope, itemType }: CardProps) {
    const { colorScheme } = useAccessibility();

    const props: Record<string, any> = {};
    if (itemProp) props.itemProp = itemProp;
    if (itemScope) props.itemScope = true;
    if (itemType) props.itemType = itemType;

    const getCardClasses = () => {
        if (colorScheme === 'black') {
            return 'bg-gray-900 border-gray-700 text-white';
        }
        if (colorScheme === 'white') {
            return 'bg-white border-black text-black';
        }
        if (colorScheme === 'blue') {
            return 'bg-blue-800 border-yellow-600 text-yellow-300';
        }
        return 'bg-white border-gray-200 text-gray-900';
    };

    return (
        <div
            className={`rounded-xl shadow-soft hover:shadow-soft-lg transition-shadow duration-200 border-2 ${getCardClasses()} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const { colorScheme } = useAccessibility();

    const getBorderClasses = () => {
        if (colorScheme === 'black') return 'border-gray-700';
        if (colorScheme === 'white') return 'border-black';
        if (colorScheme === 'blue') return 'border-yellow-600';
        return 'border-gray-200';
    };

    return (
        <div className={`px-6 py-4 border-b-2 ${getBorderClasses()} ${className}`}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className = '', itemProp }: { children: React.ReactNode; className?: string; itemProp?: string }) {
    const { colorScheme } = useAccessibility();

    const getTitleClasses = () => {
        if (colorScheme === 'black') return 'text-white';
        if (colorScheme === 'white') return 'text-black';
        if (colorScheme === 'blue') return 'text-yellow-300';
        return 'text-gray-900';
    };

    return (
        <h2 className={`text-2xl font-bold ${getTitleClasses()} ${className}`} {...(itemProp && { itemProp })}>
            {children}
        </h2>
    );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}
