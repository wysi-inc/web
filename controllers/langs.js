export const getLangProgress = async (req, res) => {
    try {
        const url = `https://api.crowdin.com/api/v2/projects/${process.env.CROWDIN_ID}/languages/progress`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.CROWDIN_SECRET}`
            }
        });
        const data = await response.json();
        const languages = data.data.map(lang => ({ id: lang.data.language.id, name: lang.data.language.name, progress: lang.data.translationProgress }));
        languages.push({id: 'en', name: 'English', progress: 100});
        return res.json({ ok: true, languages });
    } catch (err) {
        console.error(err);
        return res.json({ ok: false });
    }
} 