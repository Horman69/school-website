import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.common;

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
