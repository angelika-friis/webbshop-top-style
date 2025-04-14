# TopStyle Webshop

Detta projekt är en fullstack webbshop utvecklad med React, Node.js, Express och MongoDB. Projektet är en inlämningsuppgift i kursen **Webbramverk för Javascript**.

## 🧾 Innehåll
- [Syfte](#syfte)
- [Funktioner](#funktioner)
- [Teknologier](#teknologier)
- [Installation](#installation)
- [Starta projektet](#starta-projektet)
- [Struktur](#struktur)
- [Säkerhet](#säkerhet)

---

## 🎯 Syfte

Syftet med projektet är att:
- Skapa en fullstacklösning med React och Node.js.
- Anropa och hantera data via ett REST API.
- Strukturera applikationen enligt god arkitektur i React.
- Implementera statehantering och routing med moderna tekniker.

---

## 🚀 Funktioner

- Användarregistrering och inloggning med JWT-autentisering.
- Sökfunktion för produkter.
- Produktdetaljsida med möjlighet att lägga till varor i varukorg.
- Varukorg och beställningsflöde med kontroll på att varukorgen inte är tom.
- Beställningshistorik och möjlighet att byta lösenord.
- Responsiv design för mobil, surfplatta och desktop.

---

## 🛠️ Teknologier

### Frontend
- React
- React Router
- Context API / Redux / MobX (en av dessa måste användas)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT för autentisering

---

## 📦 Installation

1. Klona projektet:
   ```bash
   git clone https://github.com/ditt-användarnamn/topstyle-webshop.git
   ```

2. Gå till projektmappen:
   ```bash
   cd topstyle-webshop
   ```

3. Installera beroenden i både `client/` och `server/`:
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

---

## ▶️ Starta projektet

1. Starta backend (i `server/`):
   ```bash
   npm start
   ```

2. Starta frontend (i `client/`):
   ```bash
   npm run dev
   ```

---

## 🗂️ Struktur

```
topstyle-webshop/
├── client/        # React frontend
│   └── ...
├── server/        # Node.js backend med Express
│   └── ...
└── README.md
```

---

## 🔐 Säkerhet

- JWT används för autentisering.
- Grundläggande skydd mot XSS och CSRF implementeras.
- Endast inloggade användare kan se och hantera sina beställningar.
