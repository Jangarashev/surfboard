const path = "/surfboard1/index.html"

const ishtml = path => {
    const requiredext = ".html";
    const pathext = path.slice(-5);

    if (pathext === requiredext) {
        return true
    } else {
        return false
    }
}

console.log(ishtml(path));