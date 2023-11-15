import server from "../index.js";

// This function retrieves medal data from an external API and returns it as a JSON response.
export const getMedals = async (req, res) => {
  const [ans] = await server.mysqldb.query("SELECT * from medals");
  return res.json(ans);
};
