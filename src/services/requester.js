import Parse from "parse";

const PARSE_APPLICATION_ID = '2ySiXPiUUtLEQIZr5sCidlwG6jxrgj2le85EdIl0';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'iOPsJjp5ejurFjOmWDABK1QqL18AEgOVXrwKpjOz';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


export const register = async (username, password, newUserData) => {
    const newUser = new Parse.User({ username, password, ...newUserData });
    await newUser.signUp()
    return newUser;
}
export const login = async (email, password) => {
    await Parse.User.logOut()
    const userData = await Parse.User.logIn(email, password);
    return userData

}
export const logout = async () => {
    await Parse.User.logOut();
    return
}
export const giveMeAll = async (type, search) => {
    let collection
    const newParseQuery = new Parse.Query(type);
    if (search) {
        collection = await newParseQuery.equalTo('accessibility', search).find();
    } else {
        collection = await newParseQuery.find();
    }
    return collection;
}
export const giveMeAllMembers = async (type) => {
    const newParseQuery = new Parse.Query(type);
    newParseQuery.include("members");
    const collection = await newParseQuery.find();
    const members = collection.map( async (c) => {
        const member = await  c.relation("members").get() ; 
        return member 
    })
    return members;
}
export const giveMeAllCandidates = async (type) => {
    const newParseQuery = new Parse.Query(type);
    newParseQuery.include("candidates");
    const collection = await newParseQuery.find();
    const candidates =  collection.map( async (c) => {
        const candidate = await  c.relation("candidates").get() ; 
        return candidate 
    })
    return candidates;
}

export const create = async (type, data) => {
    const Owner = Parse.User.current();
    const newParseQuery = new Parse.Object(type, data);
    newParseQuery.relation("ownerId").add(Owner);
    const newActivity = await newParseQuery.save();
    if (type === "activity") {
        Owner.relation("activities").add(newParseQuery);
    } else if (type === "group") {
        Owner.relation("groups").add(newParseQuery);
    }
    await Owner.save();
    return newActivity;
};
export const giveMeOwner = async (type, id) => {
    const newParseQuery = new Parse.Query(type);
    newParseQuery.include("ownerId");
    const currentParse = await newParseQuery.get(id);
    const owner = await currentParse.relation("ownerId").query().find();
    return owner;
}
export const giveMeMembers = async (type, id) => {
    const newParseQuery = new Parse.Query(type);
    newParseQuery.include("members");
    const currentParse = await newParseQuery.get(id);
    const members = await currentParse.relation("members").query().find();
    return members;
}; 
export const giveMe = async (type, id) => {
    const newParseQuery = new Parse.Query(type);
    const currentParse = await newParseQuery.get(id);
    return currentParse
}
export const addMember = async (type, id) => {
    const user = Parse.User.current();
    const newParseQuery = new Parse.Query(type).get(id);
    newParseQuery.relation("members").add(user);
    const newActivity = await newParseQuery.save();
    if(type === "activity"){
    user.relation("activities").add(newParseQuery);
    }else if(type === "group"){
    user.relation("groups").add(newParseQuery);
    }
    await user.save();
    return newActivity;
}
export const addCandidate = async (type, id) => {
    const user = Parse.User.current();
    const newParseQuery = new Parse.Query(type).get(id);
    newParseQuery.relation("candidates").add(user);
    const newGroup = await newParseQuery.save();
    return newGroup;
}
export const update = async (type, data, id) => {
    const newParseQuery = await new Parse.Query(type).get(id);
    Object.keys(data).forEach(k => {
        newParseQuery.set(k, data[k]);
    })
    await newParseQuery.save();
}
export const replace = async (type, key, data, id) => {
    const newParseQuery = await new Parse.Query(type).get(id);
    newParseQuery.set(key, data);
    await newParseQuery.save();
}
export const removeUser = async (type, ObjectId, userId) => {
    let userProperty;
    const currentUser = await new Parse.Query("_User").get(userId);
    const currentObject = await new Parse.Query(type).get(ObjectId);
    if (type === "activity") {
        userProperty = "activities";
    } else if (type === "group") {
        userProperty = "groups"
    }
    currentUser.relation(userProperty).remove(currentObject);
    currentObject.relation(type).remove(currentUser);
    await currentObject.save();
    await currentUser.save();
}
































