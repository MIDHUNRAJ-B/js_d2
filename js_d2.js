/*//callback
function dog(cat){
    setTimeout(()=>{
        console.log("JACK the dog")
        cat();
    },2000) 
}
function cat(){
    console.log("ROSE the cat")
}
dog(cat)
//ex 2
function attendance(home)
{
    console.log("present")
    home()
}
function lunch(home)
{
    console.log("had lunch")
    home()
}
function homegoing(home)
{
    console.log("going home")
    home()
}
attendance (()=>{
    lunch(()=>{
        homegoing(()=>{
            console.log("day completed")
        })
    })
})
//promise
function attendance(){
    return new Promise((resolve, reject) =>{
        let a= true
        if(a)
        {
            resolve("present")
        }
        else
        {
            reject("absent")
        }
    })
}
function lunch(){
    return new Promise((resolve, reject)=> {
        let l= true
        if(l)
            resolve("eating")
        else
            reject("not eating")
    })
}
function homegoing(){
    return new Promise((resolve, reject)=>{
        let h= true
        if (h)
            resolve("going")
        else 
            reject("not going")
    })
}
attendance().then((t)=>{ console.log(t); return lunch()})
    .then((v)=>{console.log(v); return homegoing()})
         .then((s=>{console.log(s)}))

//promise catch
function a1(){
    return new Promise((resolve, reject)=>{
        let data= false
        if (data)
            resolve("data returned")
        else
            reject("data not returned")
    })
}         
a1().then((output)=>{console.log(output)}).catch((output)=> { console.log(output)})*/
//deconstructor
//promise all
let fun=()=>{
    return new Promise((resolve, reject)=>
    {
        let d=true
        if (d)
            resolve("true")
        else
            reject("false")
    })
}
let fun2=()=>{
    return new Promise((resolve, reject)=>{
        let dd= false
        if (dd)
           resolve("pass")
        else
           reject("fail")
        })

}
(async function func()
{
    try
    {
        let [a,b]=await Promise.all([fun(),fun2()])
    console.log(a,b)
    }
    catch(error){
        console.log(error)
    }
})()

