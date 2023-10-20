export const getLangProgress = async (req, res) => {
    try {
        const url = `https://api.crowdin.com/api/v2/projects/${process.env.CROWDIN_ID}/languages/progress?limit=200`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CROWDIN_SECRET}`
            }
        });
        const data = await response.json();
        if (!data?.data) return res.json({ ok: false });
        const languages = data.data.map(lang => {
            return { id: lang.data.language.id, name: lang.data.language.name, progress: lang.data.translationProgress, approval: lang.data.approvalProgress }
        });
        languages.push({ id: 'en', name: 'English', progress: 100 });
        return res.json({ ok: true, languages });
    } catch (err) {
        console.error(err);
        return res.json({ ok: false });
    }
} 