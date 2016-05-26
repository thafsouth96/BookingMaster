
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

CREATE TABLE groupeMusical (
        idGM TEXT PRIMARY KEY, /* identifiant pour + facilité si gestion groupe */
        nomGM TEXT , /* nom du groupe */
        descriptionGM TEXT /* description  du groupe */
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

CREATE TABLE artiste_groupeMusical ( /* association entre les artistes et leur groupe */
          idAr TEXT, /* id de l'artiste */
          idGM TEXT,/* id du groupe */
          PRIMARY KEY(idAr,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idGM) REFERENCES groupe(idGM) /* références aux attributs des classes booker et artiste */
);


CREATE TABLE contacts ( /* association entre les bookers et les artistes pour afficher les artistes des bookers */
          idB TEXT, /* id du booker */
          idGM TEXT,/* id du groupe musical */
          PRIMARY KEY(idB,idGM), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idGM) REFERENCES artiste(idGM)
);

CREATE TABLE groupeContact (
          idB TEXT REFERENCES booker(idB),
          nomGC TEXT,
          descriptionGC TEXT,
          PRIMARY KEY (idb,nomGC)
);

CREATE TABLE groupeContact_groupeMusical (
          idB TEXT,
          nomGC TEXT,
          idGM TEXT REFERENCES groupeMusical(idGM),
          PRIMARY KEY (idB,nomGC,idGM),
          FOREIGN KEY (idB,nomGC) REFERENCES groupeContact(idB,nomGC)
);

CREATE TABLE organisateur_evenement ( /* association entre les organisateurs et les evenements pour afficher les organisateurs liés aux évènements */
          idO TEXT, /* id de l'organisateur */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idO,idE), /* clés primaires inséparables */
          FOREIGN KEY(idO) REFERENCES organisateurs(idO), /* références aux attributs des classes organisateur et evenements */
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);


CREATE TABLE booker_evenement (
          idB TEXT, /* id du booker */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idB,idE), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);

CREATE TABLE goupeMusical_Evenement (
          idGM TEXT, /* id du groupe */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idGM,idE), /* clés primaires inséparables */
          FOREIGN KEY(idGM) REFERENCES groupeMusical(idGM),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
