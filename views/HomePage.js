

const wrapper = document.querySelector('.progress-bar-wrapper svg text');
const ppath = document.querySelector('.progress-bar-wrapper svg .CircularProgressbar-path');

const timer = ()=>{
  setInterval(()=>{
    if(wrapper.innerHTML === "0") wrapper.innerHTML = "59";
    else {
      wrapper.innerHTML = Number(wrapper.innerHTML) - 1;
    }
  }, 1000);
}

timer();

const themer = document.querySelector('.themer');

const themechange = ()=>{
  themer.classList.toggle('theme-dark');
}