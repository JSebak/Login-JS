const _url= "http://localhost:3000"
const endpoint = "/users"

export async function getUsers(){
    return await fetch(
        `${_url}${endpoint}`,
        { method: "GET" }
      ).then((response) => response.json());
}

export async function registerUser(user){
  //async-await 
  //--loading from the caller
  const parsedUser = {
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    password:user.password,
    phone_number:user.phone,
    id:user.id
  }
  const response = await fetch(
    `${_url}${endpoint}`,
    { method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parsedUser)
    }
  )
  const body = await response.json()

  if(response.ok)
  {
    return body;
  }
  return Promise.reject(body)

  // Mixed
    // return  fetch(
    //     `${_url}${endpoint}`,
    //     { method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(user)
    //     }
    //   )
      ////----- .then(response => response.json())
      // .then(async (response) => 
      // {
      //   const json = await response.json();
      //   const state = response.status != 201 ? false : true
      //   return {
      //       result: json,
      //       state: state
      //   }
      // })

}