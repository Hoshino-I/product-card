const statusMessage = document.getElementById("status-message");
const cardsContainer = document.getElementById("cards-container");
const getAllBtn = document.getElementById('get-all-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');

async function initApp() {
  const savedUsers = localStorage.getItem('users');

  if (savedUsers) {
    const users = JSON.parse(savedUsers);
    renderUsers(users)
    console.log("Взяли из памяти: ", users);
  } else {
    await fetchUsers();
  }
}

async function fetchUsers() {
  try {
    statusMessage.textContent = "Данные загружаются...";
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('./base.json');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }
    const users = await response.json();
    localStorage.setItem('users', JSON.stringify(users));
    statusMessage.textContent = "";
    renderUsers(users)
    console.log("Загрухили с сервера", users);
  } catch (error) {
    statusMessage.textContent = "Ошибка при загрузки данных";
    console.error(error);
  }
}

function renderUsers(users) {
  cardsContainer.innerHTML = "";

  users.forEach((user) =>{
    const card = document.createElement("div");
    card.classList.add('card');

    card.innerHTML = `
    <h3>${user.name}</h3>
    <p>Возраст: ${user.age}</p>
    <p>Фамилие: ${user.surname}</p>
    <p>Почта: ${user.email}</p>
    <button class="delete-btn" data-id="${user.id}">Удалить</button>
    `;
    cardsContainer.appendChild(card);
    
    const deleteBtn = card.querySelector(".delete-btn")
    deleteBtn.addEventListener('click', () => {
      const updatedUsers = users.filter((item) => item.id !== user.id);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      renderUsers(updatedUsers);
    })
  })
}

deleteAllBtn.addEventListener('click', () => {
  cardsContainer.innerHTML = "";
  localStorage.setItem('users', JSON.stringify([]));
  statusMessage.textContent = "Все карточки удалены";
})

getAllBtn.addEventListener("click", async () => {
  if (cardsContainer.children.length === 3) {
    statusMessage.textContent = 'у вас уже отоброжены все пользователи!';
    return;
  }
  await fetchUsers();
})

initApp();