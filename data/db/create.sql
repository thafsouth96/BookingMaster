CREATE TABLE artiste (
          idAr INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion artistes */
          nomAr TEXT , /* nom de l'artiste */
          prenomAr TEXT , /* prenom de l'artiste */
          roleAr TEXT , /* role de l'artiste */
          telephoneAr TEXT, /* telephone de l'artiste */
          adresseAr TEXT , /* adresse de l'artiste */
          emailAr TEXT , /* email de l'artiste */
          descriptionAr TEXT, /* description  du groupe */
          lienAr TEXT, /* liens vers Fb/Soundcloud/Twitter/playlist/ etc...*/
          videoAr TEXT, /* vidéo youtube d'un son du groupe */
          imageAr TEXT, /* deux images pour les groupes */
);
CREATE TABLE booker (
          idB INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion bookers */
          nomB TEXT , /* nom du booker */
          infoB TEXT /* informations sur le booker */
          mdp TEXT  CHECK (length(mdp) > 5), /* mot de passe du booker pour se log(taille minimum de 5 caractères) */

);
CREATE TABLE evenements (
          idE INTEGER PRIMARY KEY, /* identifiant pour + facilités si gestion évènements */
          nomE TEXT, /*titre de l'évènement */
          dateE date , /* date de l'évènement */
          lieuE TEXT , /* adresse du lieu de l'évènement */
          lienBE TEXT, /* lien vers billeterie pour achat des places pour évènement */
          infoE TEXT, /* informations sur l'évènement */
          imageE TEXT
);
CREATE TABLE groupe (
        idG INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion groupe */
        nomG TEXT , /* nom du groupe */
        descriptionG TEXT , /* description  du groupe */
        lienG TEXT, /* liens vers Fb/Soundcloud/Twitter/playlist/ etc...*/
        videoG TEXT, /* vidéo youtube d'un son du groupe */
        imageG TEXT  /* deux images pour les groupes */
);

CREATE TABLE organisateurs (
          idO INTEGER PRIMARY KEY, /* identifiant pour + facilité si gestion organisateurs */
          nomO TEXT , /*nom de l'organisateur*/
          emailO TEXT , /* email de l'organisateur */
          telephoneO TEXT , /* telephone de l'organisateur */
          adresseO TEXT, /* adresse de l'organisateur */
          solde INTEGER /*solde pour organiser */
);
CREATE TABLE message (
      idExpediteur INTEGER,
      idDestinataire INTEGER,
      dateM time,
      objet VARCHAR,
      message VARCHAR,
      EstBrouillon BOOLEAN,
      ExpDelete BOOLEAN,
      DestDelete BOOLEAN
);
CREATE TABLE faitPartie ( /* association entre les artistes et leur groupe */
          idAr INTEGER, /* id de l'artiste */
          idG INTEGER,/* id du groupe */
          PRIMARY KEY(idAr,idG), /* clés primaires inséparables */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr),
          FOREIGN KEY(idG) REFERENCES groupe(idG) /* références aux attributs des classes booker et artiste */
);

CREATE TABLE organisateur ( /* association entre les organisateurs et les evenements pour afficher les organisateurs liés aux évènements */
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
CREATE TABLE paye ( /* association entre les artistes et leur groupe */
          idO INTEGER, /* id de l'organisateur */
          idAr INTEGER,/* id de l'artiste */
          montant INTEGER , /* somme que l'organisateur paye à l'artiste */
          dateP TEXT , /* date à laquelle le paiement est effectué */
          PRIMARY KEY(idO,idAr), /* clés primaires inséparables */
          FOREIGN KEY(idO) REFERENCES organisateur(idO), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr)
);
CREATE TABLE soccupe ( /* association entre les bookers et les artistes pour afficher les artistes des bookers */
          idB INTEGER, /* id du booker */
          idAr INTEGER,/* id de l'artiste */
          PRIMARY KEY(idB,idAr), /* clés primaires inséparables */
          FOREIGN KEY(idB) REFERENCES booker(idB), /* références aux attributs des classes booker et artiste */
          FOREIGN KEY(idAr) REFERENCES artiste(idAr)
);
