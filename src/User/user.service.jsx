const _url= "http://localhost:3000"
const endpoint = "/users"

export async function getUsers(){
    return await fetch(
        `${_url}${endpoint}`,
        { method: "GET" }
      ).then((response) => response.json());
}

export async function registerUser(user){
    return await fetch(
        `${_url}${endpoint}`,
        { method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }
      ).then(response => response.json())
    //   .then((response) => 
    //   {
    //     const json = response.json();
    //     const state = response.status
    //     return {
    //         result: json,
    //         state: state
    //     }
    //   })
}