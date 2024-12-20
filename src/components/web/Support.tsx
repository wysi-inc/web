import { DonationModel } from "@/src/models/Donations";
import { env } from "bun";
import moment from "moment";
import Badge from "../user/Badge";
import Title from "./Title";

export type Contributor = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    contributions: number;
};

type Translators = {
    data: {
        data: {
            id: number;
            username: string;
            fullName: string;
            role: string;
            permissions: {
                [key: string]: string;
            };
            roles: {
                name: string;
                permissions: {
                    allLanguages: boolean;
                    languagesAccess: {
                        [key: string]: {
                            allContent: boolean;
                        };
                    } | [];
                };
            }[];
            avatarUrl: string;
            joinedAt: string;
            timezone: string;
        };
    }[];
    pagination: {
        offset: number;
        limit: number;
    }[];
};

async function Support() {

    const donations = await DonationModel.find().sort({ 'timestamp': -1 });
    const gh_res = await fetch("https://api.github.com/repos/wysi-inc/web/contributors");
    const gh_contrib = await gh_res.json() as Contributor[];

    const url = `https://api.crowdin.com/api/v2/projects/${env.CROWDIN_ID}/members`;
    const tr_res = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${env.CROWDIN_SECRET}`,
            'Content-Type': 'application/json'
        }
    });

    const tr_contrib = await tr_res.json() as Translators;

    return (<>
        <Title title="Support <3" />
        <h1 class="text-center text-2xl">We appreciate your support! {'<'}3</h1>
        <div class="flex flex-col items-center gap-4 p-4 text-center">
            <p class="text-sm italic text-neutral-content">
                This website does not (and will not) have any paid features! <br /><br />
                We know that not everyone is in a position to financially support projects,
                and we want to ensure that this website remains inclusive and accessible to all,
                regardless of their financial situation. <br />
                Instead we rely on the generosity of those who can and choose to support our work voluntarly. <br /><br />
                You can also support the project by contributing to its codebase over
                at <a class="link link-info" href="https://github.com/wysi-inc/web" target="_blank">our GitHub repo</a>,
                all help is appreciated. <br /><br />
                If you dont know how to code help with translations is also needed
                head over to <a class="link link-info" href="https://crowdin.com/project/wysi" target="_blank">Crowdin</a> to see all the translations.
            </p>
            <div class="flex flex-col items-center justify-center gap-2">
                <span>Support the website's development throught Ko-fi</span>
                <a href='https://ko-fi.com/Z8Z0SPTRT' target='_blank'>
                    <img loading="lazy" src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' class="w-44 transform rounded-full shadow-lg duration-100 ease-in-out hover:-translate-y-1" alt='Buy Me a Coffee at ko-fi.com' />
                </a>
            </div>
        </div >
        <div class="flex flex-col gap-4 rounded-lg bg-base-100 p-4">
            <h3 class="text-xl"><i class="fa-solid fa-code" /> Contributors</h3>
            <div class="flex flex-row flex-wrap items-center justify-center gap-4 rounded-lg bg-base-300 p-4">
                {gh_contrib.map((c) =>
                    <a class="avatar tooltip" href={c.html_url}
                        target="_blank" data-tip={c.login}>
                        <div class="size-12 rounded-xl">
                            <img loading="lazy" src={c.avatar_url} alt="pfp" />
                        </div>
                    </a>
                )}
            </div>
        </div>
        <div class="flex flex-col gap-4 rounded-lg bg-base-100 p-4">
            <h3 class="text-xl"><i class="fa-solid fa-language" /> Translators</h3>
            <div class="flex flex-row flex-wrap items-center justify-center gap-4 rounded-lg bg-base-300 p-4">
                {tr_contrib.data.map((c) =>
                    <a class="avatar tooltip" href={`https://crowdin.com/profile/${c.data.username}`}
                        target="_blank" data-tip={c.data.username}>
                        <div class="size-12 rounded-xl">
                            <img loading="lazy" src={c.data.avatarUrl} alt="pfp" />
                        </div>
                    </a>
                )}
            </div>
        </div>
        <div class="flex flex-col gap-4 rounded-lg bg-base-100 p-4">
            <h3 class="text-xl"><i class="fa-solid fa-heart" /> Donations</h3>
            <div class="flex flex-col gap-4">
                {donations.length === 0 ?
                    <span>No donations have been made yet :(</span> :
                    donations.map(d => (
                        <div role="alert" class="alert flex flex-row items-center bg-base-300 shadow-lg">
                            <Badge badge_id={2} />
                            <div class="me-auto">
                                <h3 class="text-start font-bold">{d.is_public ? d.from_name : "Anonym"} ({d.amount} {d.currency})</h3>
                                <div class="text-start text-xs">{d.is_public ? d.message : ""}</div>
                            </div>
                            <span>{moment(d.timestamp).fromNow()}</span>
                        </div>
                    ))}
            </div>
        </div>
    </>);
}

export default Support;
