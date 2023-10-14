import jwt from "jsonwebtoken";
import { v2 } from "osu-api-extended";

export const login = async (req, res) => {
  const user = await getOwnData(await validateCode(req.body.code));
  if (user.authentication) return user;
  const jwtUser = {
    id: user.id,
    ip: req.ip,
  };
  return res.json({
    user,
    jwtUser: jwt.sign(jwtUser, process.env.CLIENT_SECRET, {
      expiresIn: "7d",
    }),
  });
};

export const logout = async (req, res) => {
  req.session.destroy();
  return res.json({ message: "Logged out successfully" });
};

export const isLogged = async (req, res) => {
  const { token } = req.body;
  jwt.verify(token, process.env.CLIENT_SECRET);
  const dUser = jwt.decode(token);
  // if IPs dont match
  if (dUser.ip !== req.ip) return { logged: false };
  // look for updated user details
  const user = await v2.user.details(dUser.id);
  return res.json({
    logged: true,
    user: {
      name: user.username,
      pfp: user.avatar_url,
      id: user.id,
    },
  });
};

async function getOwnData(token) {
  return await (
    await fetch("https://osu.ppy.sh/api/v2/me/osu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();
}

async function validateCode(code) {
  const d = await (
    await fetch("https://osu.ppy.sh/oauth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `client_id=${process.env.CLIENT_ID}&client_secret=${
        process.env.CLIENT_SECRET
      }&code=${code}&grant_type=${"authorization_code"}&redirect_uri=${
        process.env.CLIENT_REDIRECT
      }`,
    })
  ).json();
  return d.access_token;
}
