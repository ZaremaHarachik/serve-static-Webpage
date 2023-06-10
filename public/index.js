const pointButton = document.getElementById('points-button');
const usersContainer = document.querySelector('ul')

pointButton.addEventListener('click', () => {
    fetch("http://localhost:3000/foods").then((res) => {
        res.json().then((finalData) => {
            console.log(finalData);
            finalData.map((food) => {
                let foodLi = document.createElement('li');
                foodLi.textContent = food.name + " " + food.cuisine +" " + food.price;
                usersContainer.appendChild(foodLi);
            }) 
        })
    })
})