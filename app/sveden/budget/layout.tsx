import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.budget;

export default function BudgetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
