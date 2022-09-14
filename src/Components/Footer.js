import Button from "react-bootstrap/Button"


export default function Footer() {
    return (
        <div className="footer">

        <div className="Footer--footer">
        <div className="xyz">
        <h1 className="footer--footer--heading">Get In Touch</h1>
        <p style={{fontSize: "30px",color: "#FFFFFF"}}>Thinking of selling, or you know someone whom we should meet?</p>
        <div className="tagline--button" style={{textAlign:"left"}}>
                        <button>Get in Touch</button>
        </div>
        </div>

        {/* <div className="footer--lists">
        <div><ul>
            <li className="list--first">Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
        </ul></div>
        <div><ul>
        <li className="list--first">Company</li>
            <li>Terms and Conditions</li>
            <li>Privacy</li>
            <li>Contact</li>
        </ul></div>
        <div><ul>
        <li className="list--first">Get in Touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
        </ul></div>
        </div> */}

        <div className="footer--newsletter">
        <h1>Stay Updated</h1>
        <h3>Sign up to get our weekly newsletter.</h3>
        <input type="email" placeholder="user@email.com"/>
        </div>





        </div>


        <footer>© 2022 GPT-3. All rights reserved.</footer>




        </div>
    )
}