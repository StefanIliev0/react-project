import { addCandidate, create, giveMeAllCandidates, giveMeAllMembers } from "./requester";


export async function createNewGroup(data  ){
    let currentGroup = { 
        groupName : data["group name"] , 
        preferentType : data["preferent type"] ,
         location : data.location , 
         groupDescription : data["group description"] } ;
     const fetchCurrentGroup =  await create("group" , currentGroup ) ; 
     return {name : data["group name"] , id : fetchCurrentGroup.id } ; 

}


export async function getAllGroups (){
    const groups =   await giveMeAll("group") ;
    const members = await giveMeAllMembers("group") ;
    const remakeMembers = members.map(m => ({id : m.id})) ;
    const candidates = await giveMeAllCandidates("group") ;
    const remakeCandidates = candidates.map( c => ({id : c.id}))
     const remakeGroups = groups.map((g, i) => ({ 
         name : g.attributes.groupName  ,
         id : g.id , 
         preferentType : g.attributes.preferentType ,
         location : g.attributes.location ,
         members : remakeMembers[i] ,
         candidates : remakeCandidates[i]
     }))
 return remakeGroups
 } ;

 export async function candidateToGroup (groupId){
    const newCandidate = await addCandidate("group" , groupId); 
    return newCandidate
 };