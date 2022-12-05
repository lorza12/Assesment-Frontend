# Assesment-Frontend


El objetivo de esta misión es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.

La misión consta de dos partes: primero deberás construir un proyecto en React y después deberás responder una serie de preguntas. En el reporte de la misión deberás agregar el link al repositorio del proyecto y las respuestas a las preguntas.



![image](https://user-images.githubusercontent.com/115027137/205542594-9d873249-037e-4e43-927a-f82da09e94a1.png)

<h1></h1>





<h1>Respuestas a las preguntas</h1>

<h1>¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?</h1>
Sprint planing.

- Se realiza al comienzo de cada Sprint y participa el equipo para definir como esta organizado el backlog del producto y como las tareas serán repartidas durante la semana.

Daily Scrum.

- Es una reunion diaria en la cual su duración es aproximadamente de 15 minutos en la que participa el development team respondiendo las preguntas principales. Que hice ayer, que voy hacer hoy, existe algun impedimento para el sprint goal?

<h1>¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.</h1>


los wireframes son los prototipos de las paginas web, que ayudan a dar una estimación del esquema del producto final. Alli se puede observar la estructura basica y los tipos de contenido que tendra. La creación de wireframes es una manera eficaz de hacer prototipos rápidos de páginas, mientras que se realiza a la vez una medición de la viabilidad de un concepto de diseño. Dentro del proceso de construcción de un sitio web las ideas se hacen mas tangibles.

Herramientas que se pueden utilizar: Balsamic , Canva , MockFlow.

<h1>Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.</h1>


- Las variables tipo Var pueden ser tomadas como variables globales en la cual pueden ser modificadas sin ninguna restricción.

- Las variables tipo Let tienen el concepto de block scope en la cual solo permite que se pueda acceder dentro del bloque declarado.

- Las variables tipo constantes Const son variables que no se pueden modificar

<h1>Explicar la diferencia entre git merge y git rebase.</h1>

- El rebase unifica las ramas dejando un arbol lineal o más bonito.El merge aun deja el gráfico de las ramas.

- otras de las diferencias, el merge a la hora de querer unificar nos toca realizar un commit de más , en nuestro caso el de la descripción (uniendo commit 1,2 y 4 con el 3 ) , este es el commit que muchos dicen commit basura ó innecesario . El rebase unifica sin necesidad de crear un nuevo commit .

- Hay una diferencia bien importante que debemos tener en cuenta a la hora de mirar cual de los dos tomar . El rebase unifica las ramas perdiendo el historial de los commit y el merge no . Esto puede resultar bien importante cuando se necesite llevar o saber el historial de commit y se esta trabajando con otros compañeros en esa rama. Puedes llegar ser odiado por el equipo al usar rebase XD.

<h1>¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?</h1>

-El comando git pull se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.

- Una Pull Request es la acción de validar un código que se va a mergear de una rama a otra. En este proceso de validación pueden entrar los factores que queramos: Builds (validaciones automáticas), asignación de código a tareas, validaciones manuales por parte del equipo, despliegues, etc.

<h1>¿Qué es el Virtual DOM?</h1>

- El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

<h1>Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta.</h1>

![codePPP](https://user-images.githubusercontent.com/115027137/205544344-58183164-59e7-417c-90a8-f881ee040541.png)


<h1>Codigo</h1>

``` .c-section{
    background-color: rgb(255, 255, 255);
    max-width: 710px;
    height: 600px;
    
}

.c-section__title{
    background-color: rgb(78, 76, 76);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
}

.c-services{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    padding: 0;
}

.c-services__item{
    background-color: rgb(246, 247, 242);
    width: 350px;
    height: 150px;
    list-style:none;

}

.c-services__item:hover{
    box-shadow: 0px 10px 10px -10px;
    
}

h3{
    text-align: center;
}

```

