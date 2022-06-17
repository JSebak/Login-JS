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
          body: user}
      ).then((response) => response.json());
}