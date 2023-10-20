// function retrieves language translation progress from crowdin API
export const getLangProgress = async (req, res) => {
  try {
    // Construct the URL to Crowdin API using the project ID from environment
    const url = `https://api.crowdin.com/api/v2/projects/${process.env.CROWDIN_ID}/languages/progress`;
    // send a GET request URL to crowdin API using project id from enviroment
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CROWDIN_SECRET}`,
      },
    });

    // Parse the response data as JSON
    const data = await response.json();

    // Check if the response data contains the 'data' property, if not, return an error response
    if (!data?.data) return res.json({ ok: false });

    // Extract language progress information from the response data
    const languages = data.data.map((lang) => ({
      id: lang.data.language.id,
      name: lang.data.language.name,
      progress: lang.data.translationProgress,
    }));

    // Add English with 100% progress to the list of languages
    languages.push({ id: "en", name: "English", progress: 100 });

    // Return a successful response with the language progress data
    return res.json({ ok: true, languages });
  } catch (err) {
    // Handle any errors that occur during the API request or data processing
    console.error(err);

    // Return an error response in case of an exception
    return res.json({ ok: false });
  }
};
