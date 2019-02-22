const exercisesList = document.querySelector('#exercises-list');
const form = document.querySelector('#add-exercise');

// Create element and render cafe
function renderExercise(doc) {
    let li = document.createElement('li');
    let label = document.createElement("label");
    let input = document.createElement("input");
    let name = document.createElement('span');
    let icon = document.createElement('span');
    let deleteBtn = document.createElement('div');


    input.type = "checkbox";
    icon.classList.add('icon');
    name.classList.add('name');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    deleteBtn.textContent = 'delete';
    deleteBtn.classList.add('deleteBtn');


    label.appendChild(input);
    label.appendChild(icon);
    label.appendChild(name);
    label.appendChild(deleteBtn);
    li.appendChild(label);

    exercisesList.appendChild(li);


    deleteBtn.addEventListener('click', (e) => {
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('exercises').doc(id).delete();
    })
}

db.collection('exercises').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderExercise(doc);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('exercises').add({
        name: form.name.value
    })
    form.name.value = '';
})