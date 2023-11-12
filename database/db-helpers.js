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
    const newCountry = [{ date: currentDate, rank: countryRank }];

    let user = await User.findOne({ userId });
    if (!user) {
      // If the user doesn't exist, create a new user entry.
      user = new User({
        userId: userId,
        username: username,
        modes: {
          [mode]: {
            globalRankHistory: newGlobal,
            countryRankHistory: newCountry,
          },
        },
      });
      response.global_rank = newGlobal;
      response.country_rank = newCountry;
    } else {
      // If the user exists, update their data.
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
    }
    await user.save();
  } catch (err) {
    // Handle any potential errors.
  } finally {
    // Return the response object with updated rank information.
    return response;
  }
};

// Function to update a user's setup information.
export const updateSetup = async (userId, setup) => {
  // Initialize a response object with a default "ok" property set to false.
  try {
    // Check if the setup information for the user already exists in the database.
    let setupDB = await Setup.findOne({ userId });
    if (!setupDB) {
      setupDB = new Setup({ userId, ...setup });
    } else {
      Object.assign(setupDB, { userId, ...setup });
    }
    await setupDB.save();
    // Set the "ok" property in the response object to true to indicate success.
    return { ok: true };
  } catch (err) {
    console.error(err);
    // Handle any potential errors and set "ok" to false in the response object.
    return { ok: false };
  }
};

// Function to retrieve a user's setup information from the database.
export const getSetup = async (userId) => {
  try {
    return await Setup.findOne({ userId });
  } catch (err) {
    // Handle any potential errors and return null.
    console.error(err);
    return null;
  }
};

// Helper function to merge and update rank history.
function addRanks(r_old, r_new) {
  // Create a map of the old rank history with the date as the key.
  const rankMap = new Map(r_old.map(entry => [entry.date.getTime(), entry]));

  // Iterate through the new ranks and update the existing old entries or add new ones.
  for (const r of r_new) {
    const existingEntry = rankMap.get(r.date.getTime());
    if (existingEntry) {
      existingEntry.rank = r.rank;
    } else {
      rankMap.set(r.date.getTime(), { date: r.date, rank: r.rank });
    }
  }

  // Return the merged rank history.
  return Array.from(rankMap.values());
}
