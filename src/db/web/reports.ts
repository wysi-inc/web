import { ReportModel } from "@/src/models/Report";

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
        report.save();
        return report.id;
    } catch (err) {
        console.error(err);
        return -1;
    }
}

export async function deleteReport(id: number) {
    try {
        await ReportModel.findOneAndDelete({ id });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}
