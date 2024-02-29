import { v2 } from "osu-api-extended";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";

type Props = {
    query: string | undefined;
}

const SearchResults = async (props: Props) => {

    if (!props.query) return <></>;

    const res = await v2.site.search({
        mode: "user",
        query: props.query,
    })

    const users = res.user.data;
    const limit = 8;

    return (<>
        {users.map((user, i) =>
            i < limit &&
            <div class="hover:bg-base-200 cursor-pointer flex flex-row justify-between rounded-md p-2"
                hx-get={`/users/${user.id}`} hx-target="#main" hx-push-url="true">
                <div class="flex flex-row gap-4">
                    <img src={`https://flagcdn.com/h40/${user.country_code.toLowerCase()}.jpg`}
                        style="width: 32px; height: 24px;" class="rounded-sm" />
                    <span class="flex flex-row items-center gap-2">
                        {user.username}
                    </span>
                </div>
                <div class="flex justify-center">
                    <OnlineDot size={24} online={user.is_online} />
                </div>
            </div>
        )}
    </>);
}



export default SearchResults;
