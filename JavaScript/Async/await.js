async function getData(){
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: "POST"
    })
    let data=await x.json
    return data
}

async function main(){
    console.log("Started")
    console.log("Getting data")
    let data= await getData()
    console.log(data)
    console.log("processing")
}
main()