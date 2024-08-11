
export async function login(authDetail) {
    const requestOptions = {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(authDetail)
      }
      const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOptions);
      if(!response.ok){
        throw { message: response.statusText, status: response.status}
   }
      const data = await response.json();
      console.log(data);
   
  
  
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      }
    return data;
}

export async function register(authDetail) {
  const requestOptions = {
    method : "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(authDetail)
  }
   const response = await fetch(`${process.env.REACT_APP_HOST}/register`, requestOptions);
   if(!response.ok){
    throw { message: response.statusText, status: response.status}
}
   const data = await response.json();
   console.log(data);
   if(data.accessToken){
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}

export async function logout(authDetail) {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");

}