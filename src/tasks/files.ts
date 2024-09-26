import { readdir } from "node:fs/promises";

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
        return translations;
    } catch (err) {
        console.error(err);
        return {};
    }
}
