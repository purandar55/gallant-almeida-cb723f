import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">
    <link rel="stylesheet" href="style.css">
      <link rel="icon" href="/favicon.ico" />
 </head>
        
         <main>
            
    <div class="wrapper">
      <header id="home">
        <nav class="desktop-nav">
          <div class="logo">
            <a href="#home">
              <img src="images/logo.png" alt="">
            </a>
          </div>

          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <nav class="mobile-nav">
          <div class="logo">
            <a href="#home">
              <img src="images/logo.png" alt="">
            </a>
          </div>

          <div class="menu-btn">
            <img src="images/menu-icon.png" alt="">
          </div>
        </nav>

        <div class="mobile-menu-container">
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="hero-container">
          <div class="left">
            <p class="i-am">
              I'm a ADMIN KOUSHIK
            </p>
            <h2>
              Developer,
            </h2>
            <h2>
              Blogger
            </h2>

            <a href="#contact" class="btn">Contact</a>

            <div class="social-icons">
              <a href="#">
                <img src="images/twitter-logo.png" alt="">
              </a>

              <a href="#">
                <img src="images/dribbble-logo.png" alt="">
              </a>

              <a href="#">
                <img src="images/instagram-logo.png" alt="">
              </a>
            </div>
          </div>

          <div class="right">
            <img src="images/hero-image.png" alt="">
          </div>
        </div>
      </header>

      <section id="about-me">
        <h2>About Me</h2>
        <div class="section-content">
          <p>
            A passionate Blogger, Entrepreneur and Digital Marketing trainer. Maintains more than 20 websites, driving lakhs of traffic every day
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            recusandae?
          </p>
          <p>
           <a href="">Whatsapp Group Link</a><br>
<a href="">Whatsapp Status Viodeo Download</a>
<br>
<a href="">New Status Video Download</a><br>
<a href="">Sad Status Video Download</a><br>
<a href="">Love Status Video Download</a>
<a href="">Whatsapp Status Video</a><br>
<a href="">Good Morning Status Video Download</a><br>
<a href="">Good Night Status Video Download</a><br>
<a href="">New Status Video Download</a><br>
<a href="">Sad Status Video Download</a><br>
<a href="">Love Status Video Download</a>
<a href="">Happy New Year 2021 Whatsapp Status Video Download
</a><br><a href="">Happy Diwali 2020 Whatsapp Status Video</a><br>
<a href="">Merry Christmas 2020 Whatsapp Status Video Downlaod</a><br><a href="">Friendship Day 2020 Whatsapp Status Video Downlaod</a><br><a href="">Day Wishes Whatsapp Status Video</a>
        </p></div>
      </section>

      <section id="work">
        <h2>My Work</h2>

        <div class="section-content">
          <div class="work-container">
            <img src="images/project1.png" alt="">
            <img src="images/project2.png" alt="">
            <img src="images/project3.png" alt="">
            <img class="mobile-hide" src="images/project4.png" alt="">
            <img class="mobile-hide" src="images/project5.png" alt="">
            <img class="mobile-hide" src="images/project6.png" alt="">
          </div>
          <a href="#" class="btn light">View All Projects</a>
        </div>
      </section>

      <div id="testimonials"></div>

      <section class="testimonials-section">
        <img class="quote-icon" src="images/quote-icon.png" alt="">
        <p class="testimonial-text">
          LLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nihil repellat nemo est ad officiis, cumque, quisquam eos quas,
          voluptates sint ut dolores!
        </p>

        <div class="says">
          <img src="images/testimonial1.png" alt="">
          <h3>Philip Mccoy</h3>
          <p class="company-name">Louis Vuitton</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>

        <div class="section-content">
          <div class="email">
            <img src="images/mail-icon.png" alt="">
            <div class="contact-text"></div>
          </div>

          <div class="phone">
            <img src="images/phone-icon.png" alt="">
            <div class="contact-text">(91) </div>
          </div>

          <div class="address">
            <img src="images/address-logo.png" alt="">
            <div class="contact-text">
              2516 James St undefined West Palm Beach, Georgia India
              States
            </div>
          </div>
        </div>
      </section>

      <footer>
       MESTATUSVIDEO PVT.LTD © 2021
      </footer>
    </div>

    <script>
      const menuBtn = document.querySelector(".menu-btn");
      const mobileMenuContainer = document.querySelector(
        ".mobile-menu-container"
      );
      const mobileMenuItems = document.querySelectorAll(
        ".mobile-menu-container ul li a"
      );

      menuBtn.addEventListener("click", function () {
        mobileMenuContainer.classList.toggle("active");
      });

      mobileMenuItems.forEach((i) => {
        i.addEventListener("click", function () {
          mobileMenuContainer.classList.remove("active");
        });
      });
    </script>
  

<div class="ue-sidebar-container"></div>
      </main>

      <Footer />
    </div>
  )
}



