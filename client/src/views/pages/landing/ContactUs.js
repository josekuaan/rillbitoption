import React from 'react'

import './style.css'
export default function ContactUs() {
    return (
        <div>
  <header id="mainHeader" className="header">
    {/* Start Navigation */}
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className="container">
        <a href="/"><img src="appassets/newimages/logo1.png" alt="Logo" className="navbar-brand" style={{width: 176, height: 50}} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* End Navigation */}
    <div className="clearfix" />
  </header>
  {/* Main Menu Area End */}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Page Title Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="page-title-area bg-primary" style={{backgroundImage: 'url("assets/images/shape/shape-dot1.png")'}}>
    <div className="shape-group">
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
    </div>
    {/* /.shape-group */}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="page-header-content text-center">
            <div className="page-header-caption">
              <h2 className="page-title">Contact Us</h2>
            </div>
            {/*~~./ page-header-caption ~~*/}
            <div className="breadcrumb-area">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
            {/*~~./ breadcrumb-area ~~*/}
          </div>
          {/*~~./ page-header-content ~~*/}
        </div>
      </div>
    </div>
    {/*~~./ end container ~~*/}
  </div>
  {/*~~./ end page title area ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Contact Info Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="contact-info-block ptb-120">
    <div className="container ml-b-30">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item" data-animate="hg-fadeInUp">
            <div className="icon">
              <img src="appassets/images/icon/location.png" alt="Icon" />
            </div>
            {/* /.icon */}
            <div className="card-info">
              <h2 className="heading">Address</h2>
              {/* /.heading */}
              <p>USA, Europe, Asia and partly Italy</p>
            </div>
            {/* /.card-info */}
          </div>
          {/* /.contact-info-item */}
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item" data-animate="hg-fadeInUp">
            <div className="icon">
              <img src="appassets/images/icon/phone.png" alt="Icon" />
            </div>
            {/* /.icon */}
            <div className="card-info">
              <h2 className="heading">Phone Number</h2>
              {/* /.heading */}
              <p>+447723996127</p>
            </div>
            {/* /.card-info */}
          </div>
          {/* /.contact-info-item */}
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4 col-md-6">
          <div className="contact-info-item" data-animate="hg-fadeInUp">
            <div className="icon">
              <img src="appassets/images/icon/time.png" alt="Icon" />
            </div>
            {/* /.icon */}
            <div className="card-info">
              <h2 className="heading">Working Hours</h2>
              {/* /.heading */}
              <p>Mon to Fri : 8AM to 5PM</p>
              <p>Sunday Closed</p>
            </div>
            {/* /.card-info */}
          </div>
          {/* /.contact-info-item */}
        </div>
        {/* /.col-lg-4 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end contact info block ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Contact Form Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="contact-form-block pd-b-120">
    <div className="container">
      <div className="row align-content-center">
        <div className="col-lg-6">
          <div className="contact-thumb md-mrb-60" data-animate="hg-fadeInLeft">
            <img src="appassets/images/others/contact.png" alt="Thumbnail" />
          </div>
        </div>
        {/* /.col-lg-6 */}
        <div id="mailusnow" />
        <div className="col-lg-6">
          <div className="contact-form-area">
            <h2 className="section-heading" data-animate="hg-fadeInUp">
              Get In Touch
            </h2>
            <form action="contact-us.html" className="contact-form mt-45" role="form" id="contact-form" method="POST">
              <input type="hidden" name="_token" defaultValue="okITQo8E3Mro90x4DAeBBinkr9UCP5p2OuOZcilE" />
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input className="form-controller" id="name" name="name" type="text" />
                  </div>
                </div>
                {/*./ col-12*/}
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input className="form-controller" id="email" name="email" type="email" />
                  </div>
                </div>
                {/*./ col-12 */}
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="email">Message Subject</label>
                    <input className="form-controller" id="email" name="subject" type="text" />
                  </div>
                </div>
                {/*./ col-12 */}
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="message">Type Message</label>
                    <textarea id="message" name="body" className="form-controller" rows={4} cols={50} defaultValue={""} />
                  </div>
                </div>
                {/* /.col-12 */}
                <div className="col-12 mrt-15">
                  <button type="submit" className="btn btn-default btn-primary">
                    Send Message
                  </button>
                </div>
                {/*./ col-lg-6 */}
              </div>
              {/* /.row */}
            </form>
            {/* /.contact-form */}
          </div>
          {/* /.contact-form-area */}
        </div>
        {/* /.col-lg-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end contact form block ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Contact Callus Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="contact-callus-block bg-primary" style={{backgroundImage: 'url("assets/images/shape/branch-info.png")'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-branch-info text-white ptb-120">
            <div className="section-title text-white">
              {/*<div class="subtitle" data-animate="hg-fadeInUp">Hello with Us</div>*/}
              <h2 className="title-main" data-animate="hg-fadeInUp">
                Our Branch
              </h2>
              {/* /.title-main */}
              <div className="title-text" data-animate="hg-fadeInUp">
                Visit us in any of our branches below
              </div>
              {/* /.title-text */}
            </div>
            {/* /.section-title */}
            <div className="branch-list" data-animate="hg-fadeInUp" style={{flexWrap:'wrap'}}>
              <div className="single-branch">
                <h3 className="heading">United States</h3>
                <p>382 Water Street Oakland, CA - 94612</p>
              </div>
              {/* /.single-branch */}
              <div className="single-branch">
                <h3 className="heading">Netherlands</h3>
                <p>Greffelkampseweg 200 6941 RN Didam</p>
              </div>
              {/* /.single-branch */}
              <div className="single-branch">
                <h3 className="heading">Poland</h3>
                <p>Warsaw on 46 Krucza street.</p>
              </div>
              <div className="single-branch">
                <h3 className="heading">Italy</h3>
                <p>3422 Old Capitol Trail, PMB 989, Wilmington DE 19808</p>
              </div>
              <div className="single-branch">
                <h3 className="heading">Norway</h3>
                <p>Breiviklia 26. City: Nesbru</p>
              </div>
              <div className="single-branch">
                <h3 className="heading">Australia</h3>
                <p>51 Martin Rd, Bellingen, NSW 2454</p>
              </div>
              <div className="single-branch">
                <h3 className="heading">Romania</h3>
                <p>Calea Victoriei 118. Sector 1 010093 Bucharest.</p>
              </div>
              <div className="single-branch">
                <h3 className="heading"> Czech Republic</h3>
                <p>Plzeňská 8, 150 00 Praha 5-Anděl, Czechia</p>
              </div>
              <div className="single-branch">
                <h3 className="heading">Slovakia</h3>
                <p> A. KmeÅ¥a, 122/10, 969, BanskÃ¡ Å tiavnica , Slovakia</p>
              </div>
              {/* /.single-branch */}
            </div>
            {/* /.branch-list */}
            <a href="#mailusnow" className="btn btn-default btn-white" data-animate="hg-fadeInUp">Contact Us</a>
          </div>
          {/* /.contact-branch-info */}
        </div>
        {/* /.col-lg-6 */}
        <div className="col-lg-6">
          <div className="contact-call-info" style={{backgroundColor: '#f7f3fe', paddingTop: 120}}>
            <h2 className="call-heading" data-animate="hg-fadeInUp" style={{paddingTop: 120}}>
              <font style={{color: 'black'}}>Mail Us</font>
            </h2>
            <h3 className="call-no" data-animate="hg-fadeInUp">
              <font style={{color: '#9eae3a'}}>support@ Rilibitoption.com</font>
            </h3>
            <p style={{paddingBottom: 100}}>
              If we can help you on your journey ! <br />
              {/* Or<br> 
                          check out our FAQ’s */}
            </p>
            {/*
                      <a href="#" class="btn btn-default btn-primary">FAQ’S</a> */}
          </div>
          {/* /.contact-call-info */}
        </div>
        {/* /.col-lg-6 */}
      </div>
    </div>
  </div>
  {/*~./ end contact callus block ~*/}
  <div>
  <div style={{height: 62, backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: 4, textAlign: 'right', blockSize: 62, fontSize: 12, fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #000000', padding: 0, margin: 0, width: '100%'}}>
      <div style={{height: 40, padding: 0, margin: 0, width: '100%'}}><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}} /></div>
    </div>
    <a href="https://wa.me/+447862205606" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="c-icon c-icon-2xl whatsapp-icon" role="img"><path d="M23.328 19.177c-0.401-0.203-2.354-1.156-2.719-1.292-0.365-0.13-0.63-0.198-0.896 0.203-0.26 0.391-1.026 1.286-1.26 1.547s-0.464 0.281-0.859 0.104c-0.401-0.203-1.682-0.62-3.203-1.984-1.188-1.057-1.979-2.359-2.214-2.76-0.234-0.396-0.026-0.62 0.172-0.818 0.182-0.182 0.401-0.458 0.604-0.698 0.193-0.24 0.255-0.401 0.396-0.661 0.13-0.281 0.063-0.5-0.036-0.698s-0.896-2.161-1.229-2.943c-0.318-0.776-0.651-0.677-0.896-0.677-0.229-0.021-0.495-0.021-0.76-0.021s-0.698 0.099-1.063 0.479c-0.365 0.401-1.396 1.359-1.396 3.297 0 1.943 1.427 3.823 1.625 4.104 0.203 0.26 2.807 4.26 6.802 5.979 0.953 0.401 1.693 0.641 2.271 0.839 0.953 0.302 1.823 0.26 2.51 0.161 0.76-0.125 2.354-0.964 2.688-1.901 0.339-0.943 0.339-1.724 0.24-1.901-0.099-0.182-0.359-0.281-0.76-0.458zM16.083 29h-0.021c-2.365 0-4.703-0.641-6.745-1.839l-0.479-0.286-5 1.302 1.344-4.865-0.323-0.5c-1.318-2.099-2.021-4.521-2.021-7.010 0-7.26 5.943-13.182 13.255-13.182 3.542 0 6.865 1.38 9.365 3.88 2.5 2.479 3.88 5.802 3.88 9.323-0.010 7.255-5.948 13.177-13.25 13.177zM27.359 4.599c-3.042-2.938-7.042-4.599-11.297-4.599-8.776 0-15.922 7.115-15.927 15.859 0 2.792 0.729 5.516 2.125 7.927l-2.26 8.214 8.448-2.203c2.328 1.255 4.948 1.927 7.615 1.932h0.005c8.781 0 15.927-7.115 15.932-15.865 0-4.234-1.651-8.219-4.661-11.214z"></path></svg>
    </a>
    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Site Footer
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
    <footer className="site-footer bg-primary pd-t-120" style={{backgroundImage: 'url("https://e-capitaloption.com/appassets/images/shape/cloud-star.png")'}}>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Start Footer Widget Area
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="footer-widget-area" style={{padding: 0}}>
        <div className="container">
          <div className="row">
            {/*~~~~~ Start Widget About us ~~~~~*/}
            <div className="col-lg-4">
              <center>
                <aside className="widget widget_link">
                  <div className="widget-content">
                    <div className="about-loga" style={{paddingBottom: 8}}>
                      <img src="appassets/newimages/logo1.png" alt="Logo" />
                    </div>
                    <p style={{textAlign: 'justify'}}>
                      <font style={{color: 'white'}}>
                        Rilibit Option is one of the fastest growing
                        online trading brands in the world. Voted the best
                        mobile trading platform, we have now expanded our
                        offerings to include CFDs on stocks and ETFs, Forex
                        trading, and the exclusive Rilibit Option
                        product called Digital Options.</font>
                    </p>
                  </div>
                </aside>
              </center>
            </div>
            {/*~./ end about us widget ~*/}
            {/*~~~~~ Start Widget Links ~~~~~*/}
            <div className="col-lg-3">
              <center>
                <aside className="widget widget_links">
                  <h2 className="widget-title">Get In Touch</h2>
                  <div className="widget-content">
                    <ul>
                      {/*<li><font style="color:white;">1387 Atlantic Avenue, Brooklyn, NYC, USA.</font></li> */}
                      <li>
                        <font style={{color: 'white'}}>support@Rilibit.com</font>
                      </li>
                      <li>
                        <font style={{color: 'white'}}>+447862205606</font>
                      </li>
                      <li>
                        <font style={{color: 'white'}}>+447862205606</font>
                      </li>
                    </ul>
                  </div>
                </aside>
              </center>
            </div>
            {/*~./ end links widget ~*/}
            {/*~~~~~ Start Widget Links ~~~~~*/}
            <div className="col-lg-3">
              <center>
                <aside className="widget widget_links">
                  <h2 className="widget-title">My Account</h2>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <a href="/login">Login</a>
                      </li>
                      <li>
                        <a href="/register">Register</a>
                      </li>
                      {/* <li><a href="contact-us.html">Support</a></li> */}
                    </ul>
                  </div>
                </aside>
              </center>
            </div>
            {/*~./ end links widget ~*/}
            {/*~~~~~ Start Widget Links ~~~~~*/}
            <div className="col-lg-3">
              <center>
                <aside className="widget widget_links">
                  <h2 className="widget-title">Useful Link</h2>
                  <div className="widget-content">
                    <ul>
                      <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="/about-us">About</a></li>
                    </ul>
                  </div>
                </aside>
              </center>
            </div>
          </div>
        </div>
      </div>
      {/*~./ end footer widgets area ~*/}
      <hr  style={{backgroundColor: 'white', height: 2}} />
      {/*----end of whatsapp widget--*/}
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Start Footer Bottom Area
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <div className="footer-bottom-area" style={{marginTop: 0}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text text-center">
                <p>Copyright © 2020 . All rights reserved</p>
                <div className="search__inner" id="google_translate_element" />
              </div>
              {/*~./ end copyright text ~*/}
            </div>
            {/*~./ col-12 ~*/}
          </div>
        </div>
      </div>
      {/*~./ end footer bottom area ~*/}
    </footer>
    {/*~./ end site footer ~*/}
  </div>
  
</div>

    )
}


