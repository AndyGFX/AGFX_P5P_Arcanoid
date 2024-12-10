class TPlayer
{
    width = 48;
    height = 8;
    x = 320;
    y = 380;
    direction = 1;
    speed = 2;
    constructor() 
    {
    }

    Update()
    {
        this.x = this.x + this.direction*this.speed;
        if (this.x > width - this.width/2) this.direction = -this.direction;
        if (this.x < this.width/2) this.direction = -this.direction;
        
    }
    Draw()
    {
        shadowBox(0, 0, 8);
        stroke(0);
        strokeWeight(1);
        fill(0.5);
        shadow(0.2);
        rect(this.x, this.y, this.width, this.height);
        noShadow()

        this.Update()
    }
}