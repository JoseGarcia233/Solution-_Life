import React from 'react'
import '../css/Footer.css'
export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> <i>Solution Life </i>Want to help a lot of people need a job, because we know the situation about can I find a job?, is hard to find a good job, here you can find a good oportunities for you, you must have register and create your profile and start to looking for the perfect job for you.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Jobs</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Web developer</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">plumbing</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Lawyer</a></li>
              <li><a href="http://scanfcode.com/category/android/">technical support</a></li>
              <li><a href="http://scanfcode.com/category/templates/">electrician</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div className="container1">
          <div class="col-md-8 col-sm-6 col-xs-10">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved </p>
            </div>
          </div>

          {/* <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#/"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#/"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#/"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div> */}
        </div>
      </div>
</footer>
    </div>
  )
}