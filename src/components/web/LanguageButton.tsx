function LanguageButton(p: { lang: any }) {
    return (<>
        <button class="btn btn-sm btn-ghost flex flex-row gap-2 justify-start px-1 items-center" onclick={`document.cookie = 'lang=${p.lang[2]}'; window.location.reload();`}>
            <div class="tooltip flex items-center justify-center h-5 w-7" data-tip={p.lang[0].name}>
                <img data-src={p.lang[1]} alt={`${p.lang[0].name}'s flag`} class="max-h-5 max-w-7 rounded-sm drop-shadow-solid" />
            </div>
            <span>{p.lang[0].nativeName}</span>
        </button>
    </>);
}

export default LanguageButton;
