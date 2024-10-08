function UserAboutPanel(p: { html: string }) {
    return (
        <div class="flex flex-col gap-4">
            <div class="peer bg-base-300 p-4 duration-500 ease-in-out overflow-hidden max-h-96" id="user_about">
                {p.html}
            </div>
            <button class="cursor-pointer btn btn-secondary btn-sm btn-wide mx-auto flex flex-row gap-4"
                onclick={`
                    if (document.getElementById('user_about').classList.toggle('max-h-96')) {
                        document.getElementById('user_about_text').innerText = 'Expand';
                        document.getElementById('user_about_icon').classList.remove('rotate-180');
                    } else { 
                        document.getElementById('user_about_text').innerText = 'Shrink';
                        document.getElementById('user_about_icon').classList.add('rotate-180');
                    };
                `}>
                <i id="user_about_icon" class="transform ease-out duration-200 fa-solid fa-caret-down" />
                <h6 id="user_about_text">Expand</h6>
            </button>
        </div>
    );
}

export default UserAboutPanel;
