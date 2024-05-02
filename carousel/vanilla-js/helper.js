const fetchImages = async (limit) => {
    try{
        const respro = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        const res= await respro.json()
        return res
    }
    catch(e){
        return []
    }
}

const config = {
    limit: 20,
    imagesPerCarousel: 3

}

export {fetchImages, config}