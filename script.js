const navLinks = document.querySelectorAll('header nav a');
const LogoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menuicon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () =>{
    const BarBox = document.querySelector('.barsbox');


    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    BarBox.classList.remove('active');
    setTimeout(() => {
        BarBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link , idx)  => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout ( () => {
                sections[idx] .classList.add('active');
            }, 1100);
        }
    });
});



LogoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        
        setTimeout ( () => {
            sections[0] .classList.add('active');
        }, 1100);
    }
});


const ResumeBtns = document.querySelectorAll('.Resumebtn');

ResumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const ResumeDetails = document.querySelectorAll('.resumedetails');
        
        // Remove the 'active' class from all buttons
        ResumeBtns.forEach((button) => {
            button.classList.remove('active');
        });
        
        // Add 'active' class to the clicked button
        btn.classList.add('active');

        // Remove the 'active' class from all details
        ResumeDetails.forEach((detail) => {
            detail.classList.remove('active');
        });

        // Add 'active' class to the corresponding detail based on index
        ResumeDetails[idx].classList.add('active');
    });
});


const arrowRight= document.querySelector('.portfoliobox .navigateur .arrowright');
const arrowLeft= document.querySelector('.portfoliobox .navigateur .arrowleft');
let index=0;
const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfoliocarosel .imgslide');
    const portoflioDetail=document.querySelectorAll('.portfoliodetail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portoflioDetail.forEach(detail=>{
        detail.classList.remove('active');
    });
    portoflioDetail[index].classList.add('active');

}
arrowRight.addEventListener('click', ()=>{
    if(index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index=5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});
arrowLeft.addEventListener('click', ()=>{
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index=0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
