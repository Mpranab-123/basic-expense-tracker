
const posts = [];

function createPost() {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            posts.push({ title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()});

            resolve(posts)

        }, 1000)

    }) 

}

function getPosts(){

    let output=''

    for(let i=0; i<posts.length; i++){

    output += `<li>${posts[i].title} - last updated  ${(new Date().getTime() - posts[i].createdAt)/1000}- seconds ago</li>`

    }    

    document.body.innerHTML = output;

}

function updatelastactivity() {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            updatelastactivity = new Date().getTime();

            resolve(updatelastactivity);

        }, 1000)

    }) 

}

function deletePost(){

    return new Promise((resolve, reject) => {

        setTimeout( () => {

            if(posts.length > 0){

                const poppedElement  = posts.pop();

                resolve(poppedElement);

            } else {

                reject("ERROR: ARRAY IS EMPTY")

            }

        }, 1000)

    })

}

Promise.all([createPost({title: 'Post two', body: 'This is post two', createdAt: new Date().getTime}),updatelastactivity()]).then(([createPostresolve , updatelastactivityresolve]) => {console.log(createPostresolve , updatelastactivityresolve)

    getPosts()

        deletePost().then(() =>{

            getPosts();

    })
        }).catch((err) => console.log(err))


        // function createpost(){
//     return new promise(() =>{

//     })
// }
// function Message() {
//     return new promise(()=> {
// })
// }
// function updateprofilephoto(){
//     return new promise(() =>{

//     })
// }
// const user={
//    username: 'Pranab',
//    lastactivitytime: '10th of April'
// }
// updatelastactivitytime={
//     return new Promise((resolve,reject)={
//         setTimeOut(()=>{
//             user.lastactivitytime=new Date().getTime();
//             resolve(user.lastactivitytime)
//         }, 1000)
//     })
// }
// userupdatesapost(){
//     promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
//     .then(([createPostresolves, updateLastUserActivityTimeresolves])=>{
//         console.log(updateLastUserActivityTimeresolves)
//     })
//     .catch(err=>console.log(err))
// }

