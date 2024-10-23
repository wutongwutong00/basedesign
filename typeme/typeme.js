document.addEventListener('DOMContentLoaded', () => {
const keyImageMap = {
    'a': './images/a.jpg',
    'b': './images/b.jpg',
    'c': './images/c.jpg',
    'd': './images/d.jpg',
    'e': './images/e.jpg',
    'f': './images/f.jpg',
    'g': './images/g.jpg',
    'h': './images/h.jpg',
    'i': './images/i.jpg',
    'j': './images/j.jpg',
    'k': './images/k.jpg',
    'l': './images/l.jpg',
    'm': './images/m.jpg',
    'n': './images/n.jpg',
    'o': './images/o.jpg',
    'p': './images/p.jpg',
    'q': './images/q.jpg',
    'r': './images/r.jpg',
    's': './images/s.jpg',
    't': './images/t.jpg',
    'u': './images/u.jpg',
    'v': './images/v.jpg',
    'w': './images/w.jpg',
    'x': './images/x.jpg',
    'y': './images/y.jpg',
    'z': './images/z.jpg',

};

const span = document.getElementById('typespan');

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (keyImageMap[key]){
    const img = document.createElement('img');
    img.src = keyImageMap[key];
    // img.alt = 'Image for key ' + key;

    if (key === 'shift') {
        // console.log('delete key pressed')
        // const images = span.getElementsByTagName('img');
        // if (images.length > 0) {
        //     span.removeChild(images[images.length - 1]);
        span.style.height = '7vw';
        
        }
    // img.onerror = () => {
    //     console.error(`Failed to load image for key '${key}': ${img.src}`);
    // };

    span.appendChild(img);
    } 
    // else {
    //     console.log(`No image mapped for key: ${key}`); // Log if no image is mapped
    // }

     else if (key === 'backspace') {
    // console.log('delete key pressed')
    // const images = span.getElementsByTagName('img');
    // if (images.length > 0) {
    //     span.removeChild(images[images.length - 1]);
    const lastElement = span.lastChild;
    span.removeChild(lastElement);
    
    } else if (key === ' ') {
    const space = document.createElement('div');
    space.style.width = "5vw";
    span.appendChild(space)
    // console.log('space appended')
    }
    
    // else if (key === 'enter') {
    // const enter = document.createElement('br');
    // span.appendChild(enter)
    // // console.log('space appended')
    // }
    
    
    else {
    console.log(`No image mapped for key: ${key}`); // Log if no image is mapped
    }

//     const content = span.innerHTML; 

// console.log(content);
});

});

