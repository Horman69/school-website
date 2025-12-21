import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
