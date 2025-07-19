export const AddNotification =(notification)=>{
    return {
        type: "notify/Add",
        payload: notification
    }
}