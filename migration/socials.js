db.users.find({ socials: { $exists: true } }).forEach(function(user) {
    const newSocialsArray = [];

    // Define the list of social platforms
    const socialPlatforms = [
        "github", "gitlab", "twitch", "instagram", "youtube", "tiktok", "pinterest",
        "snapchat", "reddit", "tinder", "linkedin", "roblox", "microsoft",
        "soundcloud", "spotify", "facebook", "paypal", "supercell", "kick",
        "kofi", "steam", "riot", "epic", "anilist", "playstation", "linktree"
    ];

    // Loop through each platform and check if the user has a value for that platform
    socialPlatforms.forEach(function(platform) {
        if (user.socials[platform]) {
            newSocialsArray.push({
                platform: platform,
                username: user.socials[platform]
            });
        }
    });

    // Update the document in MongoDB: 
    // 1. Set the new socials array
    // 2. Unset the old individual social fields
    db.users.updateOne(
        { _id: user._id },
        { $set: { socials: newSocialsArray }, }
    );
});
