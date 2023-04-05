import { add , update,   create,  giveMe, giveMeAll , giveMeMembers, giveMeOwner, removeUser, replace , addMember } from "./requester";

export async function getAllActivities (){
   const activites =   await giveMeAll("activity" , "all") ;
    const remakeActyvity = activites.map( a => ({ 
        id : a.id  ,
        date : a.attributes.date ,
        location : a.attributes.location ,
        activityTytle : a.attributes.activityTytle ,
        type : a.attributes.type ,
    }))
return remakeActyvity
}

export async function createNewActivity(data , creator ){
    let currentActivity = { 
        accessibility : data.accessibility , 
        activityTitle : data["activity title"] ,
         type : data.type,
         date : data.date , 
         location : data.location , 
         activityDescription : data["activity description"] } ;

     const fetchCurrentActivity =  await create("activity" , currentActivity , creator ) ; 
     return {...currentActivity , id : fetchCurrentActivity.id }

}

export async function getActivityDeatails (atcId){
    const details  = await giveMe("activity" , atcId) ;
    const owner = await giveMeOwner("activity" , atcId) ;
    const members = await giveMeMembers("activity" , atcId) ; 
    const remakeOwner = {
        id : owner[0].id ,
        imgUrl : owner[0].attributes.imgUrl ,
        nickname : owner[0].attributes.nickname 
};
    const remakeMembers = members.map(m => ({ id : m.id ,
   imgUrl : m.attributes.imgUrl ,
   nickname : m.attributes.nickname 
})) ;
    const remakeActyvity = { 
        id : details.id  ,
        date : details.attributes.date ,
        location : details.attributes.location ,
        "activity title" : details.attributes.activityTitle ,
        "activity description" : details.attributes.activityDescription ,
        type : details.attributes.type , 
        members : remakeMembers ,
        creator : remakeOwner ,
    }
    return remakeActyvity
}
 export async function joinNewMemberToActivity(activityId){
  await addMember("activity", activityId) ; 
 }
export async function updateActivity (data , activityId){
    let currentActivity = { 
        accessibility : data.accessibility , 
        activityTitle : data["activity title"] ,
         type : data.type,
         date : data.date , 
         location : data.location , 
         activityDescription : data["activity description"] } ;
    await update("activity", currentActivity , activityId) ; 
}

export async function replaceLocations ( data , activityId){
   await replace("activity" , "location" , data , activityId) ; 
}
export async function removeUserFromActivity (activityId, userId){
    await removeUser("activity" , activityId , userId) ; 
}