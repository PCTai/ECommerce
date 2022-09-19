

window.addEventListener('load', function(){

    const listProduct= this.document.querySelector(".feature-list");
    const products= this.document.querySelectorAll(".feature-item");
    const btnPrev= this.document.querySelector(".feature-btn-prev");
    const btnNext= this.document.querySelector(".feature-btn-next");
    const lengthProduct= products.length;
    let positionX=0;
    let index=0;
    let productItemWidth= products[0].offsetWidth +24;

    // navbvar
    const listNavbars= this.document.querySelectorAll(".header-navbar li");
    const lengthListNavbar= listNavbars.length;
    
    for(let i=0; i< lengthListNavbar; i++){
        listNavbars[i].onclick= function(){
            const navbarAvtive= document.querySelector('.header-navbar li.active');
            navbarAvtive.classList.remove('active');
            
            listNavbars[i].classList.add('active');
        }
    }
    // overview
    const listOverView= [
        {
            id :1,
            title: ">New generation ceramic tile",
            decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam hic totam ex? Laborum deleniti eligendi rem velit error architecto vel nemo soluta! Harum eaque beatae quis officiis exercitationem assumenda.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :2,
            title: "> 2 New generation ceramic tile",
            decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam hic totam ex? Laborum deleniti eligendi rem velit error architecto vel nemo soluta! Harum eaque beatae quis officiis exercitationem assumenda.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :3,
            title: ">3 New generation ceramic tile",
            decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam hic totam ex? Laborum deleniti eligendi rem velit error architecto vel nemo soluta! Harum eaque beatae quis officiis exercitationem assumenda.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :4,
            title: ">4 New generation ceramic tile",
            decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam hic totam ex? Laborum deleniti eligendi rem velit error architecto vel nemo soluta! Harum eaque beatae quis officiis exercitationem assumenda.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        }
    ]
    const overviewMain= this.document.querySelector('.overview-container');
    const overviewPaginations= this.document.querySelectorAll('.slide-item');
    const pageItems =1;
    let start= 0;
    let end=pageItems; 
    let currentIndex= 1;

    function renderOverViewMain(){
        let html='';
        listOverView.filter((item, index) =>{
            if(index===start && index<end){
                html+= 
            "<div class= " +"'overview-content'" +">"+
                "<h3 class= "+"'title'"+`${item.title}`+"</h3>"+ 
                "<p>"+
                    `${item.decription}`+
                "</p>" +
                "<button class="+"'button button--outline'" +"><a href="+"'#'" +">LEARN MORE</a></button>" +
            "</div>" +
            "<div class="+"'overview-watch'"+">"+
                "<img src="+`'${item.imgVideo}'` +">"+
                "<div class="+"'circle'" +">"+
                    "<img src="+`'${item.imgPause}'`+"/>"+
                "</div>"+
            "</div>"
            }
        })
        overviewMain.innerHTML= html;
    }
    renderOverViewMain();
    for(let i= 0; i< overviewPaginations.length; i++){
        overviewPaginations[i].addEventListener('click',function(){
            document.querySelector('.slide-item.active').classList.remove('active');
            currentIndex++;
            start=i; 
            end= currentIndex;
            overviewPaginations[i].classList.add('active');
            renderOverViewMain();
        })
    }



    // slider
    if(index===0){
        btnPrev.style= 'opacity: 0.6';
    }
    btnNext.addEventListener('click',function(){
        handleChangeListProduct(1);
        if(index===0){
            btnPrev.style= 'opacity: 0.6';
        }
        else btnPrev.style= 'opacity: 1';

        if(index===lengthProduct-3){
            btnNext.style= 'opacity: 0.6';
        }
        else btnNext.style= 'opacity: 1';
    });
    btnPrev.addEventListener('click',function(){
        handleChangeListProduct(-1);
        if(index===0){
            btnPrev.style= 'opacity: 0.6';
        }
        else btnPrev.style= 'opacity: 1';
        
        if(index===lengthProduct-1){
            btnNext.style= 'opacity: 0.6';
        }
        else btnNext.style= 'opacity: 1';
    });
    
    function handleChangeListProduct(dir){
        
        if( dir===1){
            index++;
            if(index > lengthProduct-3){
                index = lengthProduct-3;
                return;
            }
            positionX= positionX -productItemWidth ;
            listProduct.style= `transform: translateX(${positionX}px)`
        }
        else if( dir===-1){
            index--;
            if(index < 0){
                index= 0;
                return;
            }
            positionX= positionX +productItemWidth ;
            listProduct.style= `transform: translateX(${positionX}px)`
        }
    }

})