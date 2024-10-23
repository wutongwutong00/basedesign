document.addEventListener('DOMContentLoaded', () => {
const keyImageMap = {
    'a': 'https://wutongwutong00.github.io/basedesign/typeme/images/a.jpg',
    'b': 'https://wutongwutong00.github.io/basedesign/typeme/images/b.jpg',
    'c': 'https://wutongwutong00.github.io/basedesign/typeme/images/c.jpg',
    'd': 'https://wutongwutong00.github.io/basedesign/typeme/images/d.jpg',
    'e': 'https://wutongwutong00.github.io/basedesign/typeme/images/e.jpg',
    'f': 'https://wutongwutong00.github.io/basedesign/typeme/images/f.jpg',
    'g': 'https://wutongwutong00.github.io/basedesign/typeme/images/g.jpg',
    'h': 'https://wutongwutong00.github.io/basedesign/typeme/images/h.jpg',
    'i': 'https://wutongwutong00.github.io/basedesign/typeme/images/i.jpg',
    'j': 'https://wutongwutong00.github.io/basedesign/typeme/images/j.jpg',
    'k': 'https://wutongwutong00.github.io/basedesign/typeme/images/k.jpg',
    'l': 'https://wutongwutong00.github.io/basedesign/typeme/images/l.jpg',
    'm': 'https://wutongwutong00.github.io/basedesign/typeme/images/m.jpg',
    'n': 'https://wutongwutong00.github.io/basedesign/typeme/images/n.jpg',
    'o': 'https://wutongwutong00.github.io/basedesign/typeme/images/o.jpg',
    'p': 'https://wutongwutong00.github.io/basedesign/typeme/images/p.jpg',
    'q': 'https://wutongwutong00.github.io/basedesign/typeme/images/q.jpg',
    'r': 'https://wutongwutong00.github.io/basedesign/typeme/images/r.jpg',
    's': 'https://wutongwutong00.github.io/basedesign/typeme/images/s.jpg',
    't': 'https://wutongwutong00.github.io/basedesign/typeme/images/t.jpg',
    'u': 'https://wutongwutong00.github.io/basedesign/typeme/images/u.jpg',
    'v': 'https://wutongwutong00.github.io/basedesign/typeme/images/v.jpg',
    'w': 'https://wutongwutong00.github.io/basedesign/typeme/images/w.jpg',
    'x': 'https://wutongwutong00.github.io/basedesign/typeme/images/x.jpg',
    'y': 'https://wutongwutong00.github.io/basedesign/typeme/images/y.jpg',
    'z': 'https://wutongwutong00.github.io/basedesign/typeme/images/z.jpg',

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

