#Web technológiák 2 - Beadandó Barta Balázs - S90NXK

Egy CRUD alkalmazást készítettem a Web technológiák 2 féléves feladataként, amely lehetővé teszi autók adatainak felvételét és szerkesztését egy adatbázisban.

A frontend fejlesztéséhez React JS-t alkalmaztam, és a route-ok elkészítéséhez React-Router-Dom-ot használtam. Az adatok betöltésére Axios-t alkalmaztam. A feladathoz három komponenst hoztam létre: Add, Home és Update, melyek a route-ok tartalmát képezik.

A Home komponens három state-tel dolgozik: cars (az adatbázisból jövő adatok tárolása), page (lapozás beállítása) és rowsPerPage (egy oldalon megjelenő sorok száma). Az adatok betöltése aszinkron módon történik az Axios segítségével. Az oldalon lehetőség van autók szerkesztésére és új autó hozzáadására. A pagination szekcióban lehetőség van lapozásra.

Az Update komponens egy state-tel dolgozik, mely a módosított adatok tárolására szolgál. Az autó eredeti adatait az Axios segítségével kapja meg a backendről, majd a változtatásokat a handleChange függvény kezeli. A módosított adatokat az Update gomb lenyomásakor küldi el a backendre.

Az Add komponens egy state-tel dolgozik, amely az új autó adatait tárolja. Az oldal betöltésekor üres form jelenik meg, ahova ha adatokat írunk be, azokat elmenti a carData state-be. Az Add Car gomb lenyomásakor az adatok elküldésre kerülnek a backend szerverre.

A backend oldalon NodeJS-t alkalmaztam ExpressJS frameworkkel. Az adatbáziskapcsolathoz a mysql könyvtárat, a JSON beállításokhoz a body-parser-t, a kérések meghatározásához pedig a cors-t használtam. Az adatbázishoz való kapcsolódást a mysql.createConnection függvénnyel valósítottam meg, majd definiáltam a backend endpointokat. A szervert az app.listen hívással indítottam el. A fejlesztés során a Nodemon-t alkalmaztam, hogy automatikusan újra indítsa a szervert a fájlmódosítások után.