// Persons cards
const person = document.querySelector('.person')
const button = document.querySelector('button')

button.onclick = () => {
    const json = () => {
        const request = new XMLHttpRequest()
        request.open('GET', './person.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.addEventListener("load", () => {
            const persons = JSON.parse(request.response)
            persons.forEach(people => {
                const man = document.createElement('div')
                man.setAttribute('class', 'man')
                man.innerHTML = `
                    <h2>${people.name}</h2>
                    <p>${people.age}</p>
                    <img src="${people.photo}" alt="img">
                    `
                person.append(man)
            })
        })
    }
    json()
}