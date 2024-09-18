import ReportList from "./ReportList";

async function Reports() {
    return (
        <table class="table table-xs">
            <tr>
                <th>Id</th>
                <th>Author</th>
                <th>Target</th>
                <th>Description</th>
                <th>Time</th>
                <th></th>
            </tr>
            <ReportList limit={20} offset={0} />
        </table>
    );
}

export default Reports;
