
export function checkRegisterData({ username, password, repeatPassword, nickname, age }) {

  let errors = [];

  if (username.length < 5) {
    errors.push({ message: "Username must be more 5 characters length!" });
  };
  if (!(/^.{6,}$/m.test(password))) {
    errors.push({ message: "Password must be more 5 characters length!" });
  };
  if (password !== repeatPassword) {
    errors.push({ message: "Paswords must match!" });
  };
  if (!(nickname.length > 2 )) {
    errors.push({ message: "Nickname must be more 2 characters length!" });
  };
  if (!(/^[1-9]\d{0,1}$/m.test(age))) {
    errors.push({ message: "Age must be number betwen 1 and 99!" });
  };


  return errors


}

export function checkLoginData({ username, password }) {

  let errors = [];

  if (username.length < 5) {
    errors.push({ message: "Username must be more 5 characters length!" });
  };
  if (!(/^.{6,}$/m.test(password))) {
    errors.push({ message: "Password must be more 5 characters length!" });
  };
  return errors
}


const checkActivitytitle = (input) => input.length < 3 ? "Activity title must be more by 2 letters!" : '';
const checkType = (input) => {
  if (input !== "sport" && input !== "relax" && input !== "holiday" && input !== "meeting" && input !== "party" && input !== "trip" && input !== "other") {
    return "Type must be one of the suggested options!";
  }
  return ''
};
const checkDate = (input) => {
  if (!(/^\d{4}-\d{2}-\d{2}$/m.test(input))) {
    return "Date must be on current format!";
  };
  // if(input){
  // if(!(/^\d{4}-\d{2}-\d{2}$/m.test(input.from))){
  //   return "Date must be on current format!" ;
  // } ;
  // if(input.to < input.from){
  //   return  "Starting Date must be before enddate" ;
  // }
  // }
  return ''
};
const checkLocation = (input) => input.length < 3 ? "Location inputs must be more 2 letters" : '';
const checkDescription = (input) => input.length < 20 ? "Description title must be more by 20 letters!" : '';
const checkGroupName = (input) => input.length < 3 ? "Group name must be more by 2 letters!" : '';
const checkInterests = (input) => input.length < 20 ? "interests must be more by 10 letters!" : '';
const checkNickname = (input) => input.length < 3 ? "Nickname must be more by 2 letters!" : '';
const checkAge = (input) => ((Number(input) <= 0) &&  (Number(input) > 100)) ? "Nickname must be more by 2 letters!" : '';
// eslint-disable-next-line
const checkImgUrl = (input) => true ? "" : "Url is not valid!" 
export const checkInput = {
  "activity title": checkActivitytitle,
  "type": checkType,
  "date": checkDate,
  "location": checkLocation,
  "activity description": checkDescription,
  "group name": checkGroupName,
  "preferent type": checkType,
  "group description": checkDescription,
  "age" : checkAge,
  "profile picture" : checkImgUrl,
  "nickname": checkNickname,
  "interests" : checkInterests
}