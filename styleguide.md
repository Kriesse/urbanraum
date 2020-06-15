---
layout: page
title_de: "Styleguide"
title_en: "Styleguide"
permalink: /styleguide/
image:
fullwidth: true
---


# Dateien editieren

Link: [Github](https://github.com/Kriesse/urbanraum/tree/gh-pages)

# Formatierungshilfen

* Kurze Zeilen müssen immer in Anführunszeichen stehen
* Längere Texte:
  * haben keine Anführungszeichen
  * beginnen immer mit `|` und einem Zeilenumbruch
  * Alle folgenden Absätze müssen indentiert sein
* Ein Zeilenumbruch wird erreicht durch neue Zeile _und_ zwei Leerzeichen am Ende der Zeile
* So sieht ein Link aus: `[example link](http://example.com/)`
* *Kursiver Text* wird so erzeugt: `*kursiver Text*`
* **Fetter Text** wird so erzeugt: `**fetter Text**`
* Wenn es keine zugewiesene Person gibt (oder kein Bild): Nach dem Doppelpunkt einfach leerlassen. Keine Anführungszeichen ohne Inhalt verwenden, das verursacht Fehler. Also einfach nur: `teacher:` oder `image:`.

# Neue Datei anlegen

* Beispiel für Dateinamen: `class-contemporary-dancing.md`
* Immer Endung `.md` anlegen
* Event-Dateien und News-Dateien müssen dem Muster folgen: `2016-05-28-not-red.md` (also Jahr-Monat-Tag, weil sie nach Datum sortiert werden).
* Dateinamen dürfen _nicht_ enthalten: Sonderzeichen, Umlaute, Leerzeichen, Großbuchstaben
* Am besten immer den Namen ausschreiben, Abkürzungen vermeiden (besser lesbar für Menschen und Suchmaschinen)

# Newseintrag anlegen

* Im Ordner `_posts` eine neue Datei anlegen
* Dateinamen müssen dem Muster folgen: `2020-08-31-news-title.md`.
* In der Datei muss angegeben werden:
  * layout: news
  * author: z.B. Friederike
  * title_en: "English title of the news post"
  * title_de: "Deutscher Titel des Newseintrags"
* Danach kommt der Newstext
  * Wichtig: Immer mit einem einzelnen kurzen Absatz anfangen. Nur dieser erste Absatz wird dann auf der Startseite angezeigt. Links funktionieren in diesem ersten Absatz nicht, dazu muss mann dann auf die Detailansicht klicken.
* Einen Link kann man in der Beschreibung so anlegen:
  * `[Zeitgenössischer Tanz](/classes/zeitgenoessischer-tanz.html)`.
  * Das sieht dann so aus: [Zeitgenössischer Tanz](/classes/zeitgenoessischer-tanz.html)
  * Also: In den eckigen Klammern der anklickbare Text, und in den runden Klammern die URL.
* Veröffentlichung: Der Newseintrag wird erst sichtbar am Tag des Datums im Dateinamen. Du kannst also schon vorab eine News anlegen, die dann automatisch an dem Tag erscheint.

### Beispiel für einen Newseintrag

```
---
layout: news
author: Friederike
title_en: "This is just for testing"
title_de: "Ein Eintrag zum Testen"
---

Ein kurzer Eintrag zum Testen. Nur dieser erste Absatz wird auf der Startseite angezeigt!

Hier ist dann Platz für weitere Absätze. Und hier können dann auch Links verwendet werden. Zum Beispiel ein Link zu Deinem Kurs:
[Zeitgenössischer Tanz](/classes/zeitgenoessischer-tanz.html).

Eine Liste kann man auch anlegen. Das geht so:

* Erster Kurs
* Zweiter Kurs
* Dritter Kurs.

Und danach einfach weiterschreiben, mit einer Leerzeile Abstand. Dann kommt wieder ein normaler Absatz raus.
```


# Bilder

* Mindestgröße: 1200x800px
* Geeignete Dateiformate: `.jpg`, `.png`, `.svg`
* kein Text, keine Effekte


# Informationen für Kurse und Workshops

* Titel
* Untertitel (optional)
* Beschreibung:  
  Was, wie, wer…  
  Ziele, Methoden, Anspruch, benötigte Vorkenntnisse…
* Bild
* Wochentag, Datum, Uhrzeit
* Level
* Sprache
* Preis, z.B.:  
  Einzelklasse: 10 Euro  
  10 Klassen: 90 Euro
* Kontakt:  
  Email  
  Telefonnummer  
  Website
