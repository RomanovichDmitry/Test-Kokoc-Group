const URL = `https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json`;

const xhr = new XMLHttpRequest();
xhr.open(`POST`, URL, false);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();

if (xhr.status !== 200){
    alert(`Ошибка при получении данных`)
}

export let result = JSON.parse(xhr.responseText);
