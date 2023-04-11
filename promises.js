createpost(){
    return new Promise(() =>{

    })
}
Message() {
    return new Promise(()=> {
    })
}
updateprofilephoto(){
    return new Promise(() =>{

    })
}
const user={
   username: 'Pranab',
   lastactivitytime: '10th of April'
}
updatelastactivitytime={
    return new Promise((resolve,reject)={
        setTimeOut(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000)
    })
}
userupdatesapost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
    .then(([createPostresolves, updateLastUserActivityTimeresolves])=>{
        console.log(updateLastUserActivityTimeresolves)
    })
    .catch(err=>console.log(err))
}