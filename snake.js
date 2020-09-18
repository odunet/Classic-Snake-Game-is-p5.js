//Snake class
class Snake {
    constructor(){
        this.body = [];
        this.body[0] = createVector(floor(w/2),floor(h/2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }
    update(){
        //copy the last element of the list
        let head = this.body[this.body.length-1].copy();

        //shift the array forward
        this.body.shift()
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }
    //grow the snake after every win
    grow(){
        let head = this.body[this.body.length-1].copy();
        this.len++;
        this.body.push(head);

        //Increase the Frame Rate every other win
        if (this.body.length%2){
            fr +=1;
            frameRate(fr);
        }
    }
    //End game if snake touches itself or any edge of the screen
    endGame(){
        let x = this.body[this.body.length-1].x
        let y = this.body[this.body.length-1].y
        if (x > w-1 || x< 0 || y>h-1 || y<0){
            return true;
        }
        for (let i=0;i<this.body.length-1;i++){
            let part = this.body[i];
            if (part.x ==x && part.y ==y){
                return true;
            }
        }
        return false;

    }

    //Display snake. Tis will loop through all vectors and array and display as pixel of snake
    show(){
        for(let i = 0; i<this.body.length; i++){
        fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1,1)
        }
    }

    //This will set direction of snake
    setDir(a,b){
        this.xdir = a;
        this.ydir = b;
    }

    //This will return true if food eaten to change position of food after eaten. It will also call the grow method.
    eat(pos){
        let x = this.body[this.body.length-1].x
        let y = this.body[this.body.length-1].y
        if (x == pos.x && y == pos.y){
            this.grow();
            return true;
        }
        else{
            false;
        }
    }



//IGNORE Ineffcient setDir code below

//    setDir(a,b){
//        if (a == 1){
//            this.xdir = abs(this.xdir)
//            this.ydir = 0
//            if (this.xdir==0){
//                this.xdir = 1
//            }
//        }else if (a==0 ){
//            this.xdir = abs(this.xdir)
//        }else{
//            this.xdir = abs(this.xdir)* -1
//            this.ydir = 0
//            if (this.xdir==0){
//                this.xdir = -1
//            }
//        }
//        if (b == 1){
//            this.ydir = abs(this.ydir)
//            this.xdir = 0
//            if (this.ydir==0){
//                this.ydir = 1
//            }
//        }else if (b==0 ){
//            this.ydir = abs(this.ydir)
//        }else{
//            this.ydir = abs(this.ydir)* -1
//            this.xdir = 0
//            if (this.ydir==0){
//                this.ydir = -1
//            }
//        }
//    }
}
