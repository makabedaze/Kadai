class Point{
    int x;
    int y;

    Point(int _x,int _y){
        x = _x;
        y = _y;
    }
}

abstract class Shape{
    protected Point center;

    public abstract Draw();
}

class Circle : Shape{
    protected int radius;
    
    Circle(int 半径,Point 中心点){
        radius = 半径;
        center = 中心点;
    }
    
    override void Draw();
} 

class BigCircle : Circle{
    override void Draw(){
        でっかい円を書く
    };
}

class Square : Shape{
    protected int sideLength; 
    
    Square(int _sideLength,Point _point){
     sideLength = 半径;
     center = 中心点;
    }
    
    override void Draw();
}

class BigSquare : Square
{
    override void Draw(){
      でっかい四角を書く
    };
}

class DrawingTool
{ 
    void DrawAllShapes(List<Shape> shapeList){
       　//丸を先に描画
        foreach(Shape shape in shapeList.where(x => x is Circle == true)){
            shape.Draw();
        }

        //四角を次に描画
        foreach(Shape shape in shapeList.where(x => x is Square == true)){
            shape.Draw();
        }
    }
}