let url = 'https://jsonplaceholder.typicode.com/photos';

 fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    let photo_Items = document.getElementsByClassName("photo-items")[0];
    let count = 0;
    for(let index = 0; index < 100; index++){

     let div = document.createElement("div");
     div.classList.add("card-item");
     div.classList.add("card" + count);

     let title = document.createElement("h3");

     title.innerText = data[index]["title"];
     title.classList.add("title-desgin");

     let image = document.createElement("img");
     image.classList.add("photo-items-size");
     image.src = data[index]["url"];
     
     let paragraph =  document.createElement("p");
     paragraph.innerText = data[index]["title"] + " "+ data[index]["title"];

     let button = document.createElement("button");
     
     button.innerText = "Button";
     button.classList.add("card" + count);
     button.classList.add("button-desgin");
     
     button.addEventListener("click", (card_Id) => {

      let card = document.getElementsByClassName(button.classList[0])[0];
        console.log(card);

       if(!card.classList.contains("visited"))
         card.classList.add("visited");
       else 
         card.classList.remove("visited");
     })
     
     div.appendChild(image);
     div.appendChild(title);
     div.appendChild(paragraph);
     div.appendChild(button);
     photo_Items.appendChild(div);
     count++;
    }

  })
  .catch((err) => {

  })
