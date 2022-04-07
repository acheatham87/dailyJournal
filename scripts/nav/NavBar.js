export const NavBar = () => {
    return `
        <nav class="navigation">
            <div class="navigation__Title">
            <h2> -- C55 Daily Journal -- </h2>
            </div>
            <div class="navigation__item navigation__search">
                <input type="text" id="entrySearch" placeholder="Search Entries..." />
            </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout</button>
            </div>
        </nav>
    `
}