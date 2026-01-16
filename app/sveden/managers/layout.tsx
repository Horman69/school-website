import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.managers;

export default function ManagersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
