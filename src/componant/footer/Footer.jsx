import icon1 from "../../asset/icon1.png"
import icon2 from "../../asset/icon2.png"
import icon3 from "../../asset/icon3.png"
import icon4 from "../../asset/icon4.png"
import '../../style/index.css'
import './footer.css'

export default function Footer(){
    return(
        <footer className="dark footer">
            <div className="margin">
            <img src={icon1} alt=""/>
            <img src={icon2} alt=""/>
            <img src={icon3} alt=""/>
            <img src={icon4} alt=""/>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </footer>
    )
}