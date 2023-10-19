let List = document.querySelectorAll('.List');
            let itemBox = document.querySelectorAll('.FeatureProduct_card');
            console.dir(itemBox);
            for(let i=0; i<List.length; i++){
                List[i].addEventListener('click', function(){
                    for(let j=0; j<List.length; j++){
                        List[j].classList.remove('active');
                    }
                    this.classList.add('active');
                    let dataFilter = this.getAttribute('data-filter');

                    for (let k = 0; k < itemBox.length; k++) {
                       itemBox[k].classList.remove('active'); // Supprimez la classe 'moi' de tous les éléments
                       itemBox[k].classList.add('itemBox2'); 
                       if(itemBox[k].getAttribute('data-item')== dataFilter || dataFilter=="All"){
                        itemBox[k].classList.remove('itemBox2');
                         itemBox[k].classList.add('active');

                       }
                
                    }
                })
                    
                
            }