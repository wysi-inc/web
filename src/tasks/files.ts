import { readdir } from "node:fs/promises";
import { Worker } from 'worker_threads'
import { log } from "./logs";
import type { LanguagesType, SubdivisionFlagsType } from "../types/countries";
import path from 'path'

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
        create_worker_task('load_translations'),
        create_worker_task('load_languages'),
        create_worker_task('load_subdivisions')
    ]);
}

async function create_worker_task(taskName: string): Promise<any> {
    return new Promise((resolve) => {
        const worker = new Worker(path.join(__dirname, 'worker.ts'), { workerData: { taskName }})
        // path.join(__dirname, 'worker.js') is just like `${__dirname}/worker.js`
  
        worker.once('message', (data) => resolve(data))
    })
}
