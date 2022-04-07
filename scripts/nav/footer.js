export const Footer = () => {

    // HTML to be returned to GiffyGram component
    return `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
                <span id="postCount">0</span>
            </div>
            <div>
            <p>Copyright &copy; ${(new Date().getFullYear())}</script> Built by Pinewood Retirement Home C55</p>
            </div>
        </footer>
    `
}