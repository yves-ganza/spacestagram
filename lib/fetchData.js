export default async function fetchData(id='', start='', end='', count=null){

    if(count){
        const response = await fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=${process.env.API_KEY}`)
        const data = await response.json()
        return data
    }

    if(id){
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${id}&api_key=${process.env.API_KEY}`)
        const data = await response.json()
        return data
    }
    const response = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${ start || '2021-09-01'}&api_key=${process.env.API_KEY}`)
    const data = await response.json()
    return data
}