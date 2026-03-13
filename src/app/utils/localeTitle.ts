export type LocalizedTitle = { RU: string; EN: string; ON: string };

export function pickTitle(locale: string, title: LocalizedTitle) {
    return locale === "ru" ? title.RU : title.EN;
}
