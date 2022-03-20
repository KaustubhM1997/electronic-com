import {Link} from "react-router-dom";
import "../../pages/Home/home.css";



const Footer = () => {


    return (


        <footer class="footer-container">
        <div className="grid-container">
          <div>
            <h3 className="footer-list-header">Site Links</h3>
            <ul className="footer-items-list">
             <Link className="footer-pills" to= "/product-listing"><li className="footer-items">Product Listing</li></Link> 
              <li className="footer-items">Your orders</li>
              <Link className="footer-pills" to = "/cart-management"><li className="footer-items">Cart</li></Link> 
             <Link className="footer-pills" to = "/wishlist"><li className="footer-items">Wishlist</li></Link> 
            </ul>
          </div>

          <div>
            <h3 className="footer-list-header">Socials</h3>
            <ul className="footer-items-list">
             <a href="https://github.com/KaustubhM1997/electronic-com" target="_blank" className="footer-pills"><li className="footer-items">GitHub</li></a> 
              <a href="https://www.linkedin.com/in/kaustubh-manglurkar-871ba0167/" target="_blank" className="footer-pills"><li className="footer-items">LinkedIn</li></a>
              <a href="https://twitter.com/KaustubhManglu1" target="_blank" className="footer-pills"><li className="footer-items">Twitter</li></a>
            </ul>
          </div>

          <div>
            <h3 className="footer-list-header">Let us Help You</h3>
            <ul className="footer-items-list">
            <li className="footer-items">Help</li>
              <li className="footer-items">Nozama Assistant</li>
              <li className="footer-items">Returns and Replacements</li>
              
            </ul>
          </div>
        </div>
      </footer>




    )
}

export {Footer};


