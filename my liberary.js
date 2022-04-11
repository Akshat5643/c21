function bounceOff(obj3,obj4){
    if(obj4.x-obj3.x<=obj3.width/2+obj4.width/2 && obj3.x-obj4.x<=obj3.width/2+obj4.width/2){
  
      obj3.velocityX=obj3.velocityX*(-1)
      obj4.velocityX=obj4.velocityX*(-1)
    }
  
  }
  function isTouching(movingRect,obj3){
  if(  movingRect.x-obj3.x<=obj3.width/2+movingRect.width/2 && obj3.x-movingRect.x<=obj3.width/2+movingRect.width/2
      &&movingRect.y-obj3.y<=obj3.height/2+movingRect.height/2 && obj3.y-movingRect.y<=obj3.height/2+movingRect.height/2)
      {
        return true
  
      }
      else {
        return false
      }}