export const getMedals = async (req, res) => {
  const ans = await (
    await fetch("https://osekai.net/medals/api/medals.php")
  ).json();

  return res.json(ans);
};
