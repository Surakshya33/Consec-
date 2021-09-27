export default function validation(values){
    let errors={}
    if(values.email>0){
        errors.email="Email already Exist"
}
    if(values.cpassword!==values.password){
          errors.cpassword="Password do not match"
  }
   return errors;
  }
  