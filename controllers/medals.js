// This function retrieves medal data from an external API and returns it as a JSON response.
export const getMedals = async (req, res) => {
  // Send a GET request to an external API endpoint that provides medal data
  const ans = await (
    await fetch("https://osekai.net/medals/api/medals.php")
  ).json();

  // Return the retrieved data as a JSON response
  return res.json(ans);
};
