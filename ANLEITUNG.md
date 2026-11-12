# Kantine – Einrichtung

Alles läuft über **GitHub** – keine weitere Anmeldung bei anderen Diensten.
Rechne einmalig mit etwa 30 Minuten am Computer.

## So funktioniert es

| Teil | Wo | Inhalt |
|---|---|---|
| Die App | öffentliches Repository `kantine` (GitHub Pages) | nur Programmcode, keine Daten |
| Die Kantinendaten | **privates** Repository `kantine-daten` | Mitglieder, Buchungen, Kassenbuch, Belegfotos – **verschlüsselt** |
| Kontoauszüge der Kameraden | Zweig `konten` im Repository `kantine` | je Kamerad eine verschlüsselte Datei, nur mit seinem QR-Code lesbar |

- **Tablet auf der Wache und PC zu Hause** haben jeweils eine Kopie und gleichen sich über GitHub ab. Auf der Wache funktioniert das Tablet auch ohne Internet – Änderungen werden nachgeschickt.
- **Verschlüsselt wird auf dem Gerät** mit dem Kantinen-Passwort. GitHub sieht nur unlesbare Daten.
- **Kameraden** brauchen nichts: Sie scannen ihren QR-Code und sehen nur ihr eigenes Konto (mit einigen Minuten Verzögerung).

**Wer darf was?**

| | Wie | Darf |
|---|---|---|
| **Admin** (Kassenwart, Vertretung) | Admin-PIN | alles: Mitglieder, Preise, Zahlungen, Kassenbuch, Abzugsliste, Abschluss, QR-Codes, Exporte |
| **Team** (Kantinenteam, HBM) | Team-PIN | buchen, bis 15 Minuten danach stornieren, Einsätze, Runden, Termin-Anmeldungen, Einkaufsliste, Einkauf und Inventur |
| **Kameraden** | QR-Code | eigenes Konto ansehen |

Wichtig zu wissen: Die PINs regeln die Bedienung auf einem verbundenen Gerät. Der eigentliche Schutz der Daten sind **Zugangsschlüssel und Kantinen-Passwort** – die bekommt nur, wer ein Gerät einrichten soll (Kassenwart, ggf. Vertretung).

---

## Schritt 1 – GitHub-Organisation und zwei Repositories

**Kein zweites GitHub-Konto anlegen.** Nimm dein bestehendes Konto und lege damit eine kostenlose **Organisation** für die Wehr an. So gehört die Kantine der Wehr, du kannst eine Vertretung als Owner dazunehmen und bei einem Amtswechsel einfach übergeben. (Pro Person ist bei GitHub nur ein kostenloses Konto erlaubt.)

1. Bei [github.com](https://github.com) anmelden → oben rechts Profilbild → **Your organizations** → **New organization** → **Free**.
2. **Organization name:** `ff-staaken` → Kontakt-E-Mail → „My personal account“ → **Next** → **Complete setup**.
   (Ist der Name vergeben, z. B. `feuerwehr-staaken` nehmen und unten überall ersetzen.)
3. In der Organisation: **Repositories → New repository**
   - Name `kantine`, **Public** → **Create repository**.
4. Noch einmal **New repository**
   - Name `kantine-daten`, **Private** ← wichtig! → Häkchen bei **Add a README file** → **Create repository**.
5. **Dateien der App hochladen** – eine Möglichkeit:
   - **a) Über Claude:** Sag Claude „`ff-staaken/kantine`“. Claude lädt alles hoch.
   - **b) Von Hand:** `kantine.zip` entpacken → im Repository `kantine` auf **uploading an existing file** → den **Inhalt** des Ordners hineinziehen → **Commit changes**.
6. Hast du einen anderen Namen als `ff-staaken` gewählt: Im Repository `kantine` die Datei `config.js` öffnen → Stift (**Edit**) → bei `owner:` den Namen eintragen → **Commit changes**.

## Schritt 2 – Adresse einschalten (GitHub Pages)

1. Repository `kantine` → **Settings** → links **Pages**.
2. **Source:** *Deploy from a branch* · **Branch:** `main` · Ordner `/ (root)` → **Save**.
3. Nach 1–2 Minuten ist die Kantine erreichbar unter **`https://ff-staaken.github.io/kantine/`**

> `kantine.ff-staaken.github.io` bietet GitHub nicht an. Eine eigene Domain wie `kantine.ff-staaken.de` geht, wenn ihr sie besitzt – siehe Anhang.

## Schritt 3 – Zugangsschlüssel erzeugen

Der Schlüssel erlaubt der App, in den beiden Repositories zu lesen und zu schreiben – sonst nichts.

1. GitHub → Profilbild → **Settings** → ganz unten links **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**.
2. Ausfüllen:
   - **Token name:** `Kantine`
   - **Resource owner:** `ff-staaken` (die Organisation, **nicht** dein Name)
   - **Expiration:** längste angebotene Dauer (z. B. 366 Tage) – im Kalender notieren!
   - **Repository access:** *Only select repositories* → `kantine` **und** `kantine-daten`
   - **Permissions → Repository permissions → Contents:** **Read and write**
3. **Generate token** → den Schlüssel (`github_pat_…`) kopieren und sicher aufbewahren (z. B. Passwort-Manager). GitHub zeigt ihn nur einmal an.

Falls die Organisation fragt: Unter **Organisation → Settings → Personal access tokens** den Zugriff erlauben bzw. die Anfrage genehmigen.

## Schritt 4 – Kantine anlegen (erstes Gerät)

1. `https://ff-staaken.github.io/kantine/` öffnen.
2. **Zugangsschlüssel** einfügen, ein **Kantinen-Passwort** ausdenken (mindestens 10 Zeichen), Gerätename z. B. `PC Kassenwart` → **Verbinden**.
3. Die App bietet **Neue Kantine anlegen** an → Passwort wiederholen, **Admin-PIN** festlegen → **Anlegen**.

> **Das Kantinen-Passwort gut aufbewahren** – z. B. im verschlossenen Umschlag bei der Wehrführung. Ohne Passwort sind die Daten auf neuen Geräten nicht mehr lesbar.

Danach in der App:
- **Verwaltung → Abschluss & Einstellungen:** Name der Wehr, **Team-PIN** für Kantinenteam und HBM.
- **Verwaltung → Stammdaten:** Mitglieder (ein Name pro Zeile) und Sortiment.
- **„QR-Zettel für alle drucken“** → ausschneiden → verteilen.
- **Kassenbuch:** Anfangsbestand eintragen.

## Schritt 5 – Weitere Geräte (Tablet auf der Wache, PC zu Hause)

Adresse öffnen → Zugangsschlüssel + Kantinen-Passwort + Gerätename (z. B. `Tablet Wache`) → **Verbinden**.
„Auf diesem Gerät angemeldet bleiben“ angehakt lassen. Auf dem Tablet über das Browser-Menü **„Zum Startbildschirm hinzufügen“**.

Ist eine Team-PIN gesetzt, sperrt sich die App nach 10 Minuten ohne Bedienung; entsperren mit Team-PIN (oder Admin-PIN).

**Abrechnung von zu Hause:** Am PC die Verwaltung mit der Admin-PIN öffnen → Abzugsliste, Konten, Kassenbuch, alle Exporte als CSV-Datei (öffnet in Excel). Was du am PC buchst, landet nach dem Abgleich auch auf dem Tablet und umgekehrt. Oben rechts zeigt die App den Stand („Aktuell“ oder „2 Änderungen offen“).

---

## Im Alltag

- **Übersicht:** Die Verwaltung öffnet mit „Heute zu tun“ – z. B. nachkaufen, Abzugsliste fällig, Belege fehlen, Sicherung, offene Einsätze, Termine abrechnen – jeweils mit Knopf zur Erledigung.
- **Mitglied-Detailseite:** Verwaltung → Konten → Namen antippen: alle Buchungen, Storno (Kantinenchef/Admin auch nach 15 Minuten), Einzahlung, Kontoauszug, QR-Code.
- **Hilfe:** Das „?“ neben einer Überschrift erklärt die Seite in zwei, drei Sätzen.
- **Termin abrechnen:** Bei einem Termin mit Anmeldungen „Kosten aufteilen“ – die Angemeldeten sind schon ausgewählt, wer mit Begleitung kommt, zahlt entsprechend mehr.
- **Bestellvorschlag:** Die Einkaufsliste schlägt Mengen nach dem Verbrauch der letzten Wochen vor (reicht ca. 3 Wochen).
- **Mehrere auf einmal buchen:** Strichliste → **Mehrere buchen** → Namen antippen → **Artikel wählen** → **Für alle buchen**. Jede Person bekommt dieselben Artikel auf ihr Konto.
- **Einsatz / Übung verpflegen:** Strichliste → **+ Einsatz / Übung** → Art, Stichwort und **Kosten auf Konto** wählen (FF Kasse oder JF Kasse; angeboten werden alle Mitglieder mit „Kasse“ im Namen). Alles, was danach beim Einsatz gebucht wird, geht auf dieses Konto und erscheint zusätzlich unter Verwaltung → Einsatzverpflegung.
- **Essen aufteilen (z. B. Pizza zum Übungsdienst):** Strichliste → **+ Essen aufteilen** → was es gab und Gesamtbetrag eingeben → Teilnehmer anklicken → **Aufteilen und buchen**. Jeder bekommt seinen Anteil (cent-genau) aufs Konto. Häkchen „Aus der Kantinenkasse bezahlt“ trägt den Betrag als Ausgabe ins Kassenbuch ein, optional mit Beleg-Foto.
- **Barverkauf (Gäste):** Kachel **Bar bezahlt** → Artikel wählen → **Bar kassieren**. Mit Rückgeld-Rechner; zählt im Bestand und landet als Einnahme „Barverkauf“ im Kassenbuch, kein Konto wird belastet.
- **Kontoauszug als PDF:** Verwaltung → Konten → **Auszug** (eine Person) oder **Kontoauszüge (PDF)** (alle, je Person eine Seite). Zeitraum wählen → PDF teilen, herunterladen oder drucken.
- **Jahresabschluss:** Verwaltung → Abschluss & Einstellungen → **Jahresabschluss als PDF** – Kasse, Umsatz, Abzugslisten, Einsatzverpflegung, offene Beträge, Warenbestand und Unterschriftszeilen für die Kassenprüfung. Am besten vor dem letzten Abschluss des Jahres erstellen.
- **Kassensturz:** Verwaltung → Kassenbuch → **Kassensturz**. Scheine und Münzen zählen (oder Gesamtbetrag eingeben), die App vergleicht mit dem Kassenbuch. Eine Differenz kann direkt als Korrektur („Kassendifferenz“) gebucht werden. Alle Kassenstürze stehen im Protokoll und im Jahresabschluss.
- **Saisonartikel:** Verwaltung → Stammdaten → **Saison beendet**. Der Artikel verschwindet von der Strichliste und aus dem Lager, bleibt aber in Statistik und Abrechnung. Mit **Wieder anbieten** ist er zurück.
- **Quartals-Erinnerung:** In den letzten 7 Tagen eines Quartals erinnert die Verwaltung an Abzugsliste und Sicherung.
- **Protokoll:** Verwaltung → Protokoll zeigt, wer wann an welchem Gerät Preise, Mitglieder, Zahlungen, Kassenbuch oder Einstellungen geändert und was storniert hat. Exportierbar als CSV.
- **Ohne Internet:** Einmal mit Internet geöffnet, startet die App danach auch offline. Buchungen werden nachgeschickt, sobald wieder Verbindung besteht.
- **Ablauf des Zugangsschlüssels:** Unter Abschluss & Einstellungen → Gerät & Sicherheit das Datum „gültig bis“ eintragen (steht bei GitHub beim Schlüssel). 30 Tage vorher erscheint ein Hinweis.

---

## Benutzer und Rollen (empfohlen)

Statt gemeinsamer PINs meldet sich jede Person mit **Namen und eigenem Passwort** an. Dann steht bei jeder Buchung, jedem Storno und jeder Änderung, wer es war.

| Rolle | Darf |
|---|---|
| **Admin** | alles, auch Benutzer verwalten, Einstellungen, Sicherung einspielen |
| **Kantinenchef** | Verwaltung: Konten, Abzugsliste, Kassenbuch, Preise, Mitglieder, Einsatzverpflegung, Protokoll, Abschluss, PDFs |
| **HBM** | wie Kantinenteam, zusätzlich Termine anlegen und abrechnen, Einsatzverpflegung verwalten |
| **Kantinenteam** | buchen, bis 15 Minuten stornieren, Barverkauf, Einsätze und Runden, Einkauf und Inventur, Einkaufsliste |

**Einrichten:** Verwaltung (mit Admin-PIN) → **Benutzer** → zuerst dich selbst als **Admin** anlegen. Ab dann gibt es die Anmeldung mit Namen und Passwort; Team-PIN und Admin-PIN werden nicht mehr verwendet. Danach alle weiteren Personen mit Rolle und erstem Passwort anlegen.

- **Anmelden:** Namen antippen, Passwort eingeben. Nach 10 Minuten ohne Bedienung meldet die App automatisch ab.
- **Abmelden / eigenes Passwort ändern:** oben rechts auf den eigenen Namen tippen.
- **Passwort vergessen:** Ein Admin setzt unter Benutzer → „Passwort neu“ ein neues.
- **Person ausgeschieden:** Unter Benutzer → „Deaktivieren“. Ihre bisherigen Buchungen bleiben mit Namen erhalten.
- **Wer hat was gebucht:** Verwaltung → Protokoll → **Buchungen**, Filter „Gebucht von“. Auch im Export „Alle Buchungen“ steht, wer gebucht hat.

Die Benutzer-Passwörter regeln, wer in der App was darf. Den Zugang zu den Daten selbst schützen weiterhin Zugangsschlüssel und Kantinen-Passwort (pro Gerät einmal).

---

## Gerät verloren oder Person scheidet aus

1. GitHub → Developer settings → Fine-grained tokens → den alten Schlüssel **löschen** und einen neuen erzeugen (Schritt 3).
2. **Verwaltung → Abschluss & Einstellungen → Kantinen-Passwort ändern.**
3. Auf den eigenen Geräten: **Gerät abmelden** → mit neuem Schlüssel und neuem Passwort wieder verbinden.
4. Ggf. Admin-PIN und Team-PIN ändern.

**Zugangsschlüssel abgelaufen** (die App meldet „Zugangsschlüssel ungültig oder abgelaufen“): neuen Schlüssel erzeugen, auf jedem Gerät „Gerät abmelden“ und neu verbinden. Nicht abgeglichene Änderungen vorher nicht wegwerfen – die App warnt dich.

## Datensicherung

- Jeder Abgleich legt im Repository `kantine-daten` eine neue Version ab – ältere Stände bleiben in der Versionsgeschichte erhalten.
- Zusätzlich: **Verwaltung → Abschluss & Einstellungen → Sicherung herunterladen** (z. B. nach jedem Quartal, auf USB-Stick). Diese Datei ist **nicht** verschlüsselt – vertraulich aufbewahren.

## Datenschutz – kurz

- Namen, Beträge und Belege liegen bei GitHub nur **verschlüsselt** (AES-256). Der Schlüssel entsteht aus dem Kantinen-Passwort auf euren Geräten und wird nie zu GitHub übertragen.
- Die Kontoauszüge der Kameraden sind einzeln verschlüsselt; Dateinamen verraten keine Namen. Nur wer den QR-Code hat, kann sein Konto lesen.
- Keine Werbung, keine Tracker, keine Schriften von Google; Suchmaschinen werden ausgeschlossen.
- GitHub gehört zu Microsoft (USA). Da dort nur verschlüsselte Daten liegen, ist das deutlich unkritischer als Klartext – trotzdem kurz mit Wehrführung bzw. dem Datenschutzbeauftragten der Gemeinde abstimmen.

## Wenn etwas nicht klappt

| Meldung / Problem | Lösung |
|---|---|
| „Die Kantine ist noch nicht eingerichtet“ | `config.js` prüfen (Schritt 1.6) |
| „Zugangsschlüssel ungültig oder abgelaufen“ | neuen Schlüssel erzeugen (Schritt 3), Gerät neu verbinden |
| „Kein Zugriff auf das Daten-Repository“ | Beim Schlüssel beide Repositories und *Contents: Read and write* gewählt? Organisation hat den Schlüssel genehmigt? |
| „Kantinen-Passwort falsch“ | Groß-/Kleinschreibung prüfen |
| „Keine Verbindung“ / „Änderungen offen“ | Internet fehlt – weiterbuchen, die App gleicht später ab |
| QR-Link: „nicht (mehr) gültig“ | Neu erzeugte Codes erscheinen nach einigen Minuten; sonst wurde ein neuer Code erzeugt → neuen Zettel drucken |
| GitHub-Seite zeigt 404 | Schritt 2 prüfen, Adresse mit `/kantine/` am Ende |
| Team kann nicht stornieren | Stornieren geht bis 15 Minuten nach der Buchung |

## Anhang – Eigene Domain (z. B. `kantine.ff-staaken.de`)

1. Repository `kantine` → **Settings → Pages → Custom domain:** `kantine.ff-staaken.de` → **Save**, später **Enforce HTTPS**.
2. Beim Domain-Anbieter einen **CNAME**-Eintrag: `kantine` → `ff-staaken.github.io`.
3. **QR-Zettel neu drucken** – sie enthalten die Adresse.
