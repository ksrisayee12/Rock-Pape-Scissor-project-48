var rand2,rand
var computer,player,pscore=0,cscore=0

function preload(){
    r=loadImage('rock.png')
    p=loadImage('paper.png')
    s=loadImage('scissor.png')
}

function setup(){
    createCanvas(1300,600)
    //for display
    ro=createSprite(500,200)
    ro.addImage(r)
    ro.scale=0.1

    pa=createSprite(700,200)
    pa.addImage(p)
    pa.scale=0.1
   
    sc=createSprite(900,200)
    sc.addImage(s)
    sc.scale=0.1

    //for player
    p1=createSprite(400,400)
    p1.addImage(r)
    p1.scale=0.15
    p1.visible=false

    p2=createSprite(400,400)
    p2.addImage(p)
    p2.scale=0.15
    p2.visible=false

    p3=createSprite(400,400)
    p3.addImage(s)
    p3.scale=0.15
    p3.visible=false

    //for player
    c1=createSprite(1000,400)
    c1.addImage(r)
    c1.scale=0.15
    c1.visible=false

    c2=createSprite(1000,400)
    c2.addImage(p)
    c2.scale=0.15
    c2.visible=false

    c3=createSprite(1000,400)
    c3.addImage(s)
    c3.scale=0.15
    c3.visible=false

    co1=createSprite(1000,400)
    co1.addImage(r)
    co1.scale=0.15
    co1.visible=false

    co2=createSprite(1000,400)
    co2.addImage(p)
    co2.scale=0.15
    co2.visible=false

    co3=createSprite(1000,400)
    co3.addImage(s)
    co3.scale=0.15
    co3.visible=false

    com1=createSprite(1000,400)
    com1.addImage(r)
    com1.scale=0.15
    com1.visible=false

    com2=createSprite(1000,400)
    com2.addImage(p)
    com2.scale=0.15
    com2.visible=false

    com3=createSprite(1000,400)
    com3.addImage(s)
    com3.scale=0.15
    com3.visible=false

    //text
    tie=createElement('h2')
    tie.html('ITS A DRAW.')
    tie.style('background-color','yellow')
    tie.style ('font-family','sans-serif')
    tie.position(630,450)
    tie.hide()

    won=createElement('h2')
    won.html('YOU WON!')
    won.style('background-color','lightgreen')
    won.style ('font-family','sans-serif')
    won.position(630,450)
     won.hide()

    
     lose=createElement('h2')
     lose.html('YOU LOSE..')
     lose.style('background-color','red')
     lose.style ('font-family','sans-serif')
     lose.position(630,450)
    lose.hide()

}
function draw(){
    background(rgb(47, 0, 156))
   drawSprites()

   if(mousePressedOver(ro)){
       rand=Math.round(random(1,5));
       player=1
       p1.visible=true
       p2.visible=false
       p3.visible=false
       if(rand==1||rand==4){
           c1.visible=true
           c2.visible=false
           c3.visible=false
           //computer=1
           tie.show()
           won.hide()
           lose.hide()
       }
       if(rand==2||rand==5){
            c1.visible=false
            c2.visible=true
            c3.visible=false
            // computer=2
            tie.hide()
            won.hide()
            lose.show()
       }
       if(rand==3){
        c1.visible=false
        c2.visible=false
        c3.visible=true
        // computer=3
        tie.hide()
        won.show()
        lose.hide()
       }}

       if(mousePressedOver(pa)){
           player=2
        rand=Math.round(random(1,5));
        p1.visible=false
        p2.visible=true
        p3.visible=false
        if(rand==1||rand==4){
            c1.visible=true
            c2.visible=false
            c3.visible=false
        //    computer=1
        tie.hide()
        won.show()
        lose.hide()
        }
        if(rand==2||rand==5){
             c1.visible=false
             c2.visible=true
             c3.visible=false
            //  computer=2
            tie.show()
            won.hide()
            lose.hide()
        }
        if(rand==3){
         c1.visible=false
         c2.visible=false
         c3.visible=true
        //  computer=3
        tie.hide()
        won.hide()
        lose.show()
        }
        }
        if(mousePressedOver(sc)){
            rand=Math.round(random(1,5));
            player=3
            p1.visible=false
            p2.visible=false
            p3.visible=true
            if(rand==1||rand==4){
                c1.visible=true
                c2.visible=false
                c3.visible=false
        //    computer=1
        tie.hide()
        won.hide()
        lose.show()
            }
            if(rand==2||rand==5){
                 c1.visible=false
                 c2.visible=true
                 c3.visible=false
                //  computer=2
                tie.hide()
                won.show()
                lose.hide()
              
            }
            if(rand==3){
             c1.visible=false
             c2.visible=false
             c3.visible=true
            //  computer=3
            tie.show()
            won.hide()
            lose.hide()
            }
        }
    //     fill ('white')
    //  textSize(50)
    //  text (pscore+'-'+cscore,700,50) 
    //  fill ("pink")
    //  text('   YOU              COMPUTER',500,50) 

     
    

}
