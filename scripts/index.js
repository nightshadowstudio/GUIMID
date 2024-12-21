(function (window, document, undefined) {
  window.onload = init;

  function init() {

    var splash = document.getElementById("splash");
    var next = document.getElementById("next");

    var home = document.getElementById("home");
    var whoami = document.getElementById("whoami");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contacts = document.getElementById("contacts");

    show(home);


    next.onclick = () => {
    
        splash.style.transition = "all 1s ease-in-out";
    
        splash.style.opacity = "0";
    
        splash.addEventListener("transitionend", function () {
    
            splash.remove();
    
        });
    };


     let items = document.querySelectorAll('.topItem');

     items[0].classList.add('active');

     items.forEach((item, inx) => {

        item.addEventListener('click', () => {

            items.forEach((item) => {

                item.classList.remove('active');
            });

            item.classList.add('active');
            
            if(inx == 0){
                show(home);
            }
            
            if(inx == 1){
                show(whoami);
            }
            
            if(inx == 2){
                show(skills);
            }
            
            if(inx == 3){
                show(projects);
            }
            
            if(inx == 4){
                show(contacts);
            }
        });
     });

  }

 var show = function(el){

    home.style.display = 'none';
    whoami.style.display = 'none';
    skills.style.display = 'none';
    projects.style.display = 'none';
    contacts.style.display = 'none';
    el.style.display = 'block';
  }

})(window, document, undefined);
