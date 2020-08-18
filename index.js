function Cardgenerator(){
    const card=[]
    let currentnum= Math.floor((Math.random() * 54) + 1);

    for (i=0; i<16; i++){
        let currentnum= Math.floor((Math.random() * 54) + 1);
        if (card.includes(currentnum)){
            let newnum= Math.floor((Math.random() * 54) + 1);
            card.push(newnum)
        }else{
        card.push(currentnum)
        }

    }

    console.log(card)

}

function InsertImage(){
    const imagediv= document.querySelector('.card-image')
    img=document.createElement("img").setAttribute("src", "./loteria Cards")

}
InsertImage()
Cardgenerator()
