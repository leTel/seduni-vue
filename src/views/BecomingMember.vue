<template>
  <v-container>
    <page-title
      icon="mdi-account-multiple-plus-outline"
      title="Devenir membre"
    />

    <inline-image-card
      position="left"
      title="Est-ce que cette association est pour moi ?"
      :img-src="require('@/assets/img/join-us.jpg')"
    >
      <p>
        Vous êtes passionné d'
        <router-link :to="{ name: 'history' }">histoire</router-link>
        et voudriez en savoir d'avantage sur nos ancètres celtes ?<br />Vous
        êtes habile de vos mains et souhaitez vous lancez dans l'
        <router-link :to="{ name: 'craft' }">artisanat</router-link>
        ?<br />Vous êtes un combattant confirmé à la recherche de défis ou un
        débutant souhaitant être instruit au
        <router-link :to="{ name: 'fight' }">combat</router-link> ?
      </p>
      <p>
        Si vous répondez à une ou à toutes ces questions positivement, alors
        <b>notre association est faîte pour vous !</b>
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Que dois-je faire pour devenir membre ?"
      :img-src="require('@/assets/img/flag.jpg')"
    >
      <p>
        D'abord lisez nos
        <a :href="`${publicPath}statuts.pdf`" download>
          status
        </a>
        et notre
        <a :href="`${publicPath}reglement_interne.pdf`" download>
          règlement interne</a
        >.
      </p>
      <p>
        Si vous les acceptez,
        <router-link :to="{ name: 'contact' }">contactez-nous</router-link>
        et <b>nous serons ravis de vous rencontrer</b> pour faire votre
        connaissance.
      </p>
      <p>
        L'acceptation d'un nouveau membre se fait par l'assemblée générale. Si
        vous êtes mineur, l'accord écrit de votre représentant légal est demandé
        !
      </p>
    </inline-image-card>

    <inline-image-card
      position="left"
      title="Comment puis-je soutenir les SEDUNI ?"
      :img-src="require('@/assets/img/indoor.jpg')"
    >
      <p>
        Si vous souhaitez soutenir notre association sans vous investir dans ses
        activités, la meilleure manière est de
        <b>parler de nous à vos connaissances !</b> Vous pouvez également
        rejoindre et partager notre
        <a href="https://www.facebook.com/SEDUNI.VS" target="_blank">
          groupe facebook</a
        >.
      </p>
      <p>
        Si vous souhaitez aller plus loin et soutenir financiairement les
        SEDUNI, vous pouvez devenir <b>membre de soutien</b>. Vous fixez
        vous-mêmes le montant de votre cotisation annuelle et vous aurez accès
        aux assemblées générales ainsi qu'aux ressources de l'association.
      </p>
    </inline-image-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return { publicPath: process.env.BASE_URL }
  }
}
</script>
