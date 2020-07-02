<template>
  <div id="app">
    <div>
      <b-jumbotron class="navig" header="HEARTHSTONE" lead="Heroes of Warcraft ">
        <div class="dugme1">
          <b-dropdown show variant="primary" id="dropdown1" text="Extra Options" class="m-md-2">
            <b-dropdown-item href="https://www.hearthstonetopdecks.com">Decks</b-dropdown-item>
            <b-dropdown-item href="https://playhearthstone.com/en-us/new-to-hearthstone/">About</b-dropdown-item>
            <b-dropdown-item href="https://playhearthstone.com/en-us/">Official Site</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-jumbotron>
    </div>

    <div class="search-box">
      <b-form-input
        type="text"
        v-model="search"
        class="search-bar"
        placeholder="SEARCH"
        @keyup.enter="dohvatiPodatke"
      />
    </div>

    <b-row>
      <b-col cols="2" v-for="Card in karte" v-bind:key="`Card_` + Card.idCard">
        <b-card
          width="100px"
          :title="Card.strCard"
          :img-src="Card.strCardImage"
          img-top
          tag="article"
          style="width: 14rem; margins: 20rem"
          class="mb-200"
        >
          <hr />

          <b-card-text>
            <h5>{{ Card.strKeywords }}</h5>
          </b-card-text>

          <hr />

          <b-card-text>{{ Card.strAbilites }}</b-card-text>

          <hr />

          <b-button href="https://playhearthstone.com/en-us/cards" variant="primary">More</b-button>
        </b-card>
      </b-col>
    </b-row>

    <br />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      api_key:'d22edff2f1mshc22339c843d98e9p19504djsn120ff101fe25',
      url_base:'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
      search: ``,
      karte: []
    };
  },

  methods: {
    dohvatiPodatke (e) {
      if (e.key == "Enter"  ) {
        fetch(`${this.url_base} karte?=${this.search}%7Bname%7D%APPID=${this.api_key}`)
          .then(res => {
            return res.json();
        }).then(this.setResults);
    }
  },
  
  setResults (results) {
    this.karte = results;
  },
}
}

</script>

<style>
.navig {
  color: white;
  font-style: Arial;
  transition: 0.7s;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom-width: thick, black;
  background-size: 70% 120%;
  background-position: bottom;
  background-color: black;
  background-image: url("https://cdn.hipwallpaper.com/i/53/62/zAFf4k.png");
}

body,
html {
  height: 100%;
  background-image: url("https://i7.pngguru.com/preview/409/684/989/hearthstone-texture-mapping-3d-computer-graphics-animation-chocolate-background.jpg");
  background-size: 30% 105%;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #ffff00;
  font-size: 20px;

  width: 25%;
  transition: 0.7s;
  margin-bottom: 30px;
  border-radius: 0px 16px 16px 0px;
  box-shadow: 0px 0px 8px rgba(1, 1, 1, 1);

  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-box .search-bar:focus {
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 1);
  background-color: rgba(206, 181, 81);
  margin-bottom: 30px;
}
</style>