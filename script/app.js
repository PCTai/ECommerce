

window.addEventListener('load', function(){

    const listProduct= this.document.querySelector(".feature-list");
    const products= this.document.querySelectorAll(".feature-item");
    const btnPrev= this.document.querySelector(".feature-btn-prev");
    const btnNext= this.document.querySelector(".feature-btn-next");
    const lengthProduct= products.length;
    let positionX=0;
    let index=0;
    let productItemWidth= products[0].offsetWidth;
    btnNext.addEventListener('click',function(){
        handleChangeListProduct(1);
    });
    btnPrev.addEventListener('click',function(){
        handleChangeListProduct(-1);
    });
    
    function handleChangeListProduct(dir){
        
        if( dir===1){
            index++;
            if(index > lengthProduct-3){
                index = lengthProduct-3;
                return;
            }
            positionX= positionX -productItemWidth -24;
            listProduct.style= `transform: translateX(${positionX}px)`
        }
        else if( dir===-1){
            index--;
            if(index < 0){
                index= 0;
                return;
            }
            positionX= positionX +productItemWidth +24;
            listProduct.style= `transform: translateX(${positionX}px)`
        }
    }

})