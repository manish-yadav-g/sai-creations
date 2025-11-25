// Update Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll fade reveal
const reveals = document.querySelectorAll('.fade');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ 
      entry.target.classList.add('show'); 
      revealObserver.unobserve(entry.target); 
    }
  });
},{threshold:0.12});
reveals.forEach(r=>revealObserver.observe(r));

// Navbar scroll background
const topbar = document.getElementById('navbar');
function onScroll(){
  topbar.classList.toggle('scrolled', window.scrollY > 30);
}
window.addEventListener('scroll', onScroll);
onScroll();

// Active link highlight while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Lightbox for Gallery (Click to enlarge)
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const lightImg = document.createElement("img");
lightbox.appendChild(lightImg);

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
    document.body.classList.add("noscroll");
    window.scrollTo(0, 0);
  });
});

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nameVal = name.value.trim();
    const phoneVal = phone.value.trim();
    const eventVal = event.value;
    const dateVal = date.value;
    const locationVal = location.value.trim();

    if(!nameVal || !phoneVal || !eventVal || !dateVal || !locationVal){
      alert("❗ Please fill all required fields.");
      return;
    }

    if(phoneVal.length !== 10 || !/^[0-9]+$/.test(phoneVal)){
      alert("❗ Please enter a valid 10-digit phone number.");
      return;
    }

    const msg = `
New Booking:
Name: ${nameVal}
Phone: ${phoneVal}
Event: ${eventVal}
Date: ${dateVal}
Location: ${locationVal}
Details: ${message.value}`;

    window.open(`https://wa.me/919991118537?text=${encodeURIComponent(msg)}`);

    alert("✅ Your booking has been submitted successfully! We will contact you shortly.");
  });
}

const openBooking = document.getElementById("openBooking");
const bookingFormEl = document.getElementById("bookingForm");

if(openBooking){
  openBooking.addEventListener("click", ()=>{
    bookingFormEl.style.display = "flex";
    openBooking.style.display = "none";
    bookingFormEl.scrollIntoView({ behavior: "smooth" });
  });
}
function closeLight(){
  lightbox.style.display = "none";
  document.body.classList.remove("noscroll");
}
document.querySelectorAll(".faq-question").forEach(q=>{
  q.addEventListener("click", ()=>{
    const item = q.parentElement;

    // close all
    document.querySelectorAll(".faq-item").forEach(i=>{
      if(i !== item) i.classList.remove("active");
    });

    // toggle this one
    item.classList.toggle("active");
  });
});

