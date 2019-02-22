const exercisesList = document.querySelector('#exercises-list');

// Create element and render cafe
function renderExercise(doc) {
    let li = document.createElement('li');
    let label = document.createElement("label");
    let input = document.createElement("input");
    let name = document.createElement('span');
    let icon = document.createElement('span');

    input.type = "checkbox";
    icon.classList.add('icon');
    name.classList.add('name');
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;

    label.appendChild(input);
    label.appendChild(icon);
    label.appendChild(name);
    li.appendChild(label);

    exercisesList.appendChild(li);
}

db.collection('exercises').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderExercise(doc);
    })
})