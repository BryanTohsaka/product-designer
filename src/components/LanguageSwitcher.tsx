import { useTranslation } from 'react-i18next';

const LANGS = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <select
            value={i18n.resolvedLanguage}
            onChange={e => i18n.changeLanguage(e.target.value)}
            className="cursor-pointer rounded px-2 py-1 text-Grey/40 fixed top-3 right-3 focus:outline-none bg-dark/30 backdrop-blur-2xl z-50"
        >
            {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                    {l.label}
                </option>
            ))}
        </select>
    );
}