class Libro {
    constructor(titulo, autor, genero, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.paginas = paginas;
    }
}


const libro1 = new Libro("Hijo de Hombre", "Augusto Roa Basto", "Novela", 255);
const libro2 = new Libro("Amor de Invierno", "Mario Halley Mora", "novela", 432);

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarRegistros() {
     
        document.write("<h1>Registros de la Biblioteca</h1>");
        document.write("<table>");
        document.write("<tr><th>Título</th><th>Autor</th><th>Género</th><th>Páginas</th></tr>");
        this.libros.forEach(libro => {
            document.write(`<tr><td>${libro.titulo}</td><td>${libro.autor}</td><td>${libro.genero}</td><td>${libro.paginas}</td></tr>`);
        });
        document.write("</table>");
    }
}


const miBiblioteca = new Biblioteca();


miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);


miBiblioteca.mostrarRegistros();
