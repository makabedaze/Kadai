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
    
    //優先度をつける
    public abstract GetPriority(){

    }

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
    override int GetPriority(){
        return 0;
    } 

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

class BigSquare : Square{
    override int GetPriority(){
        return 1;
    } 

    override void Draw(){
      でっかい四角を書く
    };
}

class DrawingTool{ 
    void DrawAllShapes(List<Shape> shapeList){
        //優先度によって昇順に並び替える。
        shapeList = shapeList.OrderBy(p => p.GetPriority());
        foreach(Shape shape in shapeList){
            shape.Draw();
        }
    }
}