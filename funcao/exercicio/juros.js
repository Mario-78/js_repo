js = (ci, tj, ta) => ta*tj*ci+ci

jc = (ci, tj, ta) => {
    for(let i = 0; i < ta; i++){
        ci += ci*tj
    }
    return ci
}

console.log(js(100, 0.1, 5))
console.log(jc(100, 0.1, 5))