
CREATE TABLE `klient` (

`Idklienta` int(11) NOT NULL, 
`Imie` varchar(15) COLLATE utf8_polish_ci NOT NULL, 
`Nazwisko` varchar(25) COLLATE utf8_polish_ci NOT NULL, 
`Email` varchar(30) COLLATE utf8_polish_ci NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

INSERT INTO `klient` (`Idklienta`, `Imie`, `Nazwisko`, `Email`)  VALUES

(1, 'Anna', 'Kowalska', 'a.kowalska@gmail.com'), 
(2, 'Joanna', 'Nowak', 'a.no@wp.pl'),
(3, 'Katarzyna', 'Wielgus', 'k.wielgus@onet.pl'),
(4, 'Piotr', 'Piotrowski', 'p.piotr@onet.pl'), 
(5, 'Weronika', 'Malicka', 'wmalicka@gmail.com'),
(6, 'Jerzy', 'Jurkowski', 'j.jurkowski@wp.pl');

CREATE TABLE `usluga` (

`Iduslugi` int(11) NOT NULL,
`NazwaUslugi` varchar(30) COLLATE utf8_polish_ci NOT NULL,
`Cenazabiegu` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

INSERT INTO usluga (Iduslugi, NazwaUslugi, Cenazabiegu) VALUES

(1, 'Pedicure tradycyjny', 100),
(2, 'Manicure tradycyjny', 60), 
(3, 'Manicure japoński', 70),
(4, 'Manicure hybrydowy', 80),
(5, 'Pedicure hybrydowy', 120),
(6, 'Parafina na dłonie', 60);

CREATE TABLE `wizyta` (

`Idwizyty` int(11) NOT NULL, 
`Idklienta` int(11) NOT NULL,
`Iduslugi` int(11) NOT NULL,
`Datazabiegu` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

INSERT INTO `wizyta` (`Idwizyty`, `Idklienta`, `Iduslugi`, `Datazabiegu`)
VALUES
(1, 2, 3, '2020-09-22'),
(2, 3, 1, '2020-09-28'),
(3, 5, 3, '2020-09-27'),
(4, 2, 6, '2020-10-02'),
(5, 1, 2, '2020-10-05'),
(6, 6, 4, '2020-10-06'), 
(7, 4, 5, '2020-10-06'),
(8, 1, 6, '2020-09-30'),
(9, 2, 2, '2020-10-04'),
(10, 6, 6, '2020-12-10');

ALTER TABLE `klient`
	ADD PRIMARY KEY (`Idklienta`);

ALTER TABLE `usluga`
	ADD PRIMARY KEY (`Iduslugi`);

ALTER TABLE `wizyta`
	ADD PRIMARY KEY (`Idwizyty`), 
	ADD KEY `Idklienta_FK` (`Idklienta`),
	ADD KEY `Iduslugi_FK` (`Iduslugi`);

ALTER TABLE `klient`
	MODIFY `Idklienta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `usluga`
	MODIFY `Iduslugi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `wizyta`
	MODIFY `Idwizyty` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `wizyta`
ADD CONSTRAINT `Idklienta_FK` FOREIGN KEY (`Idklienta`) REFERENCES `klient` (`Idklienta`),
ADD CONSTRAINT `Iduslugi FK`  FOREIGN KEY (`Iduslugi`)  REFERENCES `usluga` (`Iduslugi`);
COMMIT;

