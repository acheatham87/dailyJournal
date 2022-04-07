export const entryForm = () => {
    return `
    <div class="newEntry">
    <form action="">
        <fieldset class="">
            <label for="entryDate">Date of entry</label>
            <input type="date" class="entryDate" id="entryDate">
        </fieldset>
    </form>
    <form action="">
        <fieldset class="">
            <label for="entryConcept">Concepts covered</label>
            <input type="text" class="entryConcept" id="entryConcept">
        </fieldset>
    </form>
    <form action="">
        <fieldset class="">
            <label for="journalEntry">Journal Entry</label>
            <input type="text" class="journalEntry" id="journalEntry">
        </fieldset>
    </form>
    <form action="">
        <fieldset class="">
            <label for="mood">Current Mood</label>
            <select class="entryMood" id="entryMood">
                <option value="select"--</option>
                <option value="Sad">Sad</option>
                <option value="Ok">Ok</option>
                <option value="Happy">Happy</option>
            </select>
        </fieldset>
    </form>
    <input type="button" id="entrySubmit" value="Record Entry">
    <input type="button" id="entryCancel" value="Cancel Entry">
    </div>
    `
}