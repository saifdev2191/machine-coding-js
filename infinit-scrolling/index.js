document.addEventListener("DOMContentLoaded", function () {
    const pageEl = document.querySelector(".prim-wrapper")
    const targetL = document.querySelector(".target-el")
    const productLimit = 10
    let itemToSkip = 0
    let data= {}
    let allProducts = []

    function setIntersectionObserver(){
        const observer = new IntersectionObserver((entries) => {
            const el = entries[0]
            if(el.isIntersecting){
                fecthData(itemToSkip);
                itemToSkip = itemToSkip+10
            }
        }, {
            threshold: 1
        })
        observer.observe(targetL)
    }


    async function fecthData(){
        try{
            const respro =await fetch(`https://dummyjson.com/products?limit=${productLimit}&skip=${itemToSkip}`)
            const productsList = await respro.json()
            data = productsList;
            let currentProducts = productsList.products;
            allProducts = [...allProducts, ...currentProducts ]
            render()
        }
        catch(e){
        }
    }

    function render(){
        pageEl.textContent = ""
        for(let i = 0; i < allProducts.length; i++){
            const eachProductWrapper = document.createElement("div")
            eachProductWrapper.classList.add("each-product")
            const eachImageWrapper =  document.createElement("img")
            eachImageWrapper.setAttribute("src", allProducts[i].thumbnail)
            eachImageWrapper.setAttribute("alt", allProducts[i].description)
            const desWrapper = document.createElement("div")
            desWrapper.textContent = allProducts[i].description;
            eachProductWrapper.appendChild(eachImageWrapper)
            eachProductWrapper.appendChild(desWrapper)
            pageEl.appendChild(eachProductWrapper)
        }
    }

    
    setIntersectionObserver()

})