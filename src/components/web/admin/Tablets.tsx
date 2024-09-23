import { TabletModel, type Tablet } from "@/src/models/Tablet";

async function Tablets() {
    const tablets = await TabletModel.aggregate([{ $sort: { name: 1 } }]);
    if (!tablets) return <>No Tablets Found</>;
    return (<>
        <div class="flex flex-col gap-2">
            <form class="group flex flex-row flex-wrap gap-2 items-center" hx-put={`/admin/tablets`}
                hx-swap="afterbegin"
                hx-target="#tablets_table"
                hx-target-error="#tablets_error">
                <fieldset class="peer rounded-full peer join group-disabled:hidden" id="socials_fieldset">
                    <label class="join-item input input-sm input-bordered flex items-center gap-2">
                        Name: <input required name="name" type="text" />
                    </label>
                    <label class="join-item input input-sm input-bordered flex items-center gap-2">
                        Width: <input required name="w" type="number" step="any" />
                    </label>
                    <label class="join-item input input-sm input-bordered flex items-center gap-2">
                        Height: <input required name="h" type="number" step="any" />
                    </label>
                </fieldset>
                <button class="btn btn-sm btn-circle btn-primary" type="submit">
                    <i class="fa-solid fa-plus" />
                </button>
            </form>
            <div id="tablets_error" class="flex flex-col gap-2" />
            <table class="table table-zebra table-xs">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Width (mm)</th>
                        <th>Height (mm)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tablets_table">
                    {tablets.map(t => <TabletListItem tablet={t} id={t._id.toString()} />)}
                </tbody>
            </table>
        </div>
    </>);
}

export function TabletListItem(p: { tablet: Tablet, id: string }) {
    return (
        <tr class="hover" id={`tablet_${p.id}`}>
            <td>{p.tablet.name}</td>
            <td>{p.tablet.w}</td>
            <td>{p.tablet.h}</td>
            <td>
                <button class="btn btn-error btn-xs btn-square"
                    hx-delete={`/admin/tablets/${p.id}`} hx-target={`#tablet_${p.id}`} hx-swap="delete">
                    <i class="fa-regular fa-trash-can" />
                </button>
            </td>
        </tr>
    );
}

export default Tablets;
