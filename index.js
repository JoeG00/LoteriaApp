
function Cardgenerator(){
    const cards=[]

    let currentnum= Math.floor((Math.random() * 54) + 1);

    for (i=0; i<16; i++){
        let currentnum= Math.floor((Math.random() * 54) + 1);
        if (cards.includes(currentnum)){
            let newnum= Math.floor((Math.random() * 54) + 1);
            cards.push(newnum)
        }else{
        cards.push(currentnum)
        }

    }

    console.log(cards)

}

function InsertImage(){

    const imagediv= document.getElementsByClassName('card-image')

    for(i=0; i<=imagediv.length+1; i++){
        let j=i+1
        const img= document.createElement('img')
        img.setAttribute("src", `./loteria Cards/${j}.jfif`)
        j=j+1
        imagediv[i].appendChild(img)

    }




    console.log(imagediv)

}
InsertImage()
Cardgenerator()
