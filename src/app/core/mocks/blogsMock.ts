export interface Post {
    id: number;
    title: string;
    images: PostImages[];
    content: string;
    published: boolean;
  }

export class PostImages {
    id: number;
    order: number;
    url: string;
    width?: number;
    height?: number;
  }

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'iniziamo con Angular',
        images: [
          {
            id: 1,
            order: 1,
            url: 'https://cdn-images-1.medium.com/max/1600/1*aYD002x4UBQ4iJCRbiKJrg.png',
            width: 200,
            height: 300
          }
        ],
        content: `La tecnologia che permette la creazione di app e webapp si evolve molto rapidamente quindi spesso è difficile rimanere al passo e capire quali strumenti usare per lo sviluppo dei nostri progetti su dispositivi mobili.
        Angular (attuale versione 7.x) è l'ultima invenzione di un gruppo di ingegneri di Google, capeggiati da Brad Green, nata come evoluzione del progetto AngularJS, un popolare framework Model View (MV*) per la creazione di applicazioni (Web APP) e pagine web.
        Per framework si intende una struttura che facilita lo sviluppo, sia in termini di velocità che in termini di ordine e mantenibilità del codice, per intendersi come possono essere Laravel,Simphony nel caso di framework php.

        Con quale linguaggio si deve creare un'app in Angular?

        Per sviluppare sul nuovo framework, TypeScript è il linguaggio consigliato. Quest'ultimo non è altro che un'estensione, creata da Microsoft, di JavaScript e si basa sulle specifiche della versione 6 di JavaScript - ECMAScript 6 - rilasciate nel maggio 2015. Tuttavia è possibile continuare ad usare JavaScript ma con qualche complicazione in più che decisamente non vale la pena sperimentare.
        Il problema principale di TypeScript è che ancora non tutti i browser supportano ES6, quindi è necessario compilare tutto il codice TypeScript sviluppato, per trasformarlo in un linguaggio "comprensibile" agli attuali browser, ossia ES5.

        E' chiaro quindi che, se hai già delle esperienze nell'uso di JavaScript o jQuery, ti sarà più semplice apprendere questo nuovo linguaggio di alto livello basato appunto su JavaScript.

        Che software posso usare per scrivere in TypeScript

        Trattandosi di codice JavaScript, puoi usare un qualsiasi editor di testo, anche se è consigliato avere un software che aiuti nel completamento del codice. Tra questi posso citare Eclipse, VS Code, Sublime Text, WebStorm.


        Ho iniziato ad interessarmi alla programmazione per pura curiosità, ma col tempo sta crescendo in qualcosa di molto più interessante ed eccitante (una nuova sfida, forse). Voglio imparare nuove cose, ma allo stesso tempo voglio poter mettere in pratica ciò che imparo ed è per questo che ho creato questo sito nella speranza che un giorno potrò lavorare a progetti veri.   `,
        published: true
    },
    {
      id: 2,
      title: 'COME CREARE UN APP CON ANGULAR',
      images: [
        {
          id: 1,
          order: 1,
          url: 'http://www.key2.it/wp-content/uploads/2017/10/ANGULAR.png',
          width: 200,
          height: 300
        }
      ],
      content: `Angular e l’Angular CLI ci permettono di costruire applicazioni single page e siti mono pagine velocemente.

      Grazie a tutte le features native del framework, possiamo sbizzarrirci e focalizzarci nelle cose che rendono la nostra app unica.

      Ho deciso di fare un semplice Todo app e lo so che può essere alquanto sciocco fare una cosa così semplice con Angular, ma questo è solo un tutorial per vedere e capire alcune funzionalità di questo framework.

      Prima di cominciare

      Come prima cosa dobbiamo scaricare Node.js (link per scaricare) e accertarci che sia installato correttamente andando nel terminal e controllando le versioni di node e di npm (node package manager) rispettivamente con node –v e npm –v.

      Ora che abbiamo scaricato node possiamo procedere all’installazione di Angular CLI: npm install -g @angular/cl



      Creare la nostra prima app Angular

      Utilizzeremo Angular CLI per creare una serie di componenti, servizi, rotte e direttive.

      Per creare un nuovo progetto con Angular-cli basta aprire il terminale e far partire questo comando: ng new todo

      Dopo che avrà scaricato tutto il malloppo potremmo aprire il nostro progetto con il nostro editor preferito, il mio è VS CODE (più avanti farò un tutorial a riguardo).

      Se si è nuovi con Angular la struttura del progetto può sembrare caotica ma per iniziare noi ci concentreremo nella cartella src e in particolare la cartella app (qui è dove andremo a creare la nostra app).

      Per controllare lo stato della tua app utilizziamo:

      Ng serve

      Per farsi una cultura riguardo cosa puoi fare con ng si utilizza:

      Ng –help

      Quando il terminal carica tutto la nostra app sarà disponibile alla porta:

       http://localhost:4200/

      Per cominciare ci rendiamo la vita semplice e ci facciamo aiutare da bootstrap, ora in base a cosa devi fare puoi scegliere come aggiungerlo al tuo progetto puoi aggiungerlo con un link (per un progetto così piccolo è la scelta più veloce) oppure puoi installare bootstrap nel tuo node_modules (questo metodo di solito è consigliato quando si fanno progetti di una certa dimensione, perciò non lo userò in questo progetto ma faro una spiegazione dettagliata nel mio prossimo progetto).

      Quindi aggiungiamo bootstrap cdn in index.html:

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">



      Partiamo subito dal app.component.html dove troveremo tutto ciò che vediamo alla porta 4200. Qui cancelleremo tutto tranne che il title e aggiungeremo le classi bootstrap per crearci un semplice form.

      <div class="container">
      <form>
        <div class="form-group">
        <h1 class="text-center text-primary">Todo App</h1>
         <div class="input-group-prepend">
             <input type="text" class="form-control" placeholder="Add Todo" name="todo">
          <span class="input-group-text">Add</span>
         </div>
        </div>
      </form>
      </div>

      Se si vuole si può aggiungere un po' di css per renderlo più compatto.

      body{
      padding: 0;
      margin: 0;}
      form{
      max-width: 25em;
      margin: 1em auto;
      }



      Per popolare il campo di input, possiamo utilizzare la direttiva ngModel che serve a sincronizzare una proprietà con un campo di input in questo modo:

      <input type="text" #todo class="form-control" placeholder="Add Todo" name="todo" [ngModel]>

      Dopo di che per mostrare a video ciò che abbiamo inserito nel campo input ci serve prendere la variabile todo in questo modo:

      <p>{{todo.value}}</p>

      Adesso dobbiamo recuperare ciò che abbiamo inserito nell'input. Tornando nel app.component.ts ci creiamo un array vuota:

      export class AppComponent {
        todos=[]

      }

      Fatto questo dobbiamo aggiungere un evento click che andrà a caricare i valori contenuti nell’array todos.

      app.component.html:

      <span class="input-group-text" (click)="addTodo(todo.value)">Add</span>

      In app.component.ts:

      export class AppComponent {
      todos=[]

      addTodo(value){
          this.todos.push(value)
          console.log(this.todos)
        }

      }

      Per recuperare i dati contenuti in “todos” useremo la direttiva ngFor per ciclare tutti i dati contenuti nell’array e mostrare i dati.

      Nel app.component.html:

      <div class="data">
        <ul class="list-instyled">
         <li *ngFor="let todo of todoArray">{{todo}}</li>
        </ul>
        </div>

      Adesso quando cliccheremo il tasto add i dati verranno aggiunti alla lista sotto così:

      Mini video

      Stile

      {{vediamo cosa fare}}

      Ora che l’app è quasi finita aggiungiamo la funzionalità per cancellare i nostri todo. Per cancellare un elemento il modo migliore per farlo è splice, ma per cominciare partiamo aggiungendo un evento click all’icona di elimina e li aggiungiamo come parametro “todo”:

      <li *ngFor="let todo of todoArray">{{todo}} <i (click)="deleteItem(todo)" class="material-icons">delete</i></li>

      Nel app.component.ts:

      Cicliamo tutti i dati dell’array e cancelliamo quelli che clicchiamo.

      deleteItem(index) {

      this.todos.splice(index, 1);

      }

       `,
      published: true
    }
];

