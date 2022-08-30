
// 1...............................................
// setTimeout(()=>
// console.log('my name is mozahid'),
// 1000)
// console.log('start')



// ..........................
// setTimeout(()=>{
//     const user=['mozahid']
//     console.log(user);
//     setTimeout(()=>{
//     },1000)
// },1000)
// console.log('start')






// PROMISE .................................................

 const myPromise=new Promise((resolve,reject) => {
const user ="mozahid";
if(!user){
    reject('somthimg is wrong')
}
else {

    setTimeout(()=>{
        resolve('success',user)
    },1000)
}
 })

 
 myPromise
 .then(res=>console.log(res))
 .catch(err=>console.log(err))
 console.log('mozahid')






