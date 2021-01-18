var colors = ['red','blue','green'];
var gIdx = 0;
window.onload = function() {
    emailjs.init("user_6NsZYaOQzNdbMm0Jmihmg");
    setInterval(animateText,2000);
}

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6LcCUDEaAAAAAEbzA1Ky6XdBtGTWWCMwpYWGNskS', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
      });
    });
  }

function animateText() {
    var title = document.getElementsByClassName('title')[0];
    title.classList.add("js-animate-rot");
    window.setTimeout(removeTextClass, 500);

    var one = document.getElementsByClassName('one')[0];
    var two = document.getElementsByClassName('two')[0];
    var three = document.getElementsByClassName('three')[0];

    addColorClass(gIdx%colors.length,one);
    addColorClass((gIdx+1)%colors.length,two);
    addColorClass((gIdx+2)%colors.length,three);

    gIdx = (gIdx+1)%colors.length;
  }

function removeTextClass(){
    var title = document.getElementsByClassName('title')[0];
    title.classList.remove("js-animate-rot");
}

function addColorClass(idx,eliment){
    var preIdx = idx==0 ? colors.length-1 : idx-1;
    if(eliment.classList.length<2){
        eliment.classList.add(colors[idx]);
    }else{
        eliment.classList.remove(colors[preIdx]);
        eliment.classList.add(colors[idx]);
    }
}