const usersAge = [20, 21, 23, 43];

const section = document.createElement("section");

usersAge.forEach((age, index, array) => {
  section.innerHTML += `<h1> Użytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`;
  if (index === array.length - 1) {
    document.body.appendChild(section);
  }
});
