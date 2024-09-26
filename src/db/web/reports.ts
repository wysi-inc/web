import { ReportModel } from "@/src/models/Report";
import { log } from "@/src/tasks/logs";

export async function submitReport(body: { description: string, category: string }, target: number, author: number) {
    try {
        const report = new ReportModel({
            id: Date.now(),
            author,
            target,
            description: body.description,
            category: body.category,
            timestamp: new Date(),
        })
        await report.save();
        log.success("Report saved");
        return report.id;
    } catch (err) {
        log.error("Error submitting report", err);
        return -1;
    }
}

export async function deleteReport(id: number) {
    try {
        await ReportModel.findOneAndDelete({ id });
        return true;
    } catch (err) {
        log.error("Error deleting report", err);
        return false;
    }
}
