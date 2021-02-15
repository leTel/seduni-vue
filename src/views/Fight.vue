<template>
  <v-container>
    <page-title icon="mdi-sword-cross" title="Combat" />
    <inline-image-card
      position="left"
      title="Armes de corps à corps"
      :img-src="require('@/assets/img/fight_card.jpg')"
    >
      <p>
        Nous pratiquons le maniement de
        <b>la lance, de l'épée, du bouclier et de la dague</b> lors du combat au
        corps à corps. Ces armes sont utilisées lors de duels ou de combat de
        mélée.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Armures"
      :img-src="require('@/assets/img/armor.jpg')"
    >
      <p>
        En plus des <b>armures historiques</b> tels que la cotte de maille,
        l'armure de cuir ou le linothorax, nous utilisons des
        <b>protections modernes</b> afin d'assurer la sécurité des pratiquants.
      </p>
    </inline-image-card>

    <inline-image-card
      position="left"
      title="Armes de jets"
      :img-src="require('@/assets/img/slings.jpg')"
    >
      <p>
        Nous pratiquons également les armes de jets dont l'utilisation est
        attestée à cette période.
      </p>
      <p>
        Lors des entrainements, nous travaillons
        <b>la javeline, la fronde et l'arc court</b>.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Phylosophie"
      :img-src="require('@/assets/img/fight.jpg')"
    >
      <p>
        Les informations sur l'art de la guerre chez les Celtes sont très
        fragmentaires. Il faut donc accepter que nous ne pourrons jamais
        reproduire exactement l'art martial de ces derniers.
      </p>
      <p>
        Il est important d'acquérir une bonne maîtrise de son corps et des
        armes. En plus des sources historiques, l'expérience de la pratique
        amène à une meilleure compréhension des techniques de combat.
      </p>
      <p>
        Avec cette activité, l'association cherche à se
        <b>raprocher au mieux des techniques de combats de l'époque</b>. Pour se
        faire, nous pratiquons les combats avec des armes en métal et nous nous
        entraînons en extérieur toute l'année.
      </p>
    </inline-image-card>

    <inline-image-card
      position="left"
      title="Entraînements"
      :img-src="require('@/assets/img/seduni.jpg')"
    >
      <p>
        Nos entraînement ont lieux
        <b>tous les mardis et jeudis de 18h à 20h à Sion</b> sur les berges du
        Rhône.
      </p>
    </inline-image-card>
  </v-container>
</template>
