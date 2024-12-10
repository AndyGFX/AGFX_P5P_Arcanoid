class TGridEffect 
{
    _grid = [];
    columns = 0;
    rows = 0;
    spacing = 0;    
    points = [];
    color = {stroke:0.9, fill:0.9};
    
    constructor(cols, rows,spacing) 
    {
        this.columns = cols;
        this.rows = rows;
        this.spacing = spacing;
        

        for (let i=0; i<cols; i++)
        {
            this._grid[i] = [];
            for (let j=0; j<rows; j++)
            {
                this._grid[i][j] = { 
                    x: i*spacing, 
                    y: j*spacing, 
                    w:  spacing,
                    h:  spacing
                };
    
                
            }
            }
    }
    Draw()
    {
        //
        
        if (this.color.stroke>0)
        {
            stroke(this.color.stroke,this.color.stroke,this.color.stroke,);
        }
        else
        {
            noStroke();

        }

        for (let id=0; id<this.points.length; id++)
        {
            for (let i=0; i<this.columns; i++)  
            {                
                for (let j=0; j<this.rows; j++)
                {
                    let PX = this.points[id].x;
                    let PY = this.points[id].y;

                    let d = dist(this._grid[i][j].x + this._grid[i][j].w/2, this._grid[i][j].y + this._grid[i][j].h/2,PX, PY );
                    let s = this.spacing;
                    
                    
                    if (d < this.fx_radius)
                    {
                        fill(0.9);
                        s = 1-lerp(0,d/this.fx_radius,1)
                        
                    }
                    else
                    {
                        fill(0);
                        s = 0;
                        

                    };
                    
                    rect(this._grid[i][j].x, this._grid[i][j].y, this._grid[i][j].w*s, this._grid[i][j].h*s);
                }
            }
        }
    }
    SetEffectRadius(radius)
    {
        this.fx_radius = radius; 
    }

    AddPoint(x,y)
    {
        this.points.push({x:x,y:y});
    }

    SetPointPosition(id,x,y)
    {
        this.points[id].x = x;
        this.points[id].y = y;
    }

  }