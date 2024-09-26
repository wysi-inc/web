import { readdir } from "node:fs/promises";
import { log } from "./logs";

const BASEDIR = ".";

export async function get_translations() {
    try {
        const dirs = await readdir(`${BASEDIR}/locales`);
        const translations: any = {};
        for (let dir of dirs) {
            const file = Bun.file(`${BASEDIR}/locales/${dir}/translation.json`);
            const contents = await file.json();
            translations[dir] = contents;
        }
        log.info("Translations read");
        return translations;
    } catch (err) {
        log.error("Error getting translations", err);
        return {};
    }
}
