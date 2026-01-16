import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.inter;

export default function InterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
