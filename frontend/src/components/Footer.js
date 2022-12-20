import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer-social-media'>
               <a href="https://github.com/SargsyanBella/relq_ecommerce">Github </a>
            </div>
            <div className='footer-info'>
            <div className="footer-info-left">
            <div className='footer-info_name'>
                    Software Engineer Bella Sargsyan
                </div>
                    <div className='footer-info_returns'>
                        Returns Policy
                        <br />
                        Delivery
                     </div>   
                 </div>
            <div className="footer-info-center">
                <div className='footer-info_email'>
                    shop.info@gmail.com
                </div>
                <div className='footer-info_terms'>
                    Terms and Conditions
                    <br />
                    Copyright 2022
                </div>
                </div> 
                <div className="footer-info-right">
                <div className="footer-info_number">
                    374******
                    </div>
                <div className="footer-info_contact">
                    My Story
                    <br />
                    Contact us
                    </div>  
                </div>
                </div>
        </div>

       

    )
}

export default Footer;