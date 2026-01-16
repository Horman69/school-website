import { Metadata } from 'next';
import { svedenMetadata } from '@/lib/metadata';

export const metadata: Metadata = svedenMetadata.employees;

export default function EmployeesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
