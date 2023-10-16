import User from "../models/User.js";
import Setup from "../models/Setup.js";

export const updateUser = async (
  userId,
  username,
  userRanks,
  countryRank,
  mode
) => {
  const response = {
    global_rank: [],
    country_rank: [],
  };
  if (!countryRank) return response;
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const newGlobal = userRanks.map((number, index) => {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - (userRanks.length - 1 - index));
      return { rank: number, date };
    });
    const newCountry = [
      {
        date: currentDate,
        rank: countryRank,
      },
    ];

    if (await User.exists({ userId })) {
      const user = await User.findOne({ userId });
      user.username = username;
      user.modes[mode].globalRankHistory = addRanks(
        user.modes[mode].globalRankHistory,
        newGlobal
      );
      user.modes[mode].countryRankHistory = addRanks(
        user.modes[mode].countryRankHistory,
        newCountry
      );
      response.global_rank = user.modes[mode].globalRankHistory;
      response.country_rank = user.modes[mode].countryRankHistory;
      await user.save();
    } else {
      const userOsu = new User({
        userId: userId,
        username: username,
        modes: {
          [mode]: {
            globalRankHistory: newGlobal,
            countryRankHistory: newCountry,
          },
        },
      });
      await userOsu.save();
      response.global_rank = newGlobal;
      response.country_rank = newCountry;
    }
  } catch (err) { }
  return response;
};

export const updateSetup = async (userId, setup) => {
  let res = { ok: false };
  try {
    if (await Setup.exists({ userId })) {
      const setupDB = await Setup.findOne({ userId });
      setupDB.keyboard = setup.keyboard;
      setupDB.tablet = setup.tablet;
      setupDB.mouse = setup.mouse;
      setupDB.computer = setup.computer;
      await setupDB.save();
      res = { ok: true };
    } else {
      const setupDB = new Setup({
        userId,
        ...setup,
      });
      await setupDB.save();
      res = { ok: true };
    }
  } catch (err) {
    res = { ok: false };
  }
  return res;
};

export const getSetup = async (userId) => {
  try {
    if (await Setup.exists({ userId })) {
      return await Setup.findOne({ userId });
    }
    return null;
  } catch (err) {
    return null;
  }
};

function addRanks(r_old, r_new) {
  const r_final = [...r_old];
  for (const r of r_new) {
    const exists = r_final.find((o) => o.date.getTime() === r.date.getTime());
    if (exists) exists.rank = r.rank;
    else r_final.push(r);
  }
  return r_final;
}
