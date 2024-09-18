import { REPORT_CATEGORIES } from "@/src/models/Report";
import type { UserCookie } from "@/src/types/users";

function Report(p: {
    author: UserCookie | null,
    target: number
}) {
    if (!p.author) {
        return (
            <div role="alert" class="alert alert-warning">
                <i class="fa-solid fa-triangle-exclamation" />
                <span>You must be logged in to make a report!</span>
            </div>
        );
    }
    return (<>
        <form class="flex flex-col gap-4" hx-trigger="submit" hx-put={`/report/${p.target}`} hx-target="#report-list" hx-swap="afterbegin" hx-on--after-request="this.reset()">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text"><span class="text-error">*</span> Reason:</span>
                </div>
                <select class="select select-bordered" required name="category">
                    {REPORT_CATEGORIES.map(opt => <option value={opt}>{opt}</option>)}
                </select>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text"><span class="text-error">*</span> Description:</span>
                </div>
                <textarea name="description" required class="textarea textarea-bordered h-24" />
            </label>
            <button type="submit" class="btn btn-primary mx-auto">
                <i class="fa-solid fa-paper-plane" />
                Report
            </button>
        </form>
        <div class="flex flex-col gap-2" id="report-list">
        </div>
    </>);
}

export default Report;
