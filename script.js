//logic for scroll fixed header
window.onscroll = () => {
   let header = document.getElementById('header');
   if(window.pageYOffset> header.offsetTop) header.classList.add('scroll')
   else header.classList.remove('scroll');
}


//logic for parallax slider(scroll horizontal on images)
