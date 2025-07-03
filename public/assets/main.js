document.addEventListener('DOMContentLoaded', function() {
  // AOS
  AOS.init({ duration:800, once:true });

  // Glide (deals slider if needed)
  // new Glide('#deals-slider',{ type:'carousel', perView:1, autoplay:5000 }).mount();

  // Leaflet map
  var map = L.map('mapid').setView([51.505,-0.09],2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap contributors' }).addTo(map);

  // Lightbox
  lightbox.option({ resizeDuration:200, wrapAround:true });

  // Mobile nav toggle
  var burger = document.querySelector('.mobile-nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  burger.addEventListener('click', function(){ mobileNav.classList.toggle('active'); });

  // Search tabs
  document.querySelectorAll('.search-tabs .tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      document.querySelectorAll('.search-tabs .tab').forEach(t=>t.classList.remove('active'));
      this.classList.add('active');
      // swap form fields based on data-tab if needed
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var answer = this.nextElementSibling;
      var open = answer.style.display==='block';
      document.querySelectorAll('.faq-answer').forEach(a=>a.style.display='none');
      answer.style.display = open?'none':'block';
    });
  });
});