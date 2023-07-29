
//  Select ul li tag

 const activItem = document.querySelectorAll( 'nav.nav_bar ul li' );

function activlink()
{
    activItem.forEach( items =>
    {
        items.classList.remove( "active" );
    } )
    this.classList.add( "active" );
    active.classList.remove( 'active' );
    navOpen.classList.remove( 'open' );
}

activItem.forEach( items => items.addEventListener( "click", activlink ) );



/**
 * Here Hamberger Menu Is Here When Click --> line  Animated Now
 */
let navOpen = document.querySelector( 'nav.nav_bar' );
const active = document.querySelector( '.toggle ' );
active.addEventListener( 'click', () =>
{
    active.classList.toggle( 'active' );
    navOpen.classList.toggle( 'open' );

} )



/**
 * Progresses Bar 
 */

let counters = document.querySelectorAll( '.counter' );
let timing = 1000;
counters.forEach( count =>
{
let  updateCount = () =>
    {
        let terget = +count.getAttribute( 'data-target' );
        let countert = +count.innerText;
        let increment = terget / timing;

        if ( count < terget )
        {
            count.innerText = Math.ceil( countert + increment );

            setTimeout( updateCount, 10 );
        } else
        {
            count.innerText = terget;
        }
    };
    updateCount();
})



/**
 * Scroll Reveal Animated Now
 */
ScrollReveal( {
    reset: true,
    distance: '100px',
    duration: 2000,
    delay : 200,
})
ScrollReveal().reveal( '.h_content , .sec_heading', { origin: 'right' } );
ScrollReveal().reveal( '.home-images , .about-content ,.skill_full_content, .service-card , .portfalio_box , .contact-form form p' ,{origin:'bottom'});

/**
 * Type - js plugin Awesome Animated Now
 */

var typed3 = new Typed( '#typed', {
    strings: [ 'Web Developer', 'Wordpress Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true,
    cursorChar: '_',
} );

