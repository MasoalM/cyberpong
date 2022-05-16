class Cercle {
  
    constructor(pX, pY, pRadi, pVelocitatX, pVelocitatY, pColorR, pColorG, pColorB){
      this.x = pX
      this.y = pY
      this.radi = pRadi
      this.velocitatX = pVelocitatX
      this.velocitatY = pVelocitatY
      this.colorR = pColorR
      this.colorG = pColorG
      this.colorB = pColorB
    }
    dibuixa(){
      fill(this.colorR, this.colorG, this.colorB);
      circle(this.x, this.y, this.radi);
    }
    moviment(){
       if (this.y < 0) {
         
          contadorP2++;
          vermell += 20;
          blau -= 20;
        this.x = width / 2;
        this.y = height / 2;
        this.velocitatX = 0;
        this.velocitatY = 2;
        P1.ample = 150;
        P2.ample = 150;
        }
    
    if (this.y >= height) {
      contadorP1++;
      blau += 20;
      vermell -= 20;
      this.x = width / 2;
      this.y = height / 2;
      this.velocitatX = 0;
      this.velocitatY = 2; 
      this.velocitatY = -this.velocitatY;
      P1.ample = 150;
      P2.ample = 150;
    }
    if (this.x < 0) {
      this.velocitatX = -this.velocitatX;
    }
    if (this.x >= width) {
      this.velocitatX = -this.velocitatX;
    }
    this.y = this.y + this.velocitatY;
    this.x = this.x + this.velocitatX;
      
      
      //CONTACTE BOLLA AMB P2
      
  
    if (this.y < P2.y + P2.alt + this.radi / 2) {
      if (this.x > P2.x && this.x < P2.x + P2.ample) {
        this.velocitatY = -this.velocitatY;
        this.velocitatX = random(-5, 5);
        rebot = 2;
        if(this.velocitatY > 0){
          this.velocitatY += 0.3;
        }else{
          this.velocitatY -= 0.3;
        }
        if(P2.ample > 30){
        P2.ample -= 10;
       }
    }
  }
      
      //CONTACTE BOLLA AMB P1
  
    if (this.y > P1.y - this.radi / 2) {
      if (this.x > P1.x && this.x < P1.x + P1.ample) {
        this.velocitatY = -this.velocitatY;
        this.velocitatX = random(-5, 5);
         rebot = 1;
          if(this.velocitatY > 0){
          this.velocitatY += 0.3;
        }else{
          this.velocitatY -= 0.3;
        }
        if(P1.ample > 30){
          P1.ample -= 10;
         }
       
       }   
      }
    }
  } 