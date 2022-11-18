let nav = document.getElementById('nav');

nav.addEventListener('click',anim);

function anim()
{
    if (nav.style.rotate != '90deg')
    {
        nav.style.rotate = '90deg';
    }   
    else
    {
        nav.style.rotate = '0deg' ;
    }
};
const header = document.getElementById('header');
const scrollHeader = 50;
const back = document.getElementById('back');
const margeScroll = document.getElementById('panneau');
const droite = document.getElementById('adroite');
const cabin = document.getElementById('cabin');
const member = document.getElementById('member');
const public = document.getElementById('public');
const about = document.getElementById('about');
const outdoor = document.getElementById('outdoor');
const logo = document.getElementById('logo');
const characterScroll = document.getElementById('characterscroll');
const character = document.getElementById('character');
characterScroll.style.display = 'none';

window.onscroll = scroll;

function scroll() {
    if (window.scrollY > scrollHeader)
        {
            header.classList.add('scroll');
            back.style.marginTop = 0;
            margeScroll.style.marginLeft = '1%';
            droite.style.border = '1px solid black';
            cabin.style.color = 'black';
            member.style.color = 'black';
            public.style.color = 'black';
            about.style.color = 'black';
            cabin.style.textShadow = 'none';
            member.style.textShadow = 'none';
            public.style.textShadow = 'none';
            about.style.textShadow = 'none';
            outdoor.style.color = 'black';
            logo.style.marginTop = '0';
            characterScroll.style.display = 'block';
            character.style.display = 'none';
        }
    else
    {
        header.classList.remove('scroll');
        back.style.marginTop = '1%';
        margeScroll.style.marginRight = '0%'
        droite.style.border = 'white';
        cabin.style.color = 'white';
        member.style.color = 'white';
        public.style.color = 'white';
        about.style.color = 'white';
        cabin.style.textShadow = '1px 1px black';
        member.style.textShadow = '1px 1px black';
        public.style.textShadow = '1px 1px black';
        about.style.textShadow = '1px 1px black';
        outdoor.style.color = 'white';
        characterScroll.style.display = 'none';
        character.style.display = 'block';
    }
};

