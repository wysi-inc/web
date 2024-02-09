import { v2 } from "osu-api-extended";
import OnlineDot from "../users/u_panels/u_components/OnlineDot";

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

    return (
        <div id="search-results">
            {users.map((user, i) =>
                i < limit &&
                <div class="hover:bg-base-200 flex flex-row justify-between rounded-md p-2">
                    <div class="flex flex-row gap-4">
                        <img src={`https://flagcdn.com/h40/${user.country_code.toLowerCase()}.jpg`}
                            style="width: 32px; height: 24px;" class="rounded-sm" />
                        <a href={`/users/${user.id}`} class="flex flex-row items-center gap-2">
                            {user.username}
                        </a>
                    </div>
                    <div class="flex justify-center">
                        <OnlineDot size={24} online={user.is_online} />
                    </div>
                </div>
            )}
        </div>
    );
}



export default SearchResults;
