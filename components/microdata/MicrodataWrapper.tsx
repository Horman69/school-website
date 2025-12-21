import React from 'react';

interface MicrodataWrapperProps {
    tag?: keyof JSX.IntrinsicElements;
    itemprop?: string;
    itemscope?: boolean;
    itemtype?: string;
    className?: string;
    children: React.ReactNode;
}

/**
 * Универсальный компонент для микроразметки
 * Автоматически добавляет атрибуты itemprop, itemscope, itemtype
 */
export function MicrodataWrapper({
    tag: Tag = 'div',
    itemprop,
    itemscope,
    itemtype,
    className,
    children,
}: MicrodataWrapperProps) {
    const props: Record<string, any> = {};

    if (itemprop) props.itemProp = itemprop;
    if (itemscope) props.itemScope = true;
    if (itemtype) props.itemType = itemtype;
    if (className) props.className = className;

    return <Tag {...props}>{children}</Tag>;
}
