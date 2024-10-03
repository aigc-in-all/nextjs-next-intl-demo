import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('About');
    return (
        <div>{t('title')}</div>
    )
}