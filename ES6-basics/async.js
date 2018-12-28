function doLaundry(){
    console.log("Laundry Done");
}

async function f(){
    let cleanRoom = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Cleaning Done"), 2000)
    });

    let result = await cleanRoom;
    console.log(result);
    doLaundry();
}

// doLaundry();
f();


































