import { ReportModel } from "@/src/models/Report";
import moment from "moment";
import Link from "../Link";

async function ReportList(p: {
    offset: number,
    limit: number,
}) {
    const reports = await ReportModel.find().lean();
    if (!reports) return <>No reports</>;
    return (<>
        {reports.map(r =>
            <tr class="hover" id={`report-${r.id}`}>
                <th>{r.id}</th>
                <td><Link url={`/users/${r.author}`}>{r.author}</Link></td>
                <td><Link url={`/users/${r.target}`}>{r.target}</Link></td>
                <td>{r.description}</td>
                <td>{moment(r.timestamp).fromNow()}</td>
                <td>
                    <button class="btn btn-error btn-xs btn-square"
                        hx-delete={`/report/${r.id}`} hx-target={`#report-${r.id}`} hx-swap="delete">
                        <i class="fa-regular fa-trash-can" />
                    </button>
                </td>
            </tr>
        )}
    </>);
}

export default ReportList;
