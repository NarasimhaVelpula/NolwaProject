export const updateProfile=(data)=>{
    console.log(data)
    return({
        type:"addDetails",
        payload:data
    })
}