import { create, giveMeAll, remove } from "./requester"


export const getComments = async (id) => {
  const comments = await giveMeAll("comment", "group", id);
  const remakeComments = comments.map(c => ({
    id: c.id,
    postOwner: c.attributes.postOwner,
    text: c.attributes.text
  }));
  return remakeComments;
}
export const addComment = async (text, owner, groupId) => {
  const remakeData = {
    text,
    postOwner: owner,
    group: groupId
  }
  const comment = await create("comment", remakeData);
  const remakeComment = {
    id: comment.id,
    postOwner: comment.attributes.postOwner,
    text: comment.attributes.text
  };
  return remakeComment;
};
export const deleteComment = async (objectId) => {
  await remove("comment", objectId);
}