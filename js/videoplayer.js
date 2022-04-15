// Video Player
const vid1 = document.getElementById('video1');
const vid2 = document.getElementById('video2');
const vid3 = document.getElementById('video3');
const desTit = document.getElementById('descriptionTitle');
const desPar = document.getElementById('descriptionPar');
const shownVideo = document.getElementById('iFrame')

vid1.addEventListener("click", () => {
    changeVideo(1);
});
vid2.addEventListener("click", () => {
    changeVideo(2);
});
vid3.addEventListener("click", () => {
    changeVideo(3);
});

function changeVideo(n) {
    window.scrollTo(0, 0);
    switch (n) {
        case 1:
            shownVideo.src = "https://www.youtube.com/embed/gb-d54aB2xM?autoplay=1";
            desTit.innerHTML = "Santuário - The Plankton Orchestra feat Yamandu Costa";
            desPar.innerHTML = `"Rotterdam is an impressively cosmopolitan city. When I had the
            opportunity to play there, I felt like a real citizen of the
            world! When I got invited to play with the Plankton Orchestra, I
            was very excited to get to know this vibrant city better. The
            reception was the best possible, as soon as I arrived in Rotterdam
            I was greeted by almost every member of the orchestra at the train
            station. We went straight to Max's house (the group's conductor
            and founder). Lucky I had brought a Portuguese wine of the best
            quality! Our first meeting was full of friendship and music. This
            recording shows what we were able to prepare in two rehearsals.
            This orchestra has people from all around the world. The language
            of music is universal! This recording proves this. Long live the
            music that brings people together" - Yamandu Costa`
            vid1.classList.add('activeVideo');
            vid2.classList.remove('activeVideo');
            vid3.classList.remove('activeVideo');
            break;
        case 2:
            shownVideo.src = "https://www.youtube.com/embed/QgBBL-otPfs?autoplay=1";
            desTit.innerHTML = "Barra do Ribeiro - The Plankton Orchestra feat Yamandu Costa";
            desPar.innerHTML = `"Barra do Ribeiro is a composition by my great friend and musician Guinha Ramires.
            It's a special song, very inspiring. It has the soul of lyrical music but has no lyrics.
            A melody that everyone would like to have composed, a winner melody.
            Being able to play this theme with this orchestra is very festive, mainly because of the arrangement made by Max which starts with the voices making the melody of the composition.
            An incredibly pleasant song, with feelings like peace and happiness very much imprinted on it.
            It's a song that makes you feel good, that brings a fundamental good vibe to the lives of each one of us." - Yamandu Costa`
            vid2.classList.add('activeVideo');
            vid1.classList.remove('activeVideo');
            vid3.classList.remove('activeVideo');
            break;
        case 3:
            shownVideo.src = "https://www.youtube.com/embed/3i91uHJqp_w?autoplay=1";
            desTit.innerHTML = "Underground (Tom Waits) - The Plankton Orchestra";
            desPar.innerHTML = `Here's our version of Underground by Tom Waits`
            vid3.classList.add('activeVideo');
            vid2.classList.remove('activeVideo');
            vid1.classList.remove('activeVideo');
            break;
    }

}

