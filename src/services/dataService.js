function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
     return{ token,cbid }
}
export async function getUser() {
    const browserData = getSession();
    const requestOption = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }
    const response = await fetch(`http://localhost:8000/600/users/${browserData.cbid}`, requestOption);
    if(!response.ok){
        throw { message: response.statusText, status: response.status}
   }
    const data = await response.json();
    return data;

}
export async function getUserOrder() {
    const browserData = getSession();
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${browserData.cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    });
    if(!response.ok){
        throw { message: response.statusText, status: response.status}
   }
        const data = await response.json();
         return data;

}


export async function createOrder(cartList, total, user) {
    const browserData = getSession();
    const order = {
        cartList: cartList,
        amout_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            // email: event.target.email.value,
            id: user.id,
        }
    }
    const response = await fetch(`http://localhost:8000/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    })
    if(!response.ok){
        throw { message: response.statusText, status: response.status}
   }
    const data = await response.json();

    return data;
}