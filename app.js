document.addEventListener('DOMContentLoaded', ()=> {

const cardArray = [{name:'shane1',img:'images/shane1.jpg'},{name:'shane1',img:'images/shane1.jpg'},
				   {name:'naomi1',img:'images/naomi1.jpg'},{name:'naomi1',img:'images/naomi1.jpg'},
				   {name:'alan1',img:'images/alan1.jpg'},{name:'alan1',img:'images/alan1.jpg'},
				   {name:'harper1',img:'images/harper1.jpg'},{name:'harper1',img:'images/harper1.jpg'},
				   {name:'kirsty1',img:'images/kirsty1.jpg'},{name:'kirsty1',img:'images/kirsty1.jpg'},
				   {name:'georgie1',img:'images/georgie1.jpg'},{name:'georgie1',img:'images/georgie1.jpg'}
				   ];

				   cardArray.sort(() => .5 - Math.random())

					function shuffleCards(array){
						for (var x=array.length-1;x>0;x--){
							var r=Math.floor(Math.random()*(x+1));
							var temp=array[x];
							array[x]=array[r];
							array[r]=temp;
							}
						return array;
					}

				   const grid = document.querySelector('.grid');
				   const resultDisplay = document.querySelector('#result');
				   var cardsChosen = [];
				   var cardsChosenID = [];
				   var cardsWon =[];

				   function createBoard(){
						for(let i=0; i<cardArray.length; i++){
							var card = document.createElement('img');
							card.setAttribute('src','images/blank.png');
							card.setAttribute('data-id',i);
							card.addEventListener('click',flipCard);
							grid.appendChild(card);
						}
				   }

				   //check for matches
				   function checkForMatch(){
						var cards = document.querySelectorAll('img');
						const optionOneID = cardsChosenID[0];
						const optionTwoID = cardsChosenID[1];
						if (cardsChosen[0]=== cardsChosen[1]){
							alert("You've found a match'");
							cards[optionOneID].setAttribute('src','images/white.png');
							cards[optionTwoID].setAttribute('src','images/white.png');
							cardsWon.push(cardsChosen)
						}else{
							cards[optionOneID].setAttribute('src','images/blank.png');
							cards[optionTwoID].setAttribute('src','images/blank.png');
							alert('Sorry, try again');
						}
						cardsChosen=[];
						cardsChosenID=[];
						//resultDisplay.textContent=cardsWon.length;
						//if (cardsWon.length === cardArray.length/2){
						//	resultDisplay.textContent = 'Congratulations! You found them all.'
						//}
				   }

				   //flip the cards
					function flipCard(){
						var cardID = this.getAttribute('data-id'); //getting the data id attribute
						cardsChosen.push(cardArray[cardID].name);
						cardsChosenID.push(cardID);
						this.setAttribute('src',cardArray[cardID].img) //adds image to square based on card id
						if(cardsChosen.length ===2){
						setTimeout(checkForMatch,500);
						}
					}				   
				   
				   
				   createBoard();

})