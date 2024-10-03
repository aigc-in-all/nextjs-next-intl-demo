import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'de', 'zh'],

    // Used when no locale matches
    defaultLocale: 'en',

    // 默认语言不在 path 前面显示 locale
    localePrefix: 'as-needed',
    
    // 不做语言自动检测和切换
    localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);