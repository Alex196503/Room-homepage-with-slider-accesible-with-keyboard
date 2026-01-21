document.addEventListener(('DOMContentLoaded'),()=>{
    let menuBtn = document.querySelector('.menu-icon');
    let header = document.querySelector('.tooltip');
    let leftImg = document.querySelector('.img-left');
    let rightImg = document.querySelector('.img-right');
    let baseContainer = document.querySelector('.container-image');
    let index = 0;
    let images = [
        {src : 'images/desktop-image-hero-1.jpg', mobileSrc:'images/mobile-image-hero-1.jpg'},
        {src : 'images/desktop-image-hero-2.jpg', mobileSrc:'images/mobile-image-hero-2.jpg'},
        {src : 'images/desktop-image-hero-3.jpg', mobileSrc:'images/mobile-image-hero-3.jpg'}
    ];
    let idInterval = null;
    idInterval = setInterval(()=>{
        goToNext()
    }, 3000);
    updateContainer(index);
    function updateContainer ( globalIndex)
    {
        let currentImage = null;
       if(window.innerWidth >= 800)
        {
            currentImage = images[globalIndex].src;
        }  
        else{
            currentImage = images[globalIndex].mobileSrc;
        }
    
        baseContainer.style.backgroundImage = `url(${currentImage})`;
    }
    function goToPrev()
    {
        index --;
        if(index <0)
        {
            index = images.length - 1;
        }
        updateContainer(index);
    }
    function goToNext()
    {
        index ++;
        if(index > images.length - 1)
        {
            index = 0;
        }
        updateContainer(index);
    }
    leftImg.addEventListener(('click'),()=>{
        goToPrev();
    })
    rightImg.addEventListener(('click'),()=>{
        goToNext();
        clearInterval(idInterval);
    })
    
    document.addEventListener(('keydown'),(e)=>{
        if(e.key !== 'Enter' && e.key !== ' ') return;
        let element = document.activeElement;
        if(element.classList.contains ('img-left') || element.classList.contains('img-right'))
        {
            element.dispatchEvent(new MouseEvent('click',{
                bubbles:true
            }))
        }
    })
    
    let containerPart = document.querySelector('.container-part');
    let closeBtn = document.querySelector('.menu-close');
    let containerOverlay = document.querySelector('.overlay-page');
    let body = document.querySelector('body');
    menuBtn.addEventListener(('click'),()=>{
        header.classList.remove('hidden');
        header.setAttribute('aria-hidden', 'false');
        containerPart.classList.add('hidden');
        containerOverlay.classList.remove('hidden');
        body.classList.add('scrollable');
    })
    closeBtn.addEventListener(('click'),()=>{
        updateUI();
    })
    function updateUI()
    {
         header.classList.add('hidden');
        header.setAttribute('aria-hidden', 'true');
        containerPart.classList.remove('hidden');
        containerOverlay.classList.add('hidden');
        body.classList.remove('scrollable');
    }
    window.addEventListener(('resize'),()=>{
        if(window.innerWidth >=800)
        {
            updateUI();
        }
    })
})