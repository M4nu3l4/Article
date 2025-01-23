
<body>
    <header>
        <h1>Spaceflight News App</h1>
    </header>
    
       

## Descrizione del Progetto
Questa applicazione web consente agli utenti di visualizzare articoli relativi al mondo dello spazio utilizzando l'API Spaceflight News. Gli articoli includono informazioni come titolo, immagine, data di pubblicazione e un breve sommario. L'applicazione è composta da una pagina principale con un elenco di articoli e una pagina di dettaglio per visualizzare ulteriori informazioni su un singolo articolo.

## Caratteristiche
- Visualizzazione degli articoli in una griglia reattiva.
- Dettaglio dell'articolo con informazioni complete.
- Utilizzo di React Router per la navigazione tra le pagine.
- Stile responsivo grazie a Bootstrap.

## Struttura dei File
- **App.tsx**: Configura il router e include Navbar, Footer, HomePage e ArticleDetail.
- **components/Navbar.tsx**: Componente per la barra di navigazione.
- **components/Footer.tsx**: Componente per il footer.
- **components/ArticleCard.tsx**: Visualizza un singolo articolo come card.
- **pages/HomePage.tsx**: Pagina principale che mostra l'elenco degli articoli.
- **pages/ArticleDetail.tsx**: Pagina per visualizzare i dettagli di un singolo articolo.
- **types/index.ts**: Definisce le interfacce TypeScript per l'applicazione.

## Come Eseguire il Progetto
1. Clona il repository.
2. Esegui `npm install` per installare le dipendenze.
3. Esegui `npm run dev` per avviare l'applicazione in modalità sviluppo.
4. Apri il browser e visita [http://localhost:5173](http://localhost:5173).

## Tecnologie Utilizzate
- React con TypeScript
- React Router per la navigazione
- Bootstrap per il design
- API Spaceflight News
- Vite per il bundling

## Note
Assicurati di avere una connessione a Internet per effettuare le chiamate API. Gli articoli vengono caricati dinamicamente dalla API di Spaceflight News.

        Creato da ❤️ da Manuela Lissia.

