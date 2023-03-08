// Système de constante et variable
// Différent types

const firstName: string = 'Kévin';
const lastName: string = 'Wolff'; 

const age: number = 30

const isHeWakeUp: boolean = false;

// Tableau
const learners: any[] = ['Kevin', 30, true]

// Objet
const learner: any = {
    name: 'Kevin',
    age: 30,
    wakeUp: false
}


// Exercice # 0

// À la racine du répertoire de ce projet, supprimer le dossier .git, vous pouvez exécuter la commande "git status" pour vérifier si git est initialiser ou non.
// Toujours à la racine du répertoire de ce projet, initialiser git et faites les commandes nécessaires pour pousser ce projet dans un dépot Github.
// Partager l'adresse de ce nouveau repo, contenant ce projet, au formateur.

// Exercice # 1

// - Créer une fonction Javascript avec deux constantes nommées : "address" et "zipCode", la première est une string, la seconde est un nombre, veillez à bien les typer.
// - Créer une constante nommée "addressFull" contenant la concaténation de ces deux variables, veillez à bien les typer.
// - Faire s'afficher la constante "addressFull" dans la console du navigateur.

// Exercice # 2

// - Créer une fonction Javascript avec une constante contenant un tableau de vos 5 pays favoris, veillez à bien le typer.
// - À l'aide d'une boucle, itérrer dans ce tableau et afficher chaque valeur dans la console du navigateur.

// Exercice # 3

// - Créer une fonction Javascript pour décomposer une string, exemple : ma phrase : "developpement", resultat souhaité : [d, e, v, e, l, o, p, p, e, m, e, n, t]
// - Le resultat est stocké dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.

// Exercice # 4

// - Créer une fonction Javascript pour recomposer une string, exemple : ma phrase décomposée : [d, e, v, e, l, o, p, p, e, m, e, n, t], résultat souhaité : "developpement"
// - Le resultat est stockée dans une constante correctement typée dont vous afficherez la valeur dans la console du navigateur.



            //Exercie #1

            function createAddress(address: string, zipCode: number) {
                const addressFull: string = `${address} ${zipCode}`;
                console.log(addressFull);
                return addressFull;
              }
              
              const myAddress: string = "123 Main St";
              const myZipCode: number = 12345;
              const myAddressFull: string = createAddress(myAddress, myZipCode);
              
            //Exercice #2

            function displayFavoriteCountries() {
                const countries: string[] = ["France", "Japan", "Italy", "Spain", "Canada"];
                for (let i=0; i<countries.length; i++) {
                  console.log(countries[i]);
                }
              }
              
              displayFavoriteCountries();
              




            //Exercice #3

            function decomposeString(str: string): string[] {
                let result: string[] = [];
                for (let i = 0; i < str.length; i++) {
                  result.push(str.charAt(i));
                }
                return result;
              }
              
              const phrase: string = "developpement";
              const decompose: string[] = decomposeString(phrase);
              console.log(decompose);
              
        //Exercice #4

        function composeString(arr: string[]): string {
            let result: string = "";
            for (let i = 0; i < arr.length; i++) {
              result += arr[i];
            }
            return result;
          }
          
          const decomposed: string[] = ["d", "e", "v", "e", "l", "o", "p", "p", "e", "m", "e", "n", "t"];
          const composed: string = composeString(decomposed);
          console.log(composed);
          