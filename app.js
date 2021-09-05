module.exports = class MathService{
    factorial(num){
        if (num< 0)
        return -1
        else if (num == 0 )
        return 1;
        else{
            return (num * this.factorial(num -1));
        }
    }
}