import getUSers from './getUser.js';

const createRow = ({ id, name, email, website }) => {
  return `<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${website}</td>
  </tr>
  `
}

const updateTable = (users) => {
  const tableBodyEl = document.getElementById('tableBody');
  if (!users.length) {
    tableBodyEl.innerHTML = 'No data matched'
    return
  }
  const str = users.map((user) => createRow(user));
  tableBodyEl.innerHTML = str.toString().replaceAll(',', '');
}

function onSearch(element) {
  const seacrhText = element.value.toLowerCase();
  const filteredUsers = getUSers().filter(user => user.name.toLowerCase().includes(seacrhText));
  updateTable(filteredUsers);
}

updateTable(getUSers());

window.onSearch = onSearch;

