import { parentPort, workerData } from "worker_threads";
import { readdir } from "node:fs/promises";
import { log } from "./logs";

const BASEDIR = ".";

switch (workerData.taskName) {
    case "load_translations":
        try {
            const dirs = await readdir(`${BASEDIR}/locales`);
            const translations: any = {};

            for (let dir of dirs) {
                const file = Bun.file(`${BASEDIR}/locales/${dir}/translation.json`);
                const contents = await file.json();
                translations[dir] = contents;
            }

            parentPort!.postMessage(translations);

            log.info("Translations read");
        } catch (err) {
            log.error("Error getting translations", err);
        }
        break;
    case "load_languages":
        try {
            const file = Bun.file(`${BASEDIR}/data/languages.json`);
            const contents = await file.json();

            parentPort!.postMessage(contents);

            log.info("Languages read");
        } catch (err) {
            log.error("Error getting languages", err);
        }
        break;
    case "load_subdivisions":
        try {
            const file = Bun.file(`${BASEDIR}/data/subdivisions.json`);
            const contents = await file.json();

            parentPort!.postMessage(contents);

            log.info("Subdivisions read");
        } catch (err) {
            log.error("Error getting subdivisions", err);
        }
        break;
}
