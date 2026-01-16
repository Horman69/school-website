import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.grants;

export default function GrantsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
