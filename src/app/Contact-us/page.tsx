import { FaPhone, FaFacebook , FaInstagram , FaTiktok , FaDiscord  } from "react-icons/fa6";


export default function Contactus () {
    return(
        <div className="contactus">
            <div className="monallogo">Monal Islamabad</div>
            <div className="info"><h1>Contact us</h1>
            051-111-777-778 <br />

+92 51 2898044, 55, 66, 77, 88 <br />

9 km, Islamabad  Pirsohawa Road, <br />
Islamabad, Pakistan 

<p className="number"
> <FaPhone className="icon" />
0336-8433358 <br />
<FaPhone className="icon" /> 0301-8433359</p>

<FaInstagram className="socials" />
<FaFacebook  className="socials"/>
<FaTiktok className="socials" />
<FaDiscord className="socials"/> 




            </div>
          
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6568004043243!2d73.06310487453594!3d33.760094433102154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf49c71bac3b%3A0x440c38883a64cd51!2sThe%20Monal%20Islamabad!5e1!3m2!1sen!2s!4v1732614928223!5m2!1sen!2s" width="400" height="300"></iframe>
</div>
        
            
        </div>
    )
}