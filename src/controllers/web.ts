export async function login(jwt, setCookie, params, request) {
    const { code } = params;
    const user = await getOwnData(await validateCode(code));
    if (user.authentication) return "Unauthorized";
    const jwtUser = {
        id: user.id,
        username: user.username,
        avatar: user.avatar_url,
    };
    setCookie('auth', await jwt.sign(jwtUser), {
        httpOnly: true,
        maxAge: 7 * 86400,
    })
    return `Sign in as ${user.username}`
}

export function logout(setCookie) {
    setCookie('auth', '', { httpOnly: true, maxAge: 0 })
    return "Logged out"
}

async function getOwnData(token: string) {
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

async function validateCode(code: string) {
    return (await (await fetch("https://osu.ppy.sh/oauth/token", {
        method: "POST", headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `client_id=${process.env.OSU_ID}&client_secret=${process.env.OSU_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.OSU_REDIRECT}`,
    })
    ).json()).access_token;
}
