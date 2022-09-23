

window.addEventListener('load', function(){
    let buttons= document.querySelectorAll('.button');

    const listProduct= document.querySelector(".feature-list");
    const products= document.querySelectorAll(".feature-item");
    const btnPrev= document.querySelector(".feature-btn-prev");
    const btnNext= document.querySelector(".feature-btn-next");
    const lengthProduct= products.length;
    let positionX=0;
    let index=0;
    let productItemWidth= products[0].offsetWidth +24;

    // navbvar

    const listNavbars= this.document.querySelectorAll(".header-navbar li");
    const headerNavbar=this.document.querySelector('.header-navbar');
    const headerDropdown=this.document.querySelector('.header-dropdown');
    const lengthListNavbar= listNavbars.length;
    if(lengthListNavbar>7){
        headerDropdown.style= 'display: block';
        headerNavbar.style= 'display: none';
    }else{
        headerDropdown.style= 'display: none';
        headerNavbar.style= 'display: block';
    }
    
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
            title: ">New generation ceramic tile ",
            decription: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :2,
            title: "> 2 New generation ceramic tile",
            decription: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :3,
            title: ">3 New generation ceramic tile",
            decription: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
            imgVideo: "./images//video.png",
            imgPause: "./images//pause.png",
        },
        {
            id :4,
            title: ">4 New generation ceramic tile",
            decription: "Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.",
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
                "<button class="+`'button button--outline' ` +"><a href="+"'#'" +">LEARN MORE</a></button>" +
            "</div>" +
            "<div class="+"'overview-watch'"+">"+
                "<img src="+`'${item.imgVideo}'` +">"+
                "<div class="+"'circle'" +">"+
                    "<a target="+"'_blank'"+ "href="+"'https://www.youtube.com/watch?v=mIA98anIqIs'"+">" +"<img src="+`'${item.imgPause}'`+"/>" +"</a>"+
                "</div>"+
            "</div>"
            }
        })
        overviewMain.innerHTML= html;
        buttons= document.querySelectorAll('.button');
        for( let i =0 ;i <buttons.length; i++){
            buttons[i].addEventListener('click', function(){
                ShowContent();
                console.log("click");
            })
        }
    }
    renderOverViewMain();
    for(let i= 0; i< overviewPaginations.length; i++){
        overviewPaginations[i].addEventListener('click',function(){
            document.querySelector('.slide-item.active').classList.remove('active');
            currentIndex=i +pageItems;
            start=i; 
            end= currentIndex;
            overviewPaginations[i].classList.add('active');
            renderOverViewMain();
            buttons= document.querySelectorAll('.button');
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
            title: "Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/prj1.png"
        },
        {
            id: 2,
            title: "Aenean Tempus ipsum",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/prj2.png"
        },
        {
            id: 3,
            title: "Riyadh, Saudi Arabia",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/prj3.png"
        },
        {
            id: 4,
            title: "Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr4.png"
        },
        {
            id: 5,
            title: "Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr5.png"
        },
        {
            id: 6,
            title: "6 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr6.png"
        },
        {
            id: 7,
            title: "7 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr3.png"
        },
        {
            id: 8,
            title: "8 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr4.png"
        },
        {
            id: 9,
            title: "9 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/product1.png"
        },
        {
            id: 10,
            title: "10 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr2.png"
        },
        {
            id: 11,
            title: "11 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/pr3.png"
        },
        {
            id: 12,
            title: "12 Aenean habitasse",
            decription:"Riyadh, Saudi Arabia",
            image: "./images/product1.png"
        }
    ]

    const projectMain= this.document.querySelector('.project-list');
    const projectPaginations= this.document.querySelectorAll('.project-slide .slide-item');
    const ProjectPageItem =6;
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
    wrapperLightMode.addEventListener('click' , function(){
        activeLightMode.classList.toggle('active');
        if(document.querySelector('.root.active')){
            lightMode.style="right: 0";
        }
        else{
            lightMode.style="left: 0";
        }
        
        
    })

    // handle click button 

    const wrapperShowInfo= this.document.querySelector('.wrapper-showInfo');
    const layoutShowInfo= this.document.querySelector('.layout-showInfo');
    const layoutShowContent= this.document.querySelector('.layout-showInfo-content');
    const btnHideLayoutShowContent=layoutShowContent.querySelector('button');
    layoutShowContent.addEventListener("click",function(e){
        e.stopImmediatePropagation()
    }) 
    const hideShowContent= function(){
        layoutShowInfo.style= 'display: none';
    }
    const ShowContent= function(){
        layoutShowInfo.style= 'display: block';
    }
    
    wrapperShowInfo.addEventListener("click", function(){
        hideShowContent();
    })
    btnHideLayoutShowContent.addEventListener("click", function(){
        hideShowContent();
    })
    

})