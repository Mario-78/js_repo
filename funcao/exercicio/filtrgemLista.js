h = '10 20 20 8 25 3 2 30 40'
function filterRecord(){
    
    list = h.split(' ')
    console.log(this.list)

    let r = parseInt(list[0], 10), pp = parseInt(list[0], 10), c = 0
    console.log(r, pp, c)
    
    for(let i = 0; i < list.length; i++){
        if(parseInt(list[i]) > r){
            r = parseInt(list[i])
            c++
        }else if(parseInt(list[i]) < pp){
            pp = i + 1
        }
    }

    console.log(c,  pp)
} 

filterRecord()