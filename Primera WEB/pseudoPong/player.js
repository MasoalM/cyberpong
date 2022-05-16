class player {
  
    constructor(pX, pY, pAmple, pAlt, pColorR, pColorG, pColorB, pPlayer1o2, pStrokeWidth){
      this.x = pX
      this.y = pY
      this.ample = pAmple
      this.alt = pAlt
      this.colorR = pColorR
      this.colorG = pColorG
      this.colorB = pColorB
      this.p = pPlayer1o2
      this.StrokeWidth = pStrokeWidth
    
      }
      dibuixa(){
         strokeWeight(3);
         fill(this.colorR, this.colorG, this.colorB);
         rect(this.x, this.y, this.ample, this.alt);
        
      }
      moviment(){
        
        if(this.p == 2){
        if (keyIsDown(LEFT_ARROW)) {
              this.x -= 5;
          }
          if (keyIsDown(RIGHT_ARROW)) {
              this.x += 5;
            }
          
          }
        
        if(this.p == 1){
          if (keyIsDown(65)) {
              this.x -= 5;
            }
          if (keyIsDown(68)) {
              this.x += 5;
            }
         }
      }
    
    
  }