const gifts = ["teddy bear", "drone", "doll"];
const names = [];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

function writeCards(names,event) {
    const tyNames = [];
    for(let i = 0; i < names.length; i++) {
        tyNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return tyNames;
}

function countDown(int) {
    while(int >= 0) {
        console.log(int)
        --int;
    }
}

//wrapGifts(gifts);
//countDown(5);