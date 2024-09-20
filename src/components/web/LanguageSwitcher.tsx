import { languages } from "@/src/libs/constants";
import LanguageButton from "./LanguageButton";

const flags: any = {
    "af": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_South_Africa_%281928-1982%29.svg",
    "ar": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg",
    "ca": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg",
    "de": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    "en": "https://upload.wikimedia.org/wikipedia/commons/0/0b/English_language.svg",
    "el": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    "es": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    "et": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
    "fi": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    "fr": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    "gl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Galicia.svg",
    "hu": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    "it": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    "ja": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    "lv": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    "ms": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    "nl": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    "no": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    "pl": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
    "pt": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    "pt-br": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    "ru": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    "sr": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    "tr": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    "zh": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    // "zh-hant": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
    "eo": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Esperanto.svg",
    "min": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/31/Enchanting_Table.gif",
};

export function getLang(code: string) {
    return [languages.get(code), flags[code] || "", code]
}

function LanguageSwitcher({ lang, t }: any) {

    const language = getLang(lang);

    return (<>
        <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-square">
                <img src={language[1]} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
            </div>
            <div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box mt-5 z-50 p-2 shadow">
                <div class="grid grid-cols-2 gap-1 w-72 mb-2">
                    {Object.keys(flags).map(l => (
                        <LanguageButton lang={getLang(l)} />
                    ))}
                </div>
                <div class="btn btn-accent btn-block">
                    <a class="flex items-center justify-center gap-1" href="https://crowdin.com/project/wysi" target="_blank">
                        <i class="fa-solid fa-arrow-up-right-from-square" />
                        <span>{t.nav.help}</span>
                    </a>
                </div>
            </div>
        </div >
    </>);
}

export default LanguageSwitcher;
