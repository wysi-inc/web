import { ReportModel } from "@/src/models/Report";
import Link from "../Link";
import moment from "moment";
import { CopyText } from "./Utils";

async function Reports() {
    const reports = await ReportModel.find().lean();
    if (!reports) return <>No reports</>;
    return (
        <table class="table table-zebra table-xs">
            <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Target</th>
                <th>Description</th>
                <th>Time</th>
                <th></th>
            </tr>
            {reports.map(r =>
                <tr class="hover" id={`report-${r.id}`}>
                    <th><CopyText text={r.id} /></th>
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
        </table>
    );
}

export default Reports;
