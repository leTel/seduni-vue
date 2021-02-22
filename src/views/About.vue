<template>
  <v-container>
    <page-title icon="mdi-account-group-outline" title="Qui sommes-nous ?" />

    <inline-image-card
      position="left"
      title="Notre association"
      :img-src="require('@/assets/img/ag.jpg')"
    >
      <p>
        L'association "SEDUNI" a été créée le 8 août 2020 à Ayent lors d'une
        assemblée générale constitutive publique.
      </p>
      <p>
        À l’origine du projet, il y a quatre personnes passionnées d'histoire et
        d'arts martiaux: Stéphanie Lugon Moulin, Carmen Luisier, Patrick Luisier
        et Laurent Lugon Moulin.
      </p>
      <p>
        Les SEDUNI ont pour objectif de
        <b>transmettre et préserver la culture des Celtes</b> qui peuplaient
        l’Europe.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Notre nom"
      :img-src="require('@/assets/img/tribes_map.jpg')"
    >
      <p>
        Le nom "SEDUNI" est celui du <b>peuple établi dans le Valais central</b>
        durant la période dite du "La Tène".
      </p>
      <p>
        On en trouve plusieurs traces historiques dont notamment sur la carte
        des tribus de Gaule que l'on retrouve dans les "Commentarii de Bello
        Gallico".
      </p>
      <p>
        Les SEDUNI repoussèrent la tentative d'invasion de Jules César à
        Octodurum (Martigny) avec l'aide des VERAGRI gardant ainsi le contrôle
        des cols des Alpes.
      </p>
    </inline-image-card>

    <inline-image-card
      title="Nos activités"
      position="left"
      :img-src="require('@/assets/img/activities.jpg')"
    >
      <p>
        L'association "SEDUNI" est investie dans trois activités principales:
      </p>
      <p>
        <router-link :to="{ name: 'history' }">
          L'histoire
        </router-link>
        : La recherche et l’analyse de sources historiques ou contemporaines ont
        pour but de mener à une meilleure compréhension de la culture celte en
        Europe durant la période dite du "La Tène moyen" (300 à 100 BCE).
      </p>
      <p>
        <router-link :to="{ name: 'craft' }">
          L'artisanat
        </router-link>
        : Sur la base des recherches effectuées, des reproductions d'armes,
        d'armures et de divers objets sont réalisées.
      </p>
      <p>
        <router-link :to="{ name: 'fight' }">
          Le combat
        </router-link>
        : Les combats se déroulent avec un équipement se raprochant autant que
        possible de celui de l'époque. La sécurité étant primordiale, des
        protections modernes sont toutefois ajoutées.
      </p></inline-image-card
    >
  </v-container>
</template>
