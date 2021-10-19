export default async function fetchData(...args){//count, id, start_date

    //count
    if(args[0]){
        const response = await fetch(`https://api.nasa.gov/planetary/apod?count=${args[0]}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        if(response.status !== 200) return
        const data = await response.json()
        return data
    }

    //id
    if(args[1]){
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${args[1]}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        if(response.status !== 200) return
        const data = await response.json()
        return data
    }

    if(args[2]){
        const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${ args[2] || `${new Date().getFullYear}-01-01`}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        if(response.status !== 200) return
        const data = await response.json()
        return data
    }

}


