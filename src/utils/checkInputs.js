
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