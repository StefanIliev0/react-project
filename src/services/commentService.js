import { giveMeAll } from "./requester"


export const getComments = async (id) => {
  const comments =  await giveMeAll("comment" , "group" , id);
  const remakeComments = comments.map(c => ({
        id : c.id ,
        postOwner : c.attributes.postOwner, 
        text : c.attributes.text 
  }))
  return remakeComments
}