

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
    const overviewPaginations= this.document.querySelectorAll('.overview-slide .slide-item');
    const pageItems =1;
    let start= 0;
    let end=pageItems; 
    let currentIndex= 1;

    function renderOverViewMain(){
        let html='';
        listOverView.forEach((item, index) =>{
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
            currentIndex=i +pageItems;
            console.log(currentIndex);
            start=i; 
            end= currentIndex;
            overviewPaginations[i].classList.add('active');
            renderOverViewMain();
        })
    }
    // autoNext
    // setInterval(()=>{
        
    //     console.log(currentIndex);
    //     if(currentIndex>=0 && currentIndex < overviewPaginations.length){
    //         overviewPaginations[currentIndex].click();
    //     }
    //     else{
    //         currentIndex=0;
    //     }
    //     currentIndex++;
    // },2000)
   
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

    // project

    const listProjects=[
        {
            id: 1,
            title: "Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/product1.png"
        },
        {
            id: 2,
            title: "2 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr2.png"
        },
        {
            id: 3,
            title: "3 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr3.png"
        },
        {
            id: 4,
            title: "4 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr4.png"
        },
        {
            id: 5,
            title: "5 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/product1.png"
        },
        {
            id: 6,
            title: "6 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr2.png"
        },
        {
            id: 7,
            title: "7 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr3.png"
        },
        {
            id: 8,
            title: "8 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr4.png"
        },
        {
            id: 9,
            title: "9 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/product1.png"
        },
        {
            id: 10,
            title: "10 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr2.png"
        },
        {
            id: 11,
            title: "11 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/pr3.png"
        },
        {
            id: 12,
            title: "12 Bedroom Tiles",
            decription:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "./images/product1.png"
        }
    ]

    const projectMain= this.document.querySelector('.project-list');
    const projectPaginations= this.document.querySelectorAll('.project-slide .slide-item');
    const ProjectPageItem =8;
    let projectStart= 0;
    let projectEnd=ProjectPageItem; 
    let projectCurrentIndex= 1;

    function renderProjectMain(){
        let html='';
        listProjects.forEach((item, index) =>{
            if(index>=projectStart && index <projectEnd){

                // console.log(projectStart, projectEnd, index);
                html +="<div class="+"'project-item '" +">" +
                "<img src="+`'${item.image}'` +">"+
                "<div class="+"'project-content'"+">"+
                    "<h5>"+`${item.title}` +"</h5>"+
                "<span>"+`${item.decription}` +"</span>"+
                "</div></div>"
            }
        })
        document.querySelector('.project-list').innerHTML = html;
    }
    renderProjectMain();
    for(let j= 0; j< projectPaginations.length; j++){
        
        projectPaginations[j].addEventListener('click',function(){
            document.querySelector('.project-slide .slide-item.active').classList.remove('active');
            projectCurrentIndex = j +1;
            projectStart=j* ProjectPageItem; 
            projectEnd= projectCurrentIndex * ProjectPageItem;
            
            projectPaginations[j].classList.add('active');
            renderProjectMain();
        })
    }

    // light mode

    const lightMode= document.querySelector('.lightMode .lightMode-circle');
    const wrapperLightMode= document.querySelector('.lightMode');
    const activeLightMode= document.querySelector('.root');
    lightMode.addEventListener('click' , function(){
        activeLightMode.classList.toggle('active');
        if(document.querySelector('.root.active')){
            lightMode.style="right: 0";
        }
        else{
            lightMode.style="left: 0";
        }
        
        
    })

})