function isTouching(objects1, objects2) {
    if(objects1.x - objects2.x < objects2.width/2 + objects1.width/2 &&
      objects2.x - objects1.x < objects2.width/2 + objects1.width/2 && 
      objects1.y - objects2.y < objects2.height/2 + objects1.height/2 &&
      objects2.y - objects1.y < objects2.height/2 + objects1.height/2) {
      
      return true;
    } else {
    
      return false;
    } 
    
  }
  
  function bounceOff(objects1, objects2) {
   if(objects1.x - objects2.x < objects2.width/2 + objects1.width/2 &&
    objects2.x - objects1.x < objects2.width/2 + objects1.width/2) {
      objects1.velocityX = objects1.velocityX * -1;
      objects2.velocityX = objects2.velocityX * -1;
  }
  
  if(objects1.y - objects2.y < objects2.height/2 + objects1.height/2 &&
    objects2.y - objects1.y < objects2.height/2 + objects1.height/2) {
      objects1.velocityY = objects1.velocityY * -1;
      objects2.velocityY = objects1.velocityY * -1;
  }
  }