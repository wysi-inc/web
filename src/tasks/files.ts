import { readdir } from "node:fs/promises";
import { log } from "./logs";
import type { LanguagesType, SubdivisionFlagsType } from "../types/countries";

const BASEDIR = ".";
export let TRANSLATIONS: any = {};
export let LANGUAGES: LanguagesType = {};
export let SUBDIVISION_FLAGS: SubdivisionFlagsType = {};

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

export async function load_json_data() {
    await Promise.all([
        load_translations(),
        load_languages(),
        load_subdivisions()
    ]);
}

async function load_translations() {
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
    } catch (err) {
        log.error("Error getting translations", err);
    }
}

async function load_languages() {
    try {
        const file = Bun.file(`${BASEDIR}/data/languages.json`);
        const contents = await file.json();
        LANGUAGES = contents;
        log.info("Translations read");
    } catch (err) {
        log.error("Error getting translations", err);
    }

}

async function load_subdivisions() {
    try {
        const file = Bun.file(`${BASEDIR}/data/subdivisions.json`);
        const contents = await file.json();
        SUBDIVISION_FLAGS = contents;
        log.info("Translations read");
    } catch (err) {
        log.error("Error getting translations", err);
    }
}
