import HxA from "./HxA";

const Footer = () => (
    <footer class="bg-base-100 w-full p-4 grid grid-cols-3 items-center">
        <div>
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <HxA css="size-10 " url="/users/17018032">
                        <img src="/public/img/m4rti.webp" alt="m4rti's pfp" class="size-10 rounded-full" />
                    </HxA>
                </div>
                <div class="chat-bubble">All your feedback is appreciated!</div>
            </div>
        </div>
        <div>
        </div>
        <div class="flex justify-end">
            <a href='https://ko-fi.com/Z8Z0SPTRT' target='_blank'>
                <img class="w-44" src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' alt='Buy Me a Coffee at ko-fi.com' />
            </a>
        </div>
    </footer>
);

export default Footer;
