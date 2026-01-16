import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.vacant;

export default function VacantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
