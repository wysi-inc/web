import HxA from "./HxA";

const Footer = () => (
    <footer class="bg-base-100 w-full p-4 grid grid-cols-3 items-center">
        <div>
            <div class="chat chat-start">
                <div class="chat-image avatar">
                    <HxA css="size-10 " url="/users/17018032">
                        <img src="https://a.ppy.sh/17018032?1711362956.png" class="size-10 rounded-full" />
                    </HxA>
                </div>
                <div class="chat-bubble">All your feedback is appreciated!</div>
            </div>
        </div>
        <div>
        </div>
        <div class="flex justify-end">
            <script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script>
            <script type='text/javascript'>kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'Z8Z0SPTRT');kofiwidget2.draw();</script>
        </div>
    </footer>
);

export default Footer;
