
const all_quarters = document.getElementsByClassName('main')[0]

const hide_this = (id) => {
    let letters = 'flip-card-side-' + id // target
    all_quarters.classList.add('hide')
    show_one(letters)
}

const show_one = (s_id) => {
    // let this_el = s_id
    const one_q = document.getElementsByClassName(`${s_id}`)[0];
    document.querySelector(".flip-card-content").classList.remove("hide")
    one_q.classList.remove("hide");
    one_q.classList.add("pointer");

}

function t_r_b() {
    // document.querySelector('.flip-card-side-a').style.transform
    //            = 'rotateY(0deg) translateZ(100px)';
}

// $("#button").on('click', function(){
//     $(".flip-card-content").toggleClass("flip");
// });