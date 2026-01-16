import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.objects;

export default function ObjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
