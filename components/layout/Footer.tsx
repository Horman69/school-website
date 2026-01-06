import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Контакты */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Контакты</h3>
                        <div className="space-y-2 text-sm">
                            <p>г. Нячанг, Вьетнам</p>
                            <p>Тел: Уточняется</p>
                            <p>Telegram: @Educampvietnam</p>
                        </div>
                    </div>

                    {/* Разделы */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Разделы</h3>
                        <div className="space-y-2 text-sm">
                            <Link href="/sveden/common" className="block hover:text-white transition-colors">
                                Основные сведения
                            </Link>
                            <Link href="/sveden/education" className="block hover:text-white transition-colors">
                                Образование
                            </Link>
                            <Link href="/sveden/document" className="block hover:text-white transition-colors">
                                Документы
                            </Link>
                        </div>
                    </div>

                    {/* Информация */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Информация</h3>
                        <div className="space-y-2 text-sm">
                            <p>© 2024 Edu Camp</p>
                            <p className="text-xs text-gray-500">
                                Российское образование<br />
                                во Вьетнаме<br />
                                г. Нячанг
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
