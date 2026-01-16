import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.education;

export default function EducationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
