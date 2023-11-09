function bhaskara(a, b, c){ // 1, 3, -4 = [1, -4]
    var delta = (b*b) - (4 * a * c);
    // console.log("delta = "+ delta);
    if (delta < 0) {
        // return "delta deu negativo, x' e x'' não existem";
        return "NaN";
    }else{
        var x = [];
        x[0] = ((-b) + Math.sqrt(delta))/2 * a;
        x[1] = ((-b) - Math.sqrt(delta))/2 * a;
        if (delta == 0) {
            //x' = x''
            return x[0] + " " + x[1];
        }else{
            return x[0] + " " + x[1];
        }

        //Vértice v = (Xv, Yv) = (-b/2a , -delta/4a )
    }
}


