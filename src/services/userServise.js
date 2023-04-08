import { giveMe, giveMeCollection, update ,remove} from "./requester";

export async function updateProfile(data, profileId) {
    console.log(data); 
    const currentProfile = {
        imgUrl: data["profile picture"],
        nickname: data.nickname,
        age: data.age,
        location: data.location,
        interests: data.interests
    };
    await update("_User", currentProfile, profileId);
};
export async function deleteProfile(profileId) {
    await remove("_User", profileId);
};

export async function getProfileDeatails(profileId) {
    const details = await giveMe("_User", profileId);
    const groups = await giveMeCollection("groups", profileId);
    const activities = await giveMeCollection("activities", profileId);
    const remakeGroups = groups.map((g) => ({
        name: g.attributes.groupName,
        id: g.id,
        preferentType: g.attributes.preferentType,
        location: g.attributes.location,
    }));
    const remakeActyvities = activities.map(a => ({
        id: a.id,
        date: a.attributes.date,
        location: a.attributes.location,
        activityTitle: a.attributes.activityTitle,
        type: a.attributes.type,
    }));
    const remakeProfile = {
        id: details.id,
        "profile picture": details.attributes.imgUrl,
        nickname: details.attributes.nickname,
        age: details.attributes.age,
        location: details.attributes.location,
        interests: details.attributes.interests,
        activities: remakeActyvities,
        groups: remakeGroups
    };
    return remakeProfile
};