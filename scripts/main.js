import { getUsers, getEntries, createEntry } from "./data/dataManager.js";
import { entryList } from "./feed/entryList.js";
import { entryForm } from "./feed/entryForm.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/footer.js";

const applicationElement = document.querySelector(".dailyJournal")

const showFooter = () => {
    //Get a reference to the location on the DOM where the footer will display
    const footerElement = document.querySelector("footer");
	footerElement.innerHTML = Footer();
}

const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}

const showEntryList = () => {
    const entryElement = document.querySelector(".entryList");
    getEntries().then((allEntries) => {
        entryElement.innerHTML = entryList(allEntries)
    })
}

const showEntryForm = () => {
    const entryFormElement = document.querySelector(".entryForm");
    entryFormElement.innerHTML = entryForm()
}

const startDailyJournal = () => {
    showNavBar()
    showFooter()
    showEntryList()
    showEntryForm()
}

applicationElement.addEventListener("click", event => {
    if (event.target.id === "entryCancel") {
        showEntryForm()
    }
})

applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "entrySubmit") {
        const journalDate = document.querySelector(`.entryDate`).value
        const journalConcept = document.querySelector(`.entryConcept`).value
        const journalEntry = document.querySelector(`.journalEntry`).value
        const journalMood = document.querySelector(`.entryMood`).value
        const entryObject = {
            date: journalDate,
            concept: journalConcept,
            entry: journalEntry,
            mood: journalMood, 
        }  
        createEntry(entryObject)  
        .then(showEntryList);
    }
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
})

startDailyJournal()