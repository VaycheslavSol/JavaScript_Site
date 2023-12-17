function FindALL() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            document.getElementById("text_travel").innerText = "";
            json.forEach((element) => {
                document.getElementById("text_travel").append(element.body);    
            })  
        }
    );
}

function FindById() {
    const input = document.getElementById("name").value;
    fetch('https://jsonplaceholder.typicode.com/posts/' + input)
        .then((response) => response.json())
        .then((json) => {
            document.getElementById("text_travel").innerText = json.body
        }
    );
}