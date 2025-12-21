'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorScheme = 'normal' | 'black' | 'white' | 'blue';

interface AccessibilityContextType {
    colorScheme: ColorScheme;
    setColorScheme: (scheme: ColorScheme) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('normal');

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('accessibility-color-scheme');
        if (saved && ['normal', 'black', 'white', 'blue'].includes(saved)) {
            setColorScheme(saved as ColorScheme);
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('accessibility-color-scheme', colorScheme);
    }, [colorScheme]);

    return (
        <AccessibilityContext.Provider value={{ colorScheme, setColorScheme }}>
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider');
    }
    return context;
}
