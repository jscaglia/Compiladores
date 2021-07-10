DROP TABLE IF EXISTS garage;

CREATE TABLE garage (
                        id INT AUTO_INCREMENT  PRIMARY KEY,
                        piso INT NOT NULL,
                        posicion INT NOT NULL,
                        patente VARCHAR(10) NOT NULL,
                        tipoAuto VARCHAR(10) NOT NULL
);
INSERT INTO garage (piso, posicion, patente, tipoAuto) VALUES
(1, 1, 'AE123FD', 'CAMIONETA'),
(1, 3, 'CD123AA', 'CAMIONETA'),
(2, 4, 'LEO123', 'AUTO');