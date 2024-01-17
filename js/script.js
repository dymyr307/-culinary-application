function app() {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const wrapper = document.querySelector('.results-wrapper');

  const renderItem = (itemData) => {
    return `
      <div class="item-wrapper">
        <img src="${itemData.strMealThumb}" />
        <h3>${itemData.strMeal}</h3>
        <p>${itemData.strCategory}</p>
        <p>${itemData.strArea}</p>
        <p>${itemData.strInstructions}</p>
      </div>
    `;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let content = '';

        for (let meal of data.meals) {
          content += renderItem(meal);
        }
        wrapper.innerHTML = content;
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong!');
      });
  });
}

app();
