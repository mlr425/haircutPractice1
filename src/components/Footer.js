import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-wrap">
                <p className="footer-heading">
                    Fancy Cuts
                </p>
                
                
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'> Placeholder</Link>
                        <Link to='/'> Placeholder</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'> Testimonals</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> TOS</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Misc Links</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'> Testimonals</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> TOS</Link>
                    </div>
                </div>

            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Fancy Cuts
                        </Link>
                    </div>
                    
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook" 
                        to='/' 
                        target="_blank"
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link
                        class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                        <i class='fab fa-instagram' />
                        </Link>

                        
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default Footer
