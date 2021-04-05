class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }
  display() {
    /* this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
    
   if(this.body.position.x > 290){
  var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
  }
   

    //mito is undefined.
    // trajectory = [[200,30],[210,36],[250,50],[279,80]];

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smoke, this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
