// Import necessary models for interacting with the database.
import User from "../models/User.js";
import Setup from "../models/Setup.js";

// Function to update a user's rank and rank history.
export const updateUser = async (
  userId,
  username,
  userRanks,
  countryRank,
  mode
) => {
  // Initialize a response object to store updated ranks.
  const response = {
    global_rank: [],
    country_rank: [],
  };

  // If countryRank is not provided, return the empty response.
  if (!countryRank) return response;

  try {
    // Get the current date, setting the time to midnight.
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Calculate new global ranks based on userRanks and current date.
    const newGlobal = userRanks.map((number, index) => {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - (userRanks.length - 1 - index));
      return { rank: number, date };
    });

    // Create an array for the new country rank.
    const newCountry = [
      {
        date: currentDate,
        rank: countryRank,
      },
    ];

    // Check if the user with the given userId already exists in the database.
    if (await User.exists({ userId })) {
      // If the user exists, update their data.
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
      // If the user doesn't exist, create a new user entry.
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
  } catch (err) {
    // Handle any potential errors silently.
  }
  // Return the response object with updated rank information.
  return response;
};

// Function to update a user's setup information.
export const updateSetup = async (userId, setup) => {
  // Initialize a response object with a default "ok" property set to false.
  let res = { ok: false };

  try {
    // Check if the setup information for the user already exists in the database.
    if (await Setup.exists({ userId })) {
      // If it exists, update the existing setup data.
      const setupDB = await Setup.findOne({ userId });
      setupDB.keyboard = setup.keyboard;
      setupDB.tablet = setup.tablet;
      setupDB.mouse = setup.mouse;
      setupDB.computer = setup.computer;
      await setupDB.save();
      // Set the "ok" property in the response object to true to indicate success.
      res = { ok: true };
    } else {
      // If the setup information doesn't exist, create a new setup record for the user.
      const setupDB = new Setup({
        userId,
        ...setup,
      });
      await setupDB.save();
      // Set the "ok" property in the response object to true to indicate success.
      res = { ok: true };
    }
  } catch (err) {
    // Handle any potential errors silently and set "ok" to false in the response object.
    res = { ok: false };
  }
  // Return the response object indicating whether the operation was successful.
  return res;
};

// Function to retrieve a user's setup information from the database.
export const getSetup = async (userId) => {
  try {
    // Check if the setup information for the user exists in the database.
    if (await Setup.exists({ userId })) {
      // If it exists, return the setup data.
      return await Setup.findOne({ userId });
    }
    // If not found, return null.
    return null;
  } catch (err) {
    // Handle any potential errors and return null.
    return null;
  }
};

// Helper function to merge and update rank history.
function addRanks(r_old, r_new) {
  // Create a copy of the old rank history.
  const r_final = [...r_old];

  // Iterate through the new ranks and update the existing entries or add new ones.
  for (const r of r_new) {
    const exists = r_final.find((o) => o.date.getTime() === r.date.getTime());
    if (exists) exists.rank = r.rank;
    else r_final.push(r);
  }

  // Return the merged rank history.
  return r_final;
}

