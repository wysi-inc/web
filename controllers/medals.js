import server from "../index.js";

// This function retrieves medal data from an external API and returns it as a JSON response.
export const getMedals = async (req, res) => {
  const [ans] = await server.mysqldb.query(
    `SELECT grouping, JSON_ARRAYAGG(JSON_OBJECT(
      'medal_id', medal_id,
      'name', name,
      'link', link,
      'description', description,
      'restriction', restriction,
      'instructions', instructions,
      'solution_found', solution_found,
      'solution', solution,
      'mods', mods,
      'locked', locked,
      'video', video,
      'date', date,
      'pack_id', pack_id,
      'first_achieved_date', first_achieved_date,
      'first_achieved_by', first_achieved_by,
      'mode_order', mode_order,
      'ordering', ordering,
      'rarity', rarity
    )) AS medals
    FROM medals
    GROUP BY grouping;`
  );
  ans.forEach(a => a.medals = JSON.parse(a.medals));
  return res.json(ans);
};
