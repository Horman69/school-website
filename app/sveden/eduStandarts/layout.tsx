import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.eduStandarts;

export default function EduStandartsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
