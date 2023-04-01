
export function checkRegisterData({email, password ,repeatPassword ,nickname, age }){

let errors = [] ;

  if(!(/^.+@\w+\.\w+$/m.test(email))){
    errors.push({ message : "Email is`t corect!"});
  };
  if(!(/^.{6,}$/m.test(password))){
    errors.push({ message : "Password must be more 5 characters length!"});
  };
  if(password !== repeatPassword){
    errors.push({ message : "Paswords must match!"});
  };
  if(!(/^.{2,}$/m.test(nickname))){
    errors.push({ message : "Nickname must be more 2 characters length!"});
  };
  if(!(/^[1-9]\d{0,1}$/m.test(age))){
      errors.push({ message : "Age must be number betwen 1 and 99!"});
  };


  return errors


}

export function checkLoginData({email, password}){

  let errors = [] ;
  
    if(!(/^.+@\w+\.\w+$/m.test(email))){
      errors.push( { message : "Email is`t corect!"});
    };
    if(!(/^.{6,}$/m.test(password))){
      errors.push({ message : "Password must be more 5 characters length!"});
    };
    return errors
  
  
  }


const checkActivitytitle = (input) => !(/^\w{3,}$/m.test(input))? "Activity title must be more by 2 letters!" : '' ;
const checkType = (input) => {
if( input !== "sport" && input !== "relax" && input !== "holiday" && input !== "meeting" && input !== "party" && input !== "trip" && input !== "other"){
 return "Type must be one of the suggested options!";
}
return ''
};
const checkDate = (input) => {
  if(!(/^\d{4}-\d{2}-\d{2}$/m.test(input))){
    return "Date must be on current format!" ;
  } ;
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
const checkALocation = (input) =>  (input.location.length < 3 || input.county.length) > 3 ? "Location inputs must be more 2 letters" : '' ;
const checkDescription = (input) => input.length < 20? "Description title must be more by 20 letters!" : '' ;


export const checkInput = {
  "activity title" : checkActivitytitle ,
  "type" : checkType , 
  "date" : checkDate ,
  "location" : checkALocation ,
  "activity description" : checkDescription
}