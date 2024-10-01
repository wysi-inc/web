import { readdir } from "node:fs/promises";
import { log } from "./logs";

const BASEDIR = ".";
export let TRANSLATIONS: any = {};

export async function load_translations() {
    try {
        const dirs = await readdir(`${BASEDIR}/locales`);
        const translations: any = {};
        for (let dir of dirs) {
            const file = Bun.file(`${BASEDIR}/locales/${dir}/translation.json`);
            const contents = await file.json();
            translations[dir] = contents;
        }
        TRANSLATIONS = translations;
        log.info("Translations read");
        return translations;
    } catch (err) {
        log.error("Error getting translations", err);
        return {};
    }
}

export function txt(lang: string, path: string): string {
    let t = path.split('.').reduce((acc, part) => acc && acc[part], TRANSLATIONS[lang]);
    if (!t) {
        t = path.split('.').reduce((acc, part) => acc && acc[part], TRANSLATIONS["en"]);
    }
    if (!t) {
        t = "";
    }
    return t;
}
