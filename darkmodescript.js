if(localStorage.getItem('theme') == 'dark'){
    setDarkMode();
    
    if(document.getElementById('my-checkbox').checked){
        localStorage.setItem('my-checkbox',true);
    }
    else{

    }
}
function setDarkMode(){
    let isDark = document.body.classList.toggle('darkmode');

    if(isDark){
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'dark');
        document.getElementById('my-checkbox').setAttribute('checked' ,'checked');
    }
    else{
        setDarkMode.checked=true;
        localStorage.removeItem('theme', 'dark');
    }
}