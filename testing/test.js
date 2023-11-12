import User from "../models/User.js";
import { v2 } from "osu-api-extended";

export const test = async (req, res) => {
  let last_id = await handleEvents(null);
  setInterval(async () => {
    last_id = await handleEvents(last_id);
  }, 1000);
  res.send({ response: "ok" });
};

async function handleEvents(last_id) {
  const events = await getRecentEvents(last_id);
  if (!events || events.length < 1) return last_id;
  const new_last_id = events.at(-1).id;
  // let users = await User.find({}, "username");
  // let usernames = users.map((user) => user.username);

  // console.log("users on db", usernames);
  // console.log("users that changed:");

  events.forEach((e) => {
    console.log(e.id, "-", e.user?.username);
    // if (e.user && usernames.includes(e.user.username)) {
    //   console.log(e.id, e.user.username, e.mode);
    // }
  });
  return new_last_id;
}

async function getRecentEvents(last_final_id) {
  const stort = "id_asc";
  const result = [];
  let cursor_string = "";
  let loop_final_id = 0;
  try {
    do {
      const answer = await v2.users.events({ stort, cursor_string });
      if (!answer) throw "No answer";
      if (!answer.events) throw "No events";
      for (const event of answer.events) {
        if (event.id > last_final_id) {
          result.push(event);
        }
      }
      loop_final_id = JSON.parse(atob(answer.cursor_string)).event_id;
      cursor_string = answer.cursor_string;
    } while (last_final_id !== null && loop_final_id > last_final_id);
  } catch (e) {
    //console.error(e);
  }
  return result;
}
