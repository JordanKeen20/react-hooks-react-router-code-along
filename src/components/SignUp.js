import React from 'react';
function SignUp (){
    return (
      <div>
        <h1>Sign Up Here</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  export default SignUp;