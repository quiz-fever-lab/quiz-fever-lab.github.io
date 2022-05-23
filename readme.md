# Quiz Fever
Sistema za syzdavane, upravlenie, i popylvane na testove sys svoboden dostyp.

## Funkcionalnost
* Registraciq na potrebiteli
* Vyzmozhnost za razglezhdane i reshavane na testove ot drugi porebiteli
* Razlichni temi, svyrzani s testovete
* Vyzmozhnost za filtrirane po tema i tyrsene po zaglavie
* Vodene statistika za vseki potrebitel i test
* Interaktiven redaktor za testove
* Fluiden UX

## Tehnologii
* HTML, CSS, JavaScript
* lit-html, page.js
* Github Pages, Back$App

## Ekrani (Stranici)
* **Welcome Screen** (landing page)
* **Login/Register** - registraciq s meil, potr. ime, parola
* **Quiz Browser** - spisyk s testove i vyzhmozhnost za tyrsene po zaglavie i filtraciq po tema
* **Quiz Details** - dopylnitelno opisanie, statistika za testa, informaciq za avtora i vyzmozhnost za startirane na testa
* **Quiz Contest Mode** - otgovarqne na vyprosi, vseki e v otdelen izgled, vyzmozhnost za svobodno preminavane ot vypros na vypros, vyzmozhnost za restartirane na testa
* **Quiz Results** - obobshtenie na rezultatite, vyzmozhnost za preglezhdane na sgreshenite vyprosi
* **Profile Page** - informaciq za syzdadeni testove i  vsichki resheni testove
* **Quiz Editor** - integriran redaktor za testove, vyprosi i otgovori

## Plan za izpylnenie
### Part 1
* Syzdavane i nastroivane na prilozhenie v Back4App
* Deploivane na prilozhenie v GitHub Pages
* Login/Register stranica
* Quiz Editor funkcionalnost

### Part 2
* Dovyrshvane na struktura i stilizaciq
* Welcome Screen
* Quiz Browser
* Quiz Details
* Quiz Contest Mode
* Quiz Results
* Profile Page

## Realizaciq
### Struktura na dannite
#### Kolekcii
* Sessions (sluzhebna)
* Users
```javascript
{
    email: String,
    username: String,
    password: String
}
```
* Quizes
```javascript
{
    title,
    topic,
    questionCount
}
```
* Questions
```javascript
{
    text: String,
    answers: Array<String>
    correctIndex: Number,
    quiz: Pointer<Quiz>
}
```
* Solutions
```javascript
{
    quiz: Pointer<Quiz>,
    correct: Number
}
```

#### Kontrol na dostypa
* Gostite mogat da se registrirat, da preglezhdat kataloga, detailite na testovete i profilnite stranici na potrebitelite
* Registriranite potrebiteli mogat da reshavat testove, da preglezhdat rezultatite si i da syzdavat i redaktirat testove
* Samo syzdatelq na edin test mozhe da go redaktira i iztriva
* Vseki registriran potrebitel mozhe da reshava chuzhd test