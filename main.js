document.documentElement.classList.add('js-enabled');
const sections = [...document.querySelectorAll('.section-head,.feature,.case,.method-layout,.career-intro,.experience,.skill-block,.contact-main')];
if ('IntersectionObserver' in window) {
  const observer=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}},{threshold:0.07});
  for(const el of sections){el.classList.add('reveal');observer.observe(el)}
}
