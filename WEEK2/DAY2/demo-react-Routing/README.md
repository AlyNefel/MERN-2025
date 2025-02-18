# Demo For React Hack-a-thon:

#! Definition: 
React est une bibliothèque JavaScript qui permet la création d'interface web et natives.
Elle permet une synchronisation plus simple, et plus efficace entre les données de notre application
et le rendu HTML.


# Problematique ⏭️: Pourquoi React pour comprendre son utilisation?

//* Exemple: Prénons un exemple concret dans une page, dont on a besoin de créer un système de ToDo list.
On aura la possibilité par la suite de modifier, supprimer, etc...
Le problème qu'on va avoir est qu'il sera diificile de synchroniser l'état, et la vue de notre système (à savoir la liste de tache à faire avec le DOM).

Quand je rajoute une tache , il faut que je rajoute la balise "li" qui corresponde, quand je supprime une tache, il faut que je supprime la "li" qui corresponde.
Si je mets en place un système de filtre qui permet de masquer les taches qui ont déjà été faites, il va falloir que je trouve tous les éléments, que je les masque, ou les affiche en fonction de la situation.

Résumé: Synchroniser notre DOM avec notre état n'est pas forcement évident.
Et lorsque l'application devient grand, on se retrouve dans une situation, où serait très difficile de la maintenir.



//! Remarque: C'est là que React va intervenir, il va nous permettre de separer notre système en plusieurs parties.


# Illustration:
function ToDoList () {



# Prémièrement: Une partir où l'on va définir l'état de notre composant.
const [todos, setTodos] = useState([])  " le système de todos, avec les taches à faire "

# Deuxièmement (Optionnelle): Créer des mutations qui vont nous permettre de manipuler notre état.
//* Exemple: Ajouter des éléments, supprimer ou modifier des éléments, etc ....


# Troisièmement: Rendu en fonction de l'état (la partie nous permettant de réprésenter notre vue en fonction de l'état)

return <div>
    <h1>List of Tasks</h1>
    <ul>
        {todos.map(todo) => (
            <li key={todo}>{todo}</li>
        )}
    </ul>
</div>
}


# Points Interessants avec React:
# 1. La surface est simple (on a beaucoup de méthodes, ou fonctions à appréhender)
# 2. Un grand ecosystème (beaucoup de librairies "animations, gestions de formulaires, etc..." qu'on peut utiliser).
# 3. La syntaxe JSX



# Project Ressources
# 1. Create React App with Vite Tool: 
* npm create vite@latest project-name
* cd project-name
* npm install axios react-router-dom react-toastify
* Delete App.css file and react.svg picture in assets folders
* clear index.css
# Tailwind Framework Installation for your project:
Link for Tailwind Website: tailwindcss.com 
command for installation: 
    a. npm install -D tailwindcss@3.4.17 postcss@8.4.49 autoprefixer
    b. npx tailwindcss init -p
    c. tailwind.config.json : Copy and paste this code
    ```
    /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
        extend: {
        colors:{
            primary: "#5F6FFF",
            secondary: "#0baee1"
            },
        gridTemplateColumns: {
            'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
        }
        },
    },
    plugins: [],
    }
    ```

    d. in index.css file, copy and paste this code directly on the website:
    ```
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


    //* For responsive app:
    ::-webkit-scrollbar{
        @apply hidden
        }

        @media (max-width:740px) {
    .active p{
        @apply text-white bg-secondary
        }
    }
    ```

    e. Testing if Tailwind support our Project:
    in App.jsx:
    <h1 className="text-green-500 text-center fs-1"></h1>