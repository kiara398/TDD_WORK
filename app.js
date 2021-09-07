//NASSOZI WINNIE
//BAKER SENTAMU SOLOMON


module.exports = class MathService{
    factorial(num){
        if (num< 0) {return -1}
        else if (num == 0 ) {return 1;}
        else{
            let factorial = 1;
            for(let i = num; i>= 1; i--){
                factorial = factorial * i;
            }
            return factorial;
        }
    }
}