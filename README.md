# Kantine

Kantinen-App für die Freiwillige Feuerwehr: Strichliste, Abzugsliste für die Verrechnung mit der
Aufwandsentschädigung, Einsatzverpflegung, Runden, Lager mit Pfand und MHD, Kassenbuch mit Belegen,
Termine und Statistik. Admin- und Team-PIN; Kameraden sehen ihr eigenes Konto über einen persönlichen QR-Code.

- **Einrichtung:** siehe [ANLEITUNG.md](ANLEITUNG.md)
- **Technik:** statische Seite (GitHub Pages). Die Daten liegen Ende-zu-Ende-verschlüsselt (AES-256-GCM,
  Schlüssel aus dem Kantinen-Passwort via PBKDF2) in einem privaten Repository und werden über die GitHub-API
  zwischen den Geräten abgeglichen. Kontoauszüge der Kameraden liegen einzeln verschlüsselt im Zweig `konten`.
- **Konfiguration:** [`config.js`](config.js)

In diesem Repository liegen keine lesbaren personenbezogenen Daten.

Mitgelieferte Bibliotheken: qrcode-generator (MIT), Schriften Barlow / Barlow Condensed (SIL OFL).
