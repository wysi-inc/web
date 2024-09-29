import { LANGUAGES } from "@/src/libs/countries";
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
    "id": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
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
    return [LANGUAGES.get(code), flags[code] || "", code]
}

function LanguageSwitcher({ lang, t }: any) {

    const language = getLang(lang);

    return (<>
        <button id="language_button" class="btn btn-square btn-ghost" onclick="language_modal.showModal()" >
            <img data-src={language[1]} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
        </button>
        <dialog id="language_modal" class="modal">
            <div class="modal-box bg-neutral p-2">
                <form method="dialog">
                    <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
                </form>
                <h3 class="mx-1 mt-2 mb-4 text-lg font-bold">Select language</h3>
                <div class="mb-4 grid grid-cols-2 gap-1">
                    {Object.keys(flags).map(l => (
                        <LanguageButton lang={getLang(l)} />
                    ))}
                </div>
                <a href="https://crowdin.com/project/wysi" class="btn col-span-full btn-accent btn-block" target="_blank">
                    <span class="flex flex-row gap-4">
                        <i class="float fa-solid fa-arrow-up-right-from-square left-2 float-left" />
                        <span>{t.nav.help}</span>
                    </span>
                </a>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </>);

}

export default LanguageSwitcher;
