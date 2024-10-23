document.addEventListener('DOMContentLoaded', () => {
const keyImageMap = {
    'a': './a.jpg',
    'b': './b.jpg',
    'c': './c.jpg',
    'd': './d.jpg',
    'e': './e.jpg',
    'f': './f.jpg',
    'g': './g.jpg',
    'h': './h.jpg',
    'i': './i.jpg',
    'j': './j.jpg',
    'k': './k.jpg',
    'l': './l.jpg',
    'm': './m.jpg',
    'n': './n.jpg',
    'o': './o.jpg',
    'p': './p.jpg',
    'q': './q.jpg',
    'r': './r.jpg',
    's': './s.jpg',
    't': './t.jpg',
    'u': './u.jpg',
    'v': './v.jpg',
    'w': './w.jpg',
    'x': './x.jpg',
    'y': './y.jpg',
    'z': './z.jpg',

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

