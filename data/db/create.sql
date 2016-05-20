
CREATE TABLE booker (
          idB INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion bookers */
          nomB TEXT, /* nom du booker */
          prenomB TEXT,
          dateNaissB date,
          mailB TEXT,
          mdp TEXT,
          constraint strlen CHECK (length(mdp) > 8) /* mot de passe du booker pour se log(taille minimum de 8 caractères) */

);

CREATE TABLE artiste (
          idAr INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion artistes */
          nomAr TEXT , /* nom de l'artiste */
          prenomAr TEXT , /* prenom de l'artiste */
          roleAr TEXT , /* role de l'artiste */
          telephoneAr TEXT, /* telephone de l'artiste */
          emailAr TEXT , /* email de l'artiste */
          descriptionAr TEXT /* description  du groupe */
);

CREATE TABLE organisateurs (
          idO INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion organisateurs */
          nomO TEXT , /*nom de l'organisateur*/
          emailO TEXT , /* email de l'organisateur */
          telephoneO TEXT  /* telephone de l'organisateur */
);

CREATE TABLE groupeM (
        idGM INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion groupe */
        nomGM TEXT , /* nom du groupe */
        descriptionGM TEXT /* description  du groupe */
);

CREATE TABLE groupeC (
          nomGC TEXT PRIMARY KEY,
          descriptionGC TEXT
);


CREATE TABLE evenements (
          idE INTEGER PRIMARY KEY, /* identifiant pour + facilités si gestion évènements */
          nomE TEXT, /*titre de l'évènement */
          dateE date, /* date de l'évènement */
          lieuE TEXT /* adresse du lieu de l'évènement */
);


CREATE TABLE message (
      idExpediteur INTEGER,
      idDestinataire INTEGER,
      dateEnvoi time,
      objet VARCHAR,
      message VARCHAR,
      EstBrouillon BOOLEAN,
      ExpDelete BOOLEAN,
      DestDelete BOOLEAN,
      PRIMARY KEY (idExpediteur,idDestinataire,dateEnvoi)
);

CREATE TABLE faitPartieAGM ( /* association entre les artistes et leur groupe */
          idAr INTEGER, /* id de l'artiste */
          idGM INTEGER,/* id du groupe */
          PRIMARY KEY(idAr,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idGM) REFERENCES groupe(idGM) /* références aux attributs des classes booker et artiste */
);



CREATE TABLE faitPartieAGC (
          idGM REFERENCES groupeM(idGM),
          nomGC REFERENCES groupeC(nomGC),
          PRIMARY KEY (idGM,nomGC)
);

CREATE TABLE organisateur_evenement ( /* association entre les organisateurs et les evenements pour afficher les organisateurs liés aux évènements */
          idO INTEGER, /* id de l'organisateur */
          idE INTEGER, /* id de l'évènement */
          PRIMARY KEY(idO,idE), /* clés primaires inséparables */
          FOREIGN KEY(idO) REFERENCES organisateurs(idO), /* références aux attributs des classes organisateur et evenements */
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
CREATE TABLE participeArtiste (
          idAr INTEGER, /* id de l'artiste */
          idE INTEGER, /* id de l'évènement */
          PRIMARY KEY(idAr,idE), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
CREATE TABLE participeGoupe (
          idG INTEGER, /* id du groupe */
          idE INTEGER, /* id de l'évènement */
          PRIMARY KEY(idG,idE), /* clés primaires inséparables */
          FOREIGN KEY(idG) REFERENCES groupe(idG),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);

CREATE TABLE contacts ( /* association entre les bookers et les artistes pour afficher les artistes des bookers */
          idB INTEGER, /* id du booker */
          idGM INTEGER,/* id du groupe musical */
          PRIMARY KEY(idB,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idGM) REFERENCES artiste(idGM)
);
