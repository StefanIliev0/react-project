import { add ,  create,  giveMe, giveMeAll } from "./requester";


export async function createNewActivity(data , creator , imgUrl , nickname ){
    let currentActivity = {...data , _creatorId : creator , members : [{id : creator , imgUrl ,nickname }] } ; 

     await add("/activities" , currentActivity) 
    return currentActivity 

}

export async function getAllActivities (creator){
    
   const activites =   await giveMeAll("/activities") 

   const arrActivities = Object.entries(activites) ;
   const arrActivities2 = arrActivities.map(([key,value]) => ({ ...value , "actId" : key })) ;
return arrActivities2

}
export async function getActivityDeatails (atcId){
    const details = await giveMe(`/activities/${atcId}`) ;
    return details
}
 export async function joinNewMemberToActivity(member , activity ){
    await add(`/activities/${activity}/members` , member ) ;
 }
export async function updateActivity (data , activityId){
    await create(`/activities/${activityId}` , data)
}