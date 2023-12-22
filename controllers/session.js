// Import necessary libraries and modules
import jwt from "jsonwebtoken";
import { v2 } from "osu-api-extended";

// Handle user login
export const login = async (req, res) => {
  // Validate the code and retrieve user data
  const user = await getOwnData(await validateCode(req.body.code));

  // Check if the user is already authenticated
  if (user.authentication) return user;

  // Prepare user data for Json web token(JWT) creation
  const jwtUser = {
    id: user.id,
    ip: req.ip,
  };

  // Return user data and a JWT for future authentication
  return res.json({
    user,
    jwtUser: jwt.sign(jwtUser, process.env.CLIENT_SECRET, {
      expiresIn: "7d",
    }),
  });
};

// Handle user logout
export const logout = async (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy();

  // Return a success message
  return res.json({ message: "Logged out successfully" });
};

// Check if a user is logged in
export const isLogged = async (req, res) => {
  const { token } = req.body;
  const dUser = jwt.decode(token);

  if (dUser.ip !== req.ip) return { logged: false };

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

// Function to get the user's data from the osu.ppy.sh API
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

// Function to validate the user's code and obtain an access token
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
