import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://educamp.site'),
  title: {
    default: 'EduCamp - Российская школа и детский сад в Нячанге, Вьетнам',
    template: '%s | EduCamp'
  },
  description: 'Школа и детский сад для детей от 4 до 12 лет. Российская образовательная программа, английский язык каждый день, еженедельные экскурсии. г. Нячанг, Вьетнам',
  keywords: ['Русская школа Нячанг', 'Детский сад Вьетнам', 'EduCamp', 'Российское образование Вьетнам', 'International school Nha Trang', 'Дошкольное образование Нячанг', 'Начальная школа Вьетнам'],
  authors: [{ name: 'EduCamp' }],
  creator: 'EduCamp',
  publisher: 'EduCamp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://educamp.site',
    siteName: 'EduCamp',
    title: 'EduCamp - Российская школа в Нячанге',
    description: 'Школа и детский сад по российской программе во Вьетнаме. Образование для детей 4-12 лет',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EduCamp - Российская школа и детский сад в Нячанге',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduCamp - Российская школа в Нячанге',
    description: 'Школа и детский сад по российской программе во Вьетнаме',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <OrganizationSchema />
        <WebSiteSchema />
        <AccessibilityProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
