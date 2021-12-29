import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


const Login = props => {
   const [enteredEmail, setEnteredEmail] =  useState('');
   const [enteredPassword, setEnteredPassword] = useState('');
   
   useEffect(() => {
      console.log('EFFECT');
     return () => {
          console.log('CLEANEDGOOOD');
      }
   }, [enteredEmail]);

   useEffect(() => {
       const identifier = setTimeout(() => {
        console.log(enteredEmail);
       }, 500);
       return () => {
           console.log('CLEANUP');
           clearTimeout(identifier);
       }
      
   }, [enteredEmail, enteredPassword]);
   
   const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);
   };

   const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value);
   };
   
    const loginSubmitHandler = (event) => {
        event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
   };

   return (
       <div>
           <form onSubmit={loginSubmitHandler}>
               <label>Email</label>
               <input onChange={emailChangeHandler}></input>
               <label>Password</label>
               <input onChange={passwordChangeHandler}></input>
               <button type="submit">Login</button>
           </form>
       </div>
   );
};


export default Login;