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
                            <p>г. Москва, ул. Ленина, д. 1</p>
                            <p>Тел: +7 (495) 123-45-67</p>
                            <p>Email: school1@example.ru</p>
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
                            <p>© 2024 МБОУ "СОШ №1"</p>
                            <p className="text-xs text-gray-500">
                                Сайт соответствует требованиям<br />
                                Приказа Рособрнадзора №1493<br />
                                от 04.08.2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
