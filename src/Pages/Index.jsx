import React from 'react'

function Index() {
    return (

        <div>
          <div className="banner_section layout_padding">
    <div className="container">
      <div id="banner_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-6">
                <div className="banner_img"><img src="images/banner-img.png" /></div>
              </div>
              <div className="col-md-6">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">coffee</h1>
                  <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                  <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                  <div className="btn_main">
                    <div className="about_bt"><a href="#">About Us</a></div>
                    <div className="callnow_bt active"><a href="#">Call Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <div className="banner_img"><img src="images/banner-img.png" /></div>
              </div>
              <div className="col-md-6">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">coffee</h1>
                  <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                  <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                  <div className="btn_main">
                    <div className="about_bt"><a href="#">About Us</a></div>
                    <div className="callnow_bt active"><a href="#">Call Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-6">
                <div className="banner_img"><img src="images/banner-img.png" /></div>
              </div>
              <div className="col-md-6">
                <div className="banner_taital_main">
                  <h1 className="banner_taital">coffee</h1>
                  <h5 className="tasty_text">Tasty Of DozeCafe</h5>
                  <p className="banner_text">more-or-less normal distribution of letters, as opposed to using </p>
                  <div className="btn_main">
                    <div className="about_bt"><a href="#">About Us</a></div>
                    <div className="callnow_bt active"><a href="#">Call Now</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
          <i className="fa fa-arrow-left" />
        </a>
        <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
          <i className="fa fa-arrow-right" />
        </a>
      </div>
    </div>
  </div>
  <div className="contact_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="contact_taital">Get In Touch</h1>
          <div className="bulit_icon"><img src="images/bulit-icon.png" /></div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="contact_section_2">
        <div className="row">
          <div className="col-md-12">
            <div className="mail_section_1">
              <input type="text" className="mail_text" placeholder="Your Name" name="Your Name" />
              <input type="text" className="mail_text" placeholder="Your Email" name="Your Email" />
              <input type="text" className="mail_text" placeholder="Your Phone" name="Your Phone" />
              <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
              <div className="send_bt"><a href="#">SEND</a></div>
            </div>
          </div>
          <div className="map_main">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={250} height={500} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Index