class Card{
    constructor(){
        this.cards=[]

    }



    Cardgenerator(){
        let unique= new Set(this.cards);


        do{
            let i= Math.floor((Math.random() * 54) + 1);

            unique.add(i)

        }
        while((unique.size<16))

        this.cards=unique
        console.log(unique);


 





    
    }



        InsertImage(){

            let text=document.createTextNode('Hola')
            let cardbody= document.createElement('div')
            cardbody.setAttribute('class', 'card-whole')


            let main =document.createElement('section')
            let b= document.body.appendChild(main).appendChild(cardbody)
            
            this.cards.forEach(c=>{
                let a=document.createElement('div')
                a.setAttribute('class', 'card-row')
        
                
                let imgcard=document.createElement('div')
                imgcard.setAttribute('class', 'card-image')
                const img= document.createElement('img')
                imgcard.appendChild(img)
                cardbody.appendChild(a)


                a.appendChild(imgcard)



                img.setAttribute("src", `./loteria Cards/${c}.jfif`)

                
            })

        }




}
let obj =new Card
obj.Cardgenerator()
obj.InsertImage()
