import {suggestions, debounced} from "./util.js"

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-input")
    const suggestionBox = document.querySelector(".suggestion-box")
    // const dataListEl = document.querySelector(".datalist-wrap")

    let suggestionStr = ""
    let suggestionsArr = []
    let clickedSuggestion = ""


    searchBox.addEventListener("input", debounced(searchBoxInput))
    suggestionBox.addEventListener("click", handleSuggestionClick)
    // dataListEl.addEventListener("click", handleSuggestionClick)


    function searchBoxInput(e){
        suggestionsArr = []
        suggestionStr = e.target.value
        console.log(suggestionStr)
        handleSuggestions()
    }

    async function handleSuggestions(){
        suggestionsArr = await suggestions(suggestionStr)
        populateSuggestionBox()
    }

    function populateSuggestionBox(){
        suggestionBox.textContent = ""
        suggestionsArr.forEach(el => {
            const divSuggestion = document.createElement("div")
            divSuggestion.textContent = el.title
            divSuggestion.id = el.title
            suggestionBox.appendChild(divSuggestion)
        })


        // dataListEl.textContent = ""
        // suggestionsArr.forEach(el => {
        //     const optionEl = document.createElement("option")
        //     optionEl.value = el
        //     optionEl.textContent = el
        //     optionEl.id = el
        //     dataListEl.appendChild(optionEl)
        // })
    }

    function handleSuggestionClick(e){
        clickedSuggestion = e.target.id;
        searchBox.value = clickedSuggestion
        suggestionBox.textContent = ""
        // dataListEl.textContent = ""
    }
})