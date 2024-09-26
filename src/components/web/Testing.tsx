import { v2 } from "osu-api-extended";
import { marked } from "marked";
import { apicall } from "@/src/tasks/logs";

type Props = {
    params: string[],
}

async function Testing(p: Props) {

    const wiki = await v2.site.wiki("en", p.params.join("/"));
    apicall();

    console.log(wiki);

    if (!wiki) return <>Not found</>;
    if (!wiki.markdown) return <>Not found</>;

    const page = marked.parse(wiki.markdown);

    return (<>
        <div>Testing</div>
        {
            // <UserCard user_id={17018032} />
        }
        <div class="markdown-body p-4" id="wiki_markdown">
            {page}
        </div>
        <script type="module" defer src="/public/js/wiki.js" />
    </>);
}

export default Testing;
