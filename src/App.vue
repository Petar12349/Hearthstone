<template>
  <div id="app">
    <div>
      <b-jumbotron class="navig" header="HEARTHSTONE" lead="Heroes of Warcraft ">
        <div class="dugme1">
          <b-dropdown show variant="primary" id="dropdown1" text="Options" class="m-md-2">
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
        placeholder="  SEARCH ..."
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

  data: function () {
    return {
      // naziov niza
    };
  },

  methods: {
    dohvati_podatak: function () {
      this.axios.get("https://omgvamp-hearthstone-v1.p.rapidapi.com/info").then((response) => {
        console.log(response.data);
      });
    },
  }
};
</script>

<style>
.navig {
  color: purple;
  font-style: Arial;
  transition: 0.7s;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom-width: thick, black;
  background-position: bottom;
  background-color: purple;
  display: block;
  position: relative;
}

.html {
  height: 100%;
  background-color: white;
  background-size: 30% 105%;
  background-image: url("./assets/smoke.png");
}

.search-box .search-bar {
  display: block;
  padding: 0px;
  color: rgba(4, 3, 66);
  font-size: 20px;

  margin-right: auto;
  margin-left: auto;
  width: 10%;
  transition: 0.7s;
  margin-bottom: 30px;
  border-radius: 0px 0px 16px 16px;
  box-shadow: 0px 0px 0px rgba(1, 1, 1, 1);

  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-box .search-bar:focus {
  width: 97%;
  margin-bottom: 0px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 1);
  background-color: rgba(137, 171, 227);
  opacity: 0.7;
  color: white;
}

#app {
  background-image: url("./assets/smoke.png");
  background-size: cover;
  background-position: bottom;
}
</style>