function howdy() {
    console.log("Holly Negley");
}

howdy();


var numba = function(string) {
    if (string.length < 7) {
        console.log("What a short word!");
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length === 7) {
        console.log("7, what a perfect choice.");
    }
}


function inception(callback, value) {
    callback(value);
}

function value() {
    console.log("Mud is a fantastic movie")
}

inception(value);