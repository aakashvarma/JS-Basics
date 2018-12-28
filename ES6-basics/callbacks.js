const posts = [
    { title: 'Post One', body: "This is post one" },
    { title: 'Post Two', body: "This is post two" }
];

function getPosts(){
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += post.title;
        });
        console.log(output);
    }, 1000);
};

function createPost(post){
    setTimeout(() => {
        posts.push(post);
        // callback();
    }, 2000);
};

// getPosts();
// createPost({title: 'Post Three', body: "This is post three"}, getPosts);

async function init() {
    await createPost({title: 'Post Three', body: "This is post three"});
    getPosts();
}

init();
// another axample of callbacks

// function add(){
//     let a = 2;
//     let b = 3;
//     setTimeout(function(){
//         console.log(a + b);
//     }, 1000);
// };

// function multiply(a, b){
//     setTimeout(function(){
//         console.log(a * b);
//         // callback();
//     }, 2000);
// };

// add();
// multiply(2, 3);

// async function init(){
//     await multiply(2, 3);
//     add();
// };

// init();



















