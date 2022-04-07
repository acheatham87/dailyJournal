import { entryComponent } from "./entryComponent.js";

export const entryList = (allEntries) => {
    let entryHTML = "";
    for (const entryObj of allEntries) {
        entryHTML += entryComponent(entryObj)
    }
    return entryHTML;
}