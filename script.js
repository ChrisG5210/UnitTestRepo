document.addEventListener('mousemove' , function (event){
    const r = Math.random(event.pageX * 255 / window.innerHeight)
    const g = Math.random(event.pageX * 255 / window.innerWidth)
    const color = `rgb ${r}, 0 ,${b}`;
        document.body.style.backgroundColor = color;
        console.log(color);
});

const toggleSwitch = document.querySelector('input[type ="checkbox"]')
if (localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggleSwitch.checked = true;
};