import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.catering;

export default function CateringLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
