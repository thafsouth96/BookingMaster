
CREATE TABLE id_datatype (
          id TEXT PRIMARY KEY,
          datatype TEXT
);

CREATE TABLE booker (
          idPers TEXT PRIMARY KEY REFERENCES id_datatype(id), /* identifiant pour + facilité si gestion bookers */
          nom TEXT, /* nom du booker */
          email TEXT,
          telephone TEXT,
          prenomB TEXT,
          dateNaissB TEXT,
          mdp TEXT,
          constraint strlen CHECK (length(mdp) > 8) /* mot de passe du booker pour se log(taille minimum de 8 caractères) */

);

CREATE TABLE artiste (
          idPers TEXT PRIMARY KEY REFERENCES id_datatype(id), /* identifiant pour + facilité si gestion artistes */
          nom TEXT , /* nom de l'artiste */
          email TEXT , /* email de l'artiste */
          telephone TEXT, /* telephone de l'artiste */
          prenomAr TEXT , /* prenom de l'artiste */
          dateNaissAr date,
          roleAr TEXT , /* role de l'artiste */
          adresseAr TEXT,
          descriptionAr TEXT,
          styleMusicalAr TEXT
);

CREATE TABLE organisateur (
          idPers TEXT PRIMARY KEY REFERENCES id_datatype(id), /* identifiant pour + facilité si gestion organisateurs */
          nom TEXT , /*nom de l'organisateur*/
          email TEXT , /* email de l'organisateur */
          telephone TEXT  /* telephone de l'organisateur */
);

CREATE TABLE groupeMusical (
        idPers TEXT PRIMARY KEY REFERENCES id_datatype(id), /* identifiant pour + facilité si gestion groupe */
        nom TEXT , /* nom du groupe */
        email TEXT,
        telephone TEXT,
        descriptionGM TEXT, /* description  du groupe */
        mdpGM TEXT,
        styleMusicalGM TEXT
);


CREATE TABLE evenement (
          idE TEXT PRIMARY KEY REFERENCES id_datatype(id), /* identifiant pour + facilités si gestion évènements */
          libelleE TEXT, /*titre de l'évènement */
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


CREATE TABLE booker_contacts ( /* association entre les bookers et les artistes pour afficher les artistes des bookers */
          idB TEXT, /* id du booker */
          idC TEXT,/* id du contact */
          PRIMARY KEY(idB,idC), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idC) REFERENCES id_datatype(id)
);

CREATE TABLE groupeContact (
          idB TEXT REFERENCES booker(idB),
          nomGC TEXT,
          descriptionGC TEXT,
          PRIMARY KEY (idB,nomGC)
);

CREATE TABLE groupeContact_groupeMusical (
          idB TEXT,
          nomGC TEXT,
          idGM TEXT REFERENCES groupeMusical(idGM),
          PRIMARY KEY (idB,nomGC,idGM),
          FOREIGN KEY (idB,nomGC) REFERENCES groupeContact(idB,nomGC)
);

--A TESTER
CREATE TABLE organisateur_evenement ( /* association entre les organisateurs et les evenements pour afficher les organisateurs liés aux évènements */
          idO TEXT, /* id de l'organisateur */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idO,idE), /* clés primaires inséparables */
          FOREIGN KEY(idO) REFERENCES organisateur(idO), /* références aux attributs des classes organisateur et evenements */
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);

--A TESTER
CREATE TABLE booker_evenement (
          idB TEXT, /* id du booker */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idB,idE), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);

--A TESTER
CREATE TABLE goupeMusical_Evenement (
          idGM TEXT, /* id du groupe */
          idE TEXT, /* id de l'évènement */
          PRIMARY KEY(idGM,idE), /* clés primaires inséparables */
          FOREIGN KEY(idGM) REFERENCES groupeMusical(idGM),
          FOREIGN KEY(idE) REFERENCES evenements(idE)
);
