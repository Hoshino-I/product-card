const statusMessage = document.getElementById("status-message");
const cardsContainer = document.getElementById("cards-container");
const getAllBtn = document.getElementById('get-all-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const cardTemplate = document.getElementById('user-card-template');
let totalUsersCount = 0;

async function initApp() {
  const savedUsers = localStorage.getItem('users');

  if (savedUsers) {
    const users = JSON.parse(savedUsers);
    if (users.length > 0) {
      totalUsersCount = users.length;
    }
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
    totalUsersCount = users.length;
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

  users.forEach((user) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    cardClone.querySelector('.user-name').textContent = user.name;
    cardClone.querySelector('.user-age').textContent = `Возраст: ${user.age}`;
    cardClone.querySelector('.user-surname').textContent = `Фамилие: ${user.surname}`;
    cardClone.querySelector('.user-email').textContent = `Почта: ${user.email}`;
    
    const deleteBtn = cardClone.querySelector(".delete-btn")
    deleteBtn.addEventListener('click', () => {
      const updatedUsers = users.filter((item) => item.id !== user.id);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      renderUsers(updatedUsers);
    });
    cardsContainer.appendChild(cardClone);
  });
}

deleteAllBtn.addEventListener('click', () => {
  cardsContainer.innerHTML = "";
  localStorage.setItem('users', JSON.stringify([]));
  statusMessage.textContent = "Все карточки удалены";
})

getAllBtn.addEventListener("click", async () => {
  if (totalUsersCount > 0 && cardsContainer.children.length === totalUsersCount) {
    statusMessage.textContent = 'у вас уже отображены все пользователи!';
    return;
  }
  await fetchUsers();
})

initApp();