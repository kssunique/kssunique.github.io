/*************************************全局变量************************/
var canvasWidth=480;//画布的宽
var canvasHeight=650;//画布的高
var canvas=document.getElementById('canvas');
canvas.width=canvasWidth;
canvas.height=canvasHeight;
var ctx=canvas.getContext('2d');
//游戏阶段
const PHASE_DOWNLOAD=1;//图片加载
const PHASE_READY=2;  //就绪阶段
const PHASE_LOADING=3;//游戏加载状态
const PHASE_PLAY=4;//游戏进行阶段
const PHASE_PAUSE=5;//
const PHASE_GAMEOVER=6;
//所有的图片对象 共三十三个,游戏中要使用，作为全局变量
 var imgBackground;
 var imgBullet1;
 var imgsEnemy1=[];
 var imgsEnemy2=[];
 var imgsEnemy3=[];
 var imgsGameLoading=[];
 var imgGamePause_nor;
 var imgsHero=[];
 var imgStart;
var curPhase=PHASE_DOWNLOAD;//当前所处的阶段
download();
/*******************************************阶段一Downloading：图片下载PHASE_DOWNLOAD***************************/

 function download(){
        var progress=0;//下载进度,每张图片权重算3，背景图片算4，加载完成后100%
	    function drawProgress(){		
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.font=" 50px Helvetica";
        var txt=progress+'%';
		ctx.fillStyle="#ddd";
		ctx.fillText(txt, 0.5*canvas.width-0.5*ctx.measureText(txt).width, 
			0.5*canvas.height+25);
		ctx.strokeStyle="black";
		ctx.strokeText(txt,0.5*canvas.width-0.5*ctx.measureText(txt).width, 
			0.5*canvas.height+25);
		ctx.beginPath();
		ctx.strokeStyle="#ddd";
		ctx.arc(0.5*canvas.width,0.5*canvas.height,65,0,0.02*Math.PI*progress,false);
		ctx.stroke();
//		开始游戏
		if(progress>=100){
			startGame();}
	    }
	          imgBackground = new Image();
	   imgBackground.src = 'img/background.png';
	   imgBackground.onload = function(){
		progress+=4;
		drawProgress();
	    }
	    imgBullet1 = new Image();
	   imgBullet1.src = 'img/bullet1.png';
	   imgBullet1.onload = function(){
		progress+=3;
		drawProgress();
	  }
	   imgsEnemy1[0]= new Image();
	   imgsEnemy1[0].src = 'img/enemy1.png';
	   imgsEnemy1[0].onload = function(){
		progress+=3;
		drawProgress();
	  }
	  imgsEnemy1[1]= new Image();
	  imgsEnemy1[1].src = 'img/enemy1_down1.png';
	  imgsEnemy1[1].onload = function(){
		progress+=3;
		drawProgress();
	   }
  
	  imgsEnemy1[2]= new Image();
	  imgsEnemy1[2].src = 'img/enemy1_down2.png';
	  imgsEnemy1[2].onload = function(){
		progress+=3;
		drawProgress();
	   }

	  imgsEnemy1[3]= new Image();
	  imgsEnemy1[3].src = 'img/enemy1_down3.png';
	  imgsEnemy1[3].onload = function(){
		progress+=3;
		drawProgress();
	   }
	
	   imgsEnemy1[4]= new Image();
	  imgsEnemy1[4].src = 'img/enemy1_down4.png';
	    imgsEnemy1[4].onload = function(){
		progress+=3;
	 	drawProgress();
	   }

	  imgsEnemy2[0]= new Image();
	  imgsEnemy2[0].src = 'img/enemy2.png';
	  imgsEnemy2[0].onload = function(){
		progress+=3;
		drawProgress();
	  }
	
	    imgsEnemy2[1]= new Image();
	  imgsEnemy2[1].src = 'img/enemy2_down1.png';
	  imgsEnemy2[1].onload = function(){
		progress+=3;
		drawProgress();
	  }
	
	  imgsEnemy2[2]= new Image();
	  imgsEnemy2[2].src = 'img/enemy2_down2.png';
	  imgsEnemy2[2].onload = function(){
		progress+=3;
		drawProgress();
	  }
	
	  imgsEnemy2[3]= new Image();
	  imgsEnemy2[3].src = 'img/enemy2_down3.png';
	  imgsEnemy2[3].onload = function(){
		progress+=3;
		drawProgress();
	  }
	
	  imgsEnemy2[4]= new Image();
	  imgsEnemy2[4].src = 'img/enemy2_down4.png';
	  imgsEnemy2[4].onload = function(){
		progress+=3;
		drawProgress();
	  }

     imgsEnemy3[0]= new Image();
	 imgsEnemy3[0].src = 'img/enemy3_n1.png';
	 imgsEnemy3[0].onload = function(){
		progress+=3;
		drawProgress();
	 }
 
	 imgsEnemy3[1]= new Image();
	 imgsEnemy3[1].src = 'img/enemy3_n2.png';
	  imgsEnemy3[1].onload = function(){
		progress+=3;
		drawProgress();
	}
		
	imgsEnemy3[2]= new Image();
	imgsEnemy3[2].src = 'img/enemy3_hit.png';
	imgsEnemy3[2].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgsEnemy3[3]= new Image();
	imgsEnemy3[3].src = 'img/enemy3_down1.png';
	imgsEnemy3[3].onload = function(){
		progress+=3;
		drawProgress();
	}

	  imgsEnemy3[4]= new Image();
	  imgsEnemy3[4].src = 'img/enemy3_down2.png';
	  imgsEnemy3[4].onload = function(){
		progress+=3;
		drawProgress();
	}
	  imgsEnemy3[5]= new Image();
	  imgsEnemy3[5].src = 'img/enemy3_down3.png';
	  imgsEnemy3[5].onload = function(){
		progress+=3;
		drawProgress();
	 }

      imgsEnemy3[6]= new Image();
	  imgsEnemy3[6].src = 'img/enemy3_down4.png';
	   imgsEnemy3[6].onload = function(){
		progress+=3;
		drawProgress();
	}
	imgsEnemy3[7]= new Image();
	imgsEnemy3[7].src = 'img/enemy3_down5.png';
	imgsEnemy3[7].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgsEnemy3[8]= new Image();
	imgsEnemy3[8].src = 'img/enemy3_down6.png';
	imgsEnemy3[8].onload = function(){
		progress+=3;
		drawProgress();
	}
	
	
	imgsGameLoading[0]= new Image();
	imgsGameLoading[0].src = 'img/game_loading1.png';
	imgsGameLoading[0].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgsGameLoading[1]= new Image();
	imgsGameLoading[1].src = 'img/game_loading2.png';
	imgsGameLoading[1].onload = function(){
		progress+=3;
		drawProgress();
	}
	imgsGameLoading[2]= new Image();
	imgsGameLoading[2].src = 'img/game_loading3.png';
	imgsGameLoading[2].onload = function(){
		progress+=3;
		drawProgress();
	}
	imgsGameLoading[3]= new Image();
	imgsGameLoading[3].src = 'img/game_loading4.png';
	imgsGameLoading[3].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgGamePause_nor= new Image();
	imgGamePause_nor.src = 'img/game_pause_nor.png';
	imgGamePause_nor.onload = function(){
		progress+=3;
		drawProgress();
	}

    imgsHero[0]= new Image();
	imgsHero[0].src = 'img/hero1.png';
	imgsHero[0].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgsHero[1]= new Image();
	imgsHero[1].src = 'img/hero2.png';
	imgsHero[1].onload = function(){
		progress+=3;
		drawProgress();
	}
	
	imgsHero[2]= new Image();
	imgsHero[2].src = 'img/hero_blowup_n1.png';
	imgsHero[2].onload = function(){
		progress+=3;
		drawProgress();
	}

	imgsHero[3]= new Image();
	imgsHero[3].src = 'img/hero_blowup_n2.png';
	imgsHero[3].onload = function(){
		progress+=3;
		drawProgress();
	}
	imgsHero[4]= new Image();
	imgsHero[4].src = 'img/hero_blowup_n3.png';
	imgsHero[4].onload = function(){
		progress+=3;
		drawProgress();
	}
	imgsHero[5]= new Image();
	imgsHero[5].src = 'img/hero_blowup_n4.png';
	imgsHero[5].onload = function(){
		progress+=3;
		drawProgress();
	}
	
    imgStart= new Image();
	imgStart.src = 'img/start.png';
	imgStart.onload = function(){
		progress+=3;
		drawProgress();
	}

	
}
/****************************************阶段2：就绪PHASE_READY************************8**************/
     var sky;//天空对象
	 var logo;
	 function startGame(){
	     curPhase=PHASE_READY;
	     sky=new Sky(imgBackground);//创建天空对象
		 logo=new Logo(imgStart);
		 startEngine();//启动主引擎，也就是定时器
		 //给画布绑定点击事件
		 canvas.onclick=function(){
		     if(curPhase===PHASE_READY){//就绪阶段进入加载阶段
			    curPhase=PHASE_LOADING;
				loading=new Loading(imgsGameLoading);
				
			 }
		 }
	  }
	 //天空的构造函数：使用两张图片轮换
	 function Sky(img){
	         this.x1=0;//第一张背景图片
	         this.y1=0;
	         this.x2=0;
	         this.y2=-img.height;
	         this.draw=function(){
	              ctx.drawImage(img,this.x1,this.y1);
	              ctx.drawImage(img,this.x2,this.y2);	   
	           }
			 this.move=function(){//天空的移动
			         this.y1++;
			         this.y2++;
			         if(this.y1>=canvas.height){//第一张图片移出去了
				          this.y1=this.y2-img.height;
				      }
			           if(this.y2>=canvas.height){//第二张图片移出去了
				          this.y2=this.y1-img.height;
				      }
			 }	 
	 }
	 function Logo(img){
	     this.x=canvas.width*0.5-img.width*0.5;
		 this.y=canvas.height*0.5-img.height*0.5;
		 this.draw=function(){
		     ctx.drawImage(img,this.x,this.y);
		 
		 }
	 
	 }
/***********************************阶段3:PHASE_LOADING******************************************/
     var loading;//new Loading(imgsGameLoading);
	 function Loading(imgs){
	     this.x=0;
		 this.y=canvasHeight-imgs[0].height;
		 this.index=0;//当前要绘制的是哪一张图片
		 this.draw=function(){
		      ctx.drawImage(imgs[this.index],this.x,this.y);
			  }
		 this.counter=0;
		 this.move=function(){//绘制下一张
			    this.counter++;
		         if(this.counter%6===0){
					 this.index++;
				 }
			     if(this.index>=imgs.length){ 
					 curPhase=PHASE_PLAY;
					 hero=new Hero(imgsHero);
					 bulletList=new Bulletlist();
					 enemyList=new Enemylist();
				 }
		     
		  }
	 
	 }
/****************************************阶段4:PHASE_PLAY***********************************************/
     var hero;
	 function Hero(imgs){//我方英雄飞机的构造函数
	     this.x=canvasWidth/2-imgs[0].width/2;
	     this.y=canvasHeight/2-imgs[0].height;
		 this.index=0;
	     this.draw=function(){
		     ctx.drawImage(imgs[this.index],this.x,this.y);
		     
		 }
		 this.counter=0;
		 this.move=function(){
			  this.counter++;
		      if(this.counter%3==0){
				  if(this.index==0){
				  this.index=1;
			  }else if(this.index==1){
				  this.index=0;}}
			  if(this.counter%5===0){//此处的10指定多久发射一颗子弹，发子弹的频率
			         this.fire();
			  }
		 }
		 this.fire=function(){//飞机发射子弹
			 var b=new Bullet(imgBullet1);
			 bulletList.add(b);
		 }
	 }
	 //当鼠标在画布上方移动时候需要修改我方英雄的位置
	 canvas.onmousemove=function(event){	
	     if(curPhase===PHASE_PLAY){
		      var x=event.offsetX;
			  var y=event.offsetY;
			 if(x<canvasWidth-0.5*imgsHero[0].width&&x>0.5*imgsHero[0].width&&
				 y<canvasHeight-0.5*imgsHero[0].height&&y>0.5*imgsHero[0].height){
			  hero.x=x-imgsHero[0].width/2;
			  hero.y=y-imgsHero[0].height/2;	
			 }
		 }
	 }
     //发射子弹,子弹对象的构造方法
	  var bulletList;
	  function Bullet(img){
	         this.x=hero.x+0.5*(imgsHero[0].width-img.width);
	         this.y=hero.y-img.height;
			 this.removable=false;
	         this.draw=function(){
			 ctx.drawImage(img,this.x,this.y);
		     }
			 this.move=function(){
			      this.y-=10;//此处的10是个全局变量移动速度可控随着分数增加可调
				  //飞出画布或者是打中敌机子弹应该消失
				  if(this.y<=-img.height){
					  this.removable==true;
				   }
			 }
	  }
	  //子弹列表保存着当前的所有子弹
	  function Bulletlist(){
	         this.arr=[];
		     this.add=function(bullet){//添加子弹生成新子弹
		           this.arr.push(bullet);			 
		      }
			 this.remove=function(i){
			     this.arr.splice(i,1);			 
			 }
			 this.draw=function(){
			     for(var i in this.arr){
				      this.arr[i].draw();				 
				 }
			 
			 }
			 this.move=function(){
			     for(var i in this.arr){
				      this.arr[i].move();
					  if(this.arr[i].removable){
					      this.remove(i);
					  }
				 }
			 
			 }
	 
	 }
  //敌方阵容
     //小号敌机
	 function Enemy1(imgs){
	      this.x=Math.random()*(canvasWidth-imgs[0].width);
	      this.y=-imgs[0].height;
		  this.index=0;//当前绘制的图片在数组中的下标
		  this.removable=false;
		  this.speed=6;//小敌机每42ms移动的距离
		  this.blood=1;
		  this.draw=function(){
		      ctx.drawImage(imgs[this.index],this.x,this.y);
		  }
		  this.move=function(){
		      this.y+=this.speed;
			  //飞出下边界或者炸毁了，就可以删除
			  if(this.y>=canvasHeight){
				  this.removable=true;
			   }
		  }
	 }
     //中号敌机
	  function Enemy2(imgs){
	      this.x=Math.random()*(canvasWidth-imgs[0].width);
	      this.y=-imgs[0].height;
		  this.index=0;//当前绘制的图片在数组中的下标
		  this.removable=false;
		  this.speed=5;//中敌机每42ms移动的距离
		  this.blood=3;
		  this.draw=function(){
		      ctx.drawImage(imgs[this.index],this.x,this.y);
		  }
		  this.move=function(){
		      this.y+=this.speed;
			  //飞出下边界或者炸毁了，就可以删除
			  if(this.y>=canvasHeight){
				  this.removable=true;
			   }
		  }
	 }
     //大号敌机
      function Enemy3(imgs){
	      this.x=Math.random()*(canvasWidth-imgs[0].width);
	      this.y=-imgs[0].height;
		  this.index=0;//当前绘制的图片在数组中的下标
		  this.removable=false;
		  this.speed=2;//大敌机每42ms移动的距离
		  this.blood=6;
		  this.draw=function(){
		      ctx.drawImage(imgs[this.index],this.x,this.y);
		  }
		  this.counter=0;
		  this.move=function(){
			  this.counter++;
			  if(this.counter%2===0){
				   if(this.index===0){this.index=1;
				   }else if(this.index===1){this.index=0}
			  }
		      this.y+=this.speed;
			  //飞出下边界或者炸毁了，就可以删除
			  if(this.y>=canvasHeight){
				  this.removable=true;
			  }
		  }
	 }
	 //所有敌机组成的列表
	 function Enemylist(){
	     this.arr=[];
		 this.add=function(enemy){
		     this.arr.push(enemy);
		 }
		 this.remove=function(i){
		     this.arr.splice(i,1);
		 }
		 this.draw=function(){
		     for( var i in this.arr){
			     this.arr[i].draw();
			 }
		 }
		 this.move=function(){
			 this.generate();
		     for(var i in this.arr){
				 var e=this.arr[i];
			     e.move();
				 if(e.removable){
				     this.remove(i);
				 }
			 }
		 }
		 //随机生成一个敌机,通过控制条件概率来控制飞机的随机生成
		 this.generate=function(){
		     var num=Math.floor(Math.random()*500);
			 if(num<6){
				 this.add(new Enemy1(imgsEnemy1));
			 }else if(num<9){
			     this.add(new Enemy2(imgsEnemy2));
			 }else if(num<10){
			     this.add(new Enemy3(imgsEnemy3));
			 }
		 
		 }
	 }
/*******************阶段5/
/*******************阶段6/
/*******************游戏的主引擎，贯穿游戏的始终***************************************************/
     function startEngine(){
	          setInterval(function(){
			     sky.draw();
				 sky.move();
				switch(curPhase){
				     case PHASE_READY:
						 logo.draw();//logo不需要动
					     break;
				     case PHASE_LOADING:
						 loading.draw();
					     loading.move();
						  break;
				     case PHASE_PLAY:
						 hero.draw();
					     hero.move();
						 bulletList.draw();
						 bulletList.move();
						 enemyList.draw();
						 enemyList.move();
						 break;
				     case PHASE_PAUSE:
						 break;
				     case PHASE_GAMEOVER:
						 break;
				}
			    			     
			  },42);//每一秒动24次
	 
	 } 