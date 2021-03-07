import React from 'react'

import './style.css'
export default function Aboutus() {
    return (
        <div>
  <header id="mainHeader" className="header">
    {/* Start Navigation */}
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <div className="container">
        <a href="/"><img src="appassets/newimages/logo1.png" alt="Logo" className="navbar-brand" style={{width: 250, height: 50}} /></a>
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
              <h2 className="page-title">About Us</h2>
            </div>
            {/*~~./ page-header-caption ~~*/}
            <div className="breadcrumb-area">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">About</li>
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
      Start About Us Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="about-us-block ptb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-mock-up-thumb">
            <div className="mock-up-thumb" data-animate="hg-fadeInLeft">
              <img src="appassets/images/about/about1.jpg" alt="Thumbnail" />
            </div>
            {/* /.mock-up-thumb */}
            <div className="mock-up-thumb" data-animate="hg-fadeInLeft">
              <img src="appassets/images/about/about2.jpg" alt="Thumbnail" />
            </div>
            {/* /.mock-up-thumb */}
          </div>
          {/* /.about-mock-up-thumb */}
          <div className="experience-info-area bg-image bg-overlay-primary" style={{backgroundImage: 'url("https://e-capitaloption.com/appassets/images/bg/experiance-bg.jpg")'}} data-animate="hg-fadeInUp">
            <div className="experience-info">
              7+ Years <span> of experience</span>
            </div>
            {/* /.experience-info */}
          </div>
          {/* /.experience-info-area */}
        </div>
        {/* /.col-lg-6 */}
        <div className="col-lg-6">
          <div className="about-us-content md-mrt-60">
            <div className="section-title">
              <div className="subtitle" data-animate="hg-fadeInUp">
                About Our Company
              </div>
              <h2 className="title-main" data-animate="hg-fadeInUp">
                About Company
              </h2>
              {/* /.title-main */}
              <div className="title-text" data-animate="hg-fadeInUp">
                <p style={{textAlign: 'justify'}}>
                  Rilibit Option is one of the fastest growing online
                  trading brands in the world. Voted the best mobile trading
                  platform, we have now expanded our offerings to include CFDs
                  on stocks and ETFs, Forex trading, and the exclusive
                  IQOption product called Digital Options.
                </p>
                <p style={{textAlign: 'justify'}}>
                  First founded in 2013, Rilibit Option has grown
                  massively, and now has over 40 million members and counting!
                  The platform itself has also undergone some changes since
                  2013, and we are constantly working to ensure it is fast,
                  accurate and easy to use.
                </p>
                <p style={{textAlign: 'justify'}}>
                  We have also refined our offering and introduced plenty of
                  new products in our bid to continue giving our customers the
                  ultimate online trading experience and to help them optimize
                  their investment portfolio. Now, using our platform, our
                  members can try CFDs on currency pairs, CFDs on stocks, CFDs
                  on commodities, CFDs on cryptocurrencies, CFDs on ETFs, as
                  well as Binary and Digital Options.
                </p>
              </div>
              {/* /.title-text */}
            </div>
            {/* /.section-title */}
            <div className="about-info-list">
              <div className="single-info" data-animate="hg-fadeInUp">
                <div className="info-header">
                  <div className="about-icon icon-small icon-red">
                    <div className="shape-icon" />
                    <div className="icon">
                      <span className="flaticon-scroll" />
                    </div>
                  </div>
                  {/* /.about-icon*/}
                  <div className="info-title">
                    <h3 className="heading">Intellectuals</h3>
                  </div>
                  {/* /.info-icon */}
                </div>
                {/* /.info-title */}
                <div className="info">
                  <p style={{textAlign: 'justify'}}>
                    Trading attracts a lot of intellectuals, but the results
                    here depend not only on the mind, but also on human
                    qualities. It is impossible to achieve absolute perfection
                    in trading. There is no limit to the amount of money you
                    can earn.
                  </p>
                </div>
                {/* /.info */}
              </div>
              {/* /.single-info */}
              <div className="single-info" data-animate="hg-fadeInUp">
                <div className="info-header">
                  <div className="about-icon icon-small icon-green">
                    <div className="shape-icon" />
                    <div className="icon">
                      <span className="flaticon-target-1" />
                    </div>
                  </div>
                  {/* /.about-icon*/}
                  <div className="info-title">
                    <h3 className="heading">Professionals</h3>
                  </div>
                  {/* /.info-icon */}
                </div>
                {/* /.info-title */}
                <div className="info">
                  <p style={{textAlign: 'justify'}}>
                    For a true professional, trading is primarily a business
                    where the main goal is to make money. Many investors who
                    have spent their entire lives to succeed in their chosen
                    career approach trading as an easy way to acquire
                    additional income.
                  </p>
                </div>
                {/* /.info */}
              </div>
              {/* /.single-info */}
              <div className="single-info" data-animate="hg-fadeInUp">
                <div className="info-header">
                  <div className="about-icon icon-small">
                    <div className="shape-icon" />
                    <div className="icon">
                      <span className="flaticon-telephone" />
                    </div>
                  </div>
                  {/* /.about-icon*/}
                  <div className="info-title">
                    <h3 className="heading">Self-development</h3>
                  </div>
                  {/* /.info-icon */}
                </div>
                {/* /.info-title */}
                <div className="info">
                  <p style={{textAlign: 'justify'}}>
                    An experienced trader goes through three stages:
                  </p>
                  <ul style={{listStyleType: 'disc', paddingBottom: 5}}>
                    <li>Intuitive trading</li>
                    <li>System trading</li>
                    <li>trading as a business</li>
                  </ul>
                  <p style={{textAlign: 'justify'}}>
                    The Market is not mathematics, it has no axioms, which
                    means you can never stop.
                  </p>
                </div>
                {/* /.info */}
              </div>
              {/* /.single-info */}
            </div>
          </div>
          {/* /.about-us-content */}
        </div>
        {/* /.col-lg-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end about us block ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Our Vision Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="our-vision-block bg-primary pd-t-120">
    <div className="shape-group">
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
    </div>
    <div className="section-vertical-title-area">
      <h2 className="vertical-title"><span>our</span> vision</h2>
    </div>
    {/* /.section-vertical-title-area */}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="our-vision-content-area">
            <div className="our-vision-content bg-image" style={{backgroundImage: 'url("https://e-capitaloption.com/appassets/images/shape/shape-dot2.png")'}}>
              <div className="element-effect">
                <img className="line" src="appassets/images/vactor/line2.png" alt="Icon" />
                <img className="triangle" src="appassets/images/vactor/triangle2.png" alt="Icon" />
                <img className="rectangle" src="appassets/images/vactor/rectangle.png" alt="Icon" />
                <img className="circle" src="appassets/images/vactor/circle.png" alt="Icon" />
              </div>
              {/* /.element-effect */}
              <div className="vision-info-list">
                <div className="card-info-one" data-animate="hg-fadeInUp">
                  <div className="icon bg-green">
                    <span className="flaticon-employee-1" />
                  </div>
                  {/* /.icon*/}
                  <div className="info">
                    <h3 className="heading">Performance</h3>
                    <p style={{textAlign: 'justify'}}>
                      A fully functional trading platform in your hand: buy,
                      sell, trade, and manage orders and funds as you go.
                    </p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.card-info-one */}
                <div className="card-info-one" data-animate="hg-fadeInUp">
                  <div className="icon bg-red">
                    <span className="flaticon-bar-chart" />
                  </div>
                  {/* /.icon*/}
                  <div className="info">
                    <h3 className="heading">Essential features</h3>
                    <p style={{textAlign: 'justify'}}>
                      Stay on top of your trades with price alerts and order
                      notifications, real-time market data, orders and balance
                      statuses at your fingertips.
                    </p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.card-info-one */}
                <div className="card-info-one" data-animate="hg-fadeInUp">
                  <div className="icon bg-turquoise">
                    <span className="flaticon-employee" />
                  </div>
                  {/* /.icon*/}
                  <div className="info">
                    <h3 className="heading">Ease of use</h3>
                    <p style={{textAlign: 'justify'}}>
                      A simple interface and intuitive navigation offer a
                      seamless trading experience anywhere.
                    </p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.card-info-one */}
              </div>
            </div>
            {/* /.our-vision-content */}
            <div className="vision-thumb-area" data-animate="hg-fadeInLeft">
              <img src="appassets/images/others/vision-thumb.png" alt="Thumb" />
            </div>
          </div>
          {/* /.our-vision-content-area */}
        </div>
      </div>
    </div>
    {/* /.container */}
  </div>
 
  <div className="investor-block pd-b-120" style={{paddingTop: 120}}>
    <div className="container ml-b-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-title">
            {/*<div class="subtitle" data-animate="hg-fadeInUp">36k Investors in here</div> */}
            <h2 className="title-main" data-animate="hg-fadeInUp">
              Our Top Investor
            </h2>
            {/* /.title-main */}
            <div className="title-text" data-animate="hg-fadeInUp">
              <p style={{textAlign: 'justify'}}>
                We’ve raised $70M from the leading investors in Silicon
                Valley, Wall Street, and London.
              </p>
            </div>
            {/* /.title-text */}
          </div>
          {/* /.section-title */}
        </div>
        <div className="col-lg-6">
          <div className="btn-links-area text-right">
            <button className="btn-links btn-prev">
              <span className="fa fa-angle-left" />
            </button>
            <button className="btn-links btn-next">
              <span className="fa fa-angle-right" />
            </button>
          </div>
          {/* /.btn-links-area */}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="investor-carousel owl-carousel" data-animate="hg-fadeInUp">
            <div className="investor-item">
              <figure className="investor-thumb">
                <img src="appassets/images/investor/1.jpg" alt="Sport Thumb" />
                <div className="invest-amount">$20000.00 USD</div>
              </figure>
              {/* /.investor-thumb */}
              <div className="investor-info">
                <h3 className="investor-name">
                  <a href="single-investor.html">Nir Proman</a>
                </h3>
                <div className="designation">Oral and Maxillofacial Surgeons</div>
              </div>
              {/* /.investor-info */}
            </div>
            {/* /.investor-item */}
            <div className="investor-item">
              <figure className="investor-thumb">
                <img src="appassets/images/investor/2.jpg" alt="Sport Thumb" />
                <div className="invest-amount">$15000.00 USD</div>
              </figure>
              {/* /.investor-thumb */}
              <div className="investor-info">
                <h3 className="investor-name">
                  <a href="single-investor.html">Mark Henri</a>
                </h3>
                <div className="designation">Real Estate Brokers</div>
              </div>
              {/* /.investor-info */}
            </div>
            {/* /.investor-item */}
            <div className="investor-item">
              <figure className="investor-thumb">
                <img src="appassets/images/investor/3.jpg" alt="Sport Thumb" />
                <div className="invest-amount">$10000.00 USD</div>
              </figure>
              {/* /.investor-thumb */}
              <div className="investor-info">
                <h3 className="investor-name">
                  <a href="single-investor.html">Jonathon Doe</a>
                </h3>
                <div className="designation">Quality Control Analysts</div>
              </div>
              {/* /.investor-info */}
            </div>
            {/* /.investor-item */}
          </div>
          {/* /.investor-carousel */}
        </div>
        {/* /.col-12 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end investor block ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Discount Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="discount-block ptb-120 bg-image bg-overlay-primary" style={{backgroundImage: 'url("https://e-capitaloption.com/appassets/images/bg/discount-bg.jpg")'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="discount-content text-white text-center">
            <h2 className="discount-title" data-animate="hg-fadeInUp">
              45% Referral Commission
            </h2>
            {/* /.discount-title */}
            <div className="discount-text" data-animate="hg-fadeInUp">
              Regular members who have an active deposit can participate in
              our affilire program which givesfor their active referrals
            </div>
            {/* /.title-text */}
            <div className="discount-btn-group" data-animate="hg-fadeInUp">
              <a href="register.html" className="btn btn-default btn-white">Get Started Now</a>
            </div>
            {/* /.action-btn-group */}
          </div>
          {/* /.discount-content*/}
        </div>
        {/* /.col-lg-8 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end discount block ~~*/}
  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Testimonial Block
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
  <div className="testimonial-block pd-t-120 " style={{paddingBottom: 150}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="section-title text-center">
            <div className="subtitle" data-animate="hg-fadeInUp">
              Client Feedback
            </div>
            <h2 className="title-main" data-animate="hg-fadeInUp">
              What’s Say Our Client
            </h2>
            {/* /.title-main */}
            <div className="title-text" data-animate="hg-fadeInUp">
              Millions have already successfully used Rilibit Option and
              they have had a lot of nice things to say about us. Here's what
              our users think about Rilibit Option, in their own words.
            </div>
            {/* /.title-text */}
          </div>
          {/* /.section-title */}
        </div>
        {/* /.col-lg-10 */}
      </div>
      {/* /.row */}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="testimonail-carousel-main" data-animate="hg-fadeInUp">
            <div id="testimonail-carousel" className="owl-carousel">
              <div className="testimonial-item">
                <div className="client-area">
                  <div className="thumbnails">
                    <img src="appassets/images/testimonials/one/1.png" alt="img" />
                  </div>
                  {/* /.thumbnails */}
                  <div className="info">
                    <h4 className="client-name">Bilsans Max</h4>
                    {/*  /.client-name */}
                    <p className="client-designation">Business man</p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.client-area */}
                <div className="details">
                  <p>
                    Rilibit Option has made it extremely easy for me to
                    make an income trading online. In fact it is the only
                    service I use because of the smooth interface and large
                    user base.
                  </p>
                  <div className="total-reviews">
                    <ul>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                </div>
                {/* /.details */}
              </div>
              {/* /.testimonial-item */}
              <div className="testimonial-item">
                <div className="client-area">
                  <div className="thumbnails">
                    <img src="appassets/images/testimonials/one/2.png" alt="img" />
                  </div>
                  {/* /.thumbnails */}
                  <div className="info">
                    <h4 className="client-name">Jordan Weyker</h4>
                    {/*  /.client-name */}
                    <p className="client-designation">Set Designers</p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.client-area */}
                <div className="details">
                  <p>
                    Being an Rilibit Option costumer has been great.
                    Support is always responsive and helpful.
                  </p>
                  <div className="total-reviews">
                    <ul>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                </div>
                {/* /.details */}
              </div>
              {/* /.testimonial-item */}
              <div className="testimonial-item">
                <div className="client-area">
                  <div className="thumbnails">
                    <img src="appassets/images/testimonials/one/3.png" alt="img" />
                  </div>
                  {/* /.thumbnails */}
                  <div className="info">
                    <h4 className="client-name">Maktrek Moe</h4>
                    {/*  /.client-name */}
                    <p className="client-designation">
                      Reporters and Correspondents
                    </p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.client-area */}
                <div className="details">
                  <p>
                    Great looking website with all the possible ways to trade
                    cryptocurrency all over the world with quick and
                    professional support.
                  </p>
                  <div className="total-reviews">
                    <ul>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                </div>
                {/* /.details */}
              </div>
              {/* /.testimonial-item */}
              <div className="testimonial-item">
                <div className="client-area">
                  <div className="thumbnails">
                    <img src="appassets/images/testimonials/one/4.png" alt="img" />
                  </div>
                  {/* /.thumbnails */}
                  <div className="info">
                    <h4 className="client-name">Jordan Weyker</h4>
                    {/*  /.client-name */}
                    <p className="client-designation">Cost Estimators</p>
                  </div>
                  {/* /.info */}
                </div>
                {/* /.client-area */}
                <div className="details">
                  <p>
                    Rilibit Option is a true 24/7/365 trading platform
                    that’s innovative and secure.
                  </p>
                  <div className="total-reviews">
                    <ul>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li className="color"><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                </div>
                {/* /.details */}
              </div>
              {/* /.testimonial-item */}
            </div>
            {/* /#testimonail-carousel */}
          </div>
          {/* /.testimonail-carousel-main */}
        </div>
        {/* /.col-12 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </div>
  {/*~~./ end testimonial block ~~*/}
  <div>
  <div style={{height: 62, backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: 4, textAlign: 'right', blockSize: 62, fontSize: 12, fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #000000', padding: 0, margin: 0, width: '100%'}}>
      <div style={{height: 40, padding: 0, margin: 0, width: '100%'}}><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}} /></div>
    </div>
    <a href="https://wa.me/+447862205606" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-whatsapp whatsapp-icon" />
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
                      <li><a href="about-us.html">About</a></li>
                    </ul>
                  </div>
                </aside>
              </center>
            </div>
            {/*~./ end links widget ~*/}
          </div>
        </div>
      </div>
      {/*~./ end footer widgets area ~*/}
      <hr style={{backgroundColor: 'white', height: 2}} />
      {/*----whatsapp widget--*/}
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


