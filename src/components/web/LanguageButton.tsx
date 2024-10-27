import type { LanguageName } from "@/src/types/countries";

const LanguageButton = (p: { lang: [LanguageName, string, string] }) => (
    <button
        class="btn btn-ghost btn-sm flex flex-row flex-nowrap items-center justify-start gap-2 px-1"
        onclick={`document.cookie = 'lang=${p.lang[2]}'; window.location.reload();`}
    >
        <div class="tooltip flex h-5 w-7 items-center justify-center" data-tip={p.lang[0].name}>
            <img loading="lazy" src={p.lang[1]} alt={`${p.lang[0].name}'s flag`} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
        </div>
        <span>{p.lang[0].nativeName}</span>
    </button>
);

export default LanguageButton;
