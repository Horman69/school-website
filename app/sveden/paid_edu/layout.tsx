import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.paid_edu;

export default function PaidEduLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
