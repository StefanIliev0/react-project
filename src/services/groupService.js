import { addCandidate, create, removeUser, update, giveMeOwner, giveMeMembers, giveMe, giveMeCandidates, giveMeAll, approveUser, unapproveUser, remove } from "./requester";


export async function createNewGroup(data) {
    let currentGroup = {
        groupName: data["group name"],
        preferentType: data["preferent type"],
        location: data.location,
        groupDescription: data["group description"]
    };
    const fetchCurrentGroup = await create("group", currentGroup);
    return { name: data["group name"], id: fetchCurrentGroup.id };

};
export async function getAllGroups() {
    const groups = await giveMeAll("group");
    const remakeGroups = groups.map((g) => ({
        name: g.attributes.groupName,
        id: g.id,
        preferentType: g.attributes.preferentType,
        location: g.attributes.location,
        candidatesId: g.attributes.candidatesId || []
    }))
    return remakeGroups
};
export async function candidateToGroup(groupId) {
    const newCandidate = await addCandidate("group", groupId);
    return newCandidate
};
export async function removeUserFromGroup(groupIdId, userId) {
    await removeUser("group", groupIdId, userId);
};
export async function updateGroup(data, groupId) {
    let currentGroup = {
        groupName: data["group name"],
        preferentType: data["preferent type"],
        location: data.location,
        groupDescription: data["group description"]
    };
    await update("group", currentGroup, groupId);
};
export async function getGroupDeatails(groupId) {
    const details = await giveMe("group", groupId);
    const owner = await giveMeOwner("group", groupId);
    const members = await giveMeMembers("group", groupId);
    const candidates = await giveMeCandidates("group", groupId);
    const groupActivities = await giveMeAll("activity", "accessibility", groupId);
    const remakeActyvities = groupActivities.map(a => ({
        id: a.id,
        date: a.attributes.date,
        location: a.attributes.location,
        activityTitle: a.attributes.activityTitle,
        type: a.attributes.type,
    }))
    const remakeCandidates = candidates.map(c => ({
        id: c.id,
        imgUrl: c.attributes.imgUrl,
        nickname: c.attributes.nickname
    }));
    const remakeOwner = {
        id: owner[0].id,
        imgUrl: owner[0].attributes.imgUrl,
        nickname: owner[0].attributes.nickname
    };
    const remakeMembers = members.map(m => ({
        id: m.id,
        imgUrl: m.attributes.imgUrl,
        nickname: m.attributes.nickname
    }));
    const remakeGroup = {
        id: details.id,
        location: details.attributes.location,
        "group name": details.attributes.groupName,
        "group description": details.attributes.groupDescription,
        "preferent type": details.attributes.preferentType,
        members: remakeMembers,
        creator: remakeOwner,
        candidates: remakeCandidates,
        groupActivities: remakeActyvities,
    };
    return remakeGroup
}
export async function approveGroupCandidate(ObjectId, userId) {
    await approveUser("group", ObjectId, userId);
};
export async function unapproveGroupCandidate(ObjectId, userId) {
    await unapproveUser("group", ObjectId, userId);
};
export async function deleteGroup(groupId) {
    await remove("group", groupId);

};

