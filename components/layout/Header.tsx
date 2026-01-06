'use client';

import React from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/ui/SearchBar';

export function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
                        <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                            Ш
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-bold text-gray-900">Edu Camp</div>
                            <div className="text-xs text-gray-700">Официальный сайт</div>
                        </div>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:block flex-1 max-w-md mx-4">
                        <SearchBar />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6 flex-shrink-0">
                        <Link href="/" className="text-gray-800 hover:text-primary-700 font-semibold transition-colors">
                            Главная
                        </Link>
                        <Link href="/sveden/common" className="text-gray-800 hover:text-primary-700 font-semibold transition-colors">
                            Сведения
                        </Link>
                        <Link
                            href="/accessible"
                            itemProp="copy"
                            className="text-gray-800 hover:text-primary-700 font-semibold transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="hidden lg:inline">Версия для слабовидящих</span>
                            <span className="lg:hidden">Доступность</span>
                        </Link>
                    </nav>

                    {/* Search Bar - Mobile */}
                    <div className="md:hidden flex-1">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </header>
    );
}

