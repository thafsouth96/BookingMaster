
CREATE TABLE booker (
          idB TEXT PRIMARY KEY, /* identifiant pour + facilité si gestion bookers */
          nomB TEXT, /* nom du booker */
          prenomB TEXT,
          dateNaissB date,
          mailB TEXT,
          mdp TEXT,
          constraint strlen CHECK (length(mdp) > 8) /* mot de passe du booker pour se log(taille minimum de 8 caractères) */

);

CREATE TABLE artiste (
          idAr TEXT PRIMARY KEY, /* identifiant pour + facilité si gestion artistes */
          nomAr TEXT , /* nom de l'artiste */
          prenomAr TEXT , /* prenom de l'artiste */
          roleAr TEXT , /* role de l'artiste */
          telephoneAr TEXT, /* telephone de l'artiste */
          emailAr TEXT , /* email de l'artiste */
          descriptionAr TEXT /* description  du groupe */
);

CREATE TABLE organisateurs (
          idO TEXT PRIMARY KEY, /* identifiant pour + facilité si gestion organisateurs */
          nomO TEXT , /*nom de l'organisateur*/
          emailO TEXT , /* email de l'organisateur */
          telephoneO TEXT  /* telephone de l'organisateur */
);

CREATE TABLE groupeM (
        idGM TEXT PRIMARY KEY, /* identifiant pour + facilité si gestion groupe */
        nomGM TEXT , /* nom du groupe */
        descriptionGM TEXT /* description  du groupe */
);

CREATE TABLE groupeC (
          idB TEXT REFERENCES booker(idB),
          nomGC TEXT,
          descriptionGC TEXT,
          PRIMARY KEY (idb,nomGC)
);


CREATE TABLE evenements (
          idE TEXT PRIMARY KEY, /* identifiant pour + facilités si gestion évènements */
          nomE TEXT, /*titre de l'évènement */
          dateE date, /* date de l'évènement */
          lieuE TEXT /* adresse du lieu de l'évènement */
);


CREATE TABLE message (
      idExpediteur TEXT,
      idDestinataire TEXT,
      dateEnvoi time,
      objet VARCHAR,
      message VARCHAR,
      EstBrouillon BOOLEAN,
      ExpDelete BOOLEAN,
      DestDelete BOOLEAN,
      PRIMARY KEY (idExpediteur,idDestinataire,dateEnvoi)
);

CREATE TABLE faitPartieAGM ( /* association entre les artistes et leur groupe */
          idAr TEXT, /* id de l'artiste */
          idGM TEXT,/* id du groupe */
          PRIMARY KEY(idAr,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idGM) REFERENCES groupe(idGM) /* références aux attributs des classes booker et artiste */
);



CREATE TABLE faitPartieAGC (
          idGM TEXT REFERENCES groupeM(idGM),
          idB TEXT REFERENCES booker(idB),
          nomGC TEXT REFERENCES groupeC(nomGC),
          PRIMARY KEY (idGM,idB,nomGC)
);

CREATE TABLE organisateur_evenement ( /* association entre les organisateurs et les evenements pour afficher les organisateurs liés aux évènements */
          idO TEXT, /* id de l'organisateur */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idO,idE), /* clés primaires inséparables */
          FOREIGN KEY(idO) REFERENCES organisateurs(idO), /* références aux attributs des classes organisateur et evenements */
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
CREATE TABLE participeArtiste (
          idAr TEXT, /* id de l'artiste */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idAr,idE), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
CREATE TABLE participeGoupe (
          idG TEXT, /* id du groupe */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idG,idE), /* clés primaires inséparables */
          FOREIGN KEY(idG) REFERENCES groupe(idG),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);

CREATE TABLE contacts ( /* association entre les bookers et les artistes pour afficher les artistes des bookers */
          idB TEXT, /* id du booker */
          idGM TEXT,/* id du groupe musical */
          PRIMARY KEY(idB,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idGM) REFERENCES artiste(idGM)
);
