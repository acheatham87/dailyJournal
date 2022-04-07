/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const entryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
        <h4 class="journalTitle">${entryObj.concept}</h4>
            <p class="journalDate">Date: ${entryObj.date}</p>
            <p class="journalMood">Mood: ${entryObj.mood}</p>
            <p class="journalContent">${entryObj.entry}</p>
        </section>
    `
}
