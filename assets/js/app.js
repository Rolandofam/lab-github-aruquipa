const URL = "https://jsonplaceholder.typicode.com";
function mostrarUsuario() {
    fetch(`${URL}/users`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Estado: ${response.status}`);
            } else {
                console.log(`Estado: ${response.status}`);
                // console.log(response);
            }
            return response.json();
        })
        .then((data) => {
            // console.log("Exito:", data);
            llenaUsuario(data, 0);
        })
        .catch((error) => {
            // console.log(response.status);
            console.error("mensaje", error.message);
        });
}

function buscarUsuario() {
    let idUsuario = document.getElementById("id-usuario").value;
    fetch(`${URL}/users/${idUsuario}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Estado: ${response.status}`);
            } else {
                console.log(`Estado: ${response.status}`);
                // console.log(response);
            }
            return response.json();
        })
        .then((data) => {
            // console.log("Exito:", data);
            llenaUsuario(data, 1);
            document.getElementById("id-usuario").value = "";
        })
        .catch((error) => {
            // console.log(response.status);
            console.error("mensaje", error.message);
        });
}

function llenaUsuario(datos, opcion) {
    usuario.clear();
    let i = 1;
    if (opcion == 0) {
        datos.forEach((elemento) => {
            usuario.row.add([i, elemento.name, elemento.email]);
            i++;
        });
    } else {
        usuario.row.add([i, datos.name, datos.email]);
    }
    usuario.draw();
}

function limpiaUsuario() {
    usuario.clear().draw();
}
function mostrarPost() {
    fetch(`${URL}/posts`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Estado: ${response.status}`);
            } else {
                console.log(`Estado: ${response.status}`);
                // console.log(response);
            }
            return response.json();
        })
        .then((data) => {
            // console.log("Exito:", data);
            llenaPost(data, 0);
        })
        .catch((error) => {
            // console.log(response.status);
            console.error("mensaje", error.message);
        });
}

function buscarPost() {
    let idPost = document.getElementById("id-post").value;
    fetch(`${URL}/posts/${idPost}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Estado: ${response.status}`);
            } else {
                console.log(`Estado: ${response.status}`);
                // console.log(response);
            }
            return response.json();
        })
        .then((data) => {
            // console.log("Exito:", data);
            llenaPost(data, 1);
            document.getElementById("id-post").value = "";
        })
        .catch((error) => {
            // console.log(response.status);
            console.error("mensaje", error.message);
        });
}

function llenaPost(datos, opcion) {
    post.clear();
    let i = 1;
    if (opcion == 0) {
        datos.forEach((elemento) => {
            post.row.add([i, elemento.id, elemento.title, elemento.body]);
            i++;
        });
    } else {
        post.row.add([i, datos.id, datos.title, datos.body]);
    }
    post.draw();
}

function limpiaPost() {
    post.clear().draw();
}
