<template>
  <div class="home">
    <img
      height="250"
      alt="Vue logo"
      src="https://vuewebappdiaz.azureedge.net/webvue2container/trendmicro-oghero.jpg?sp=r&st=2022-09-27T06:45:31Z&se=2022-11-30T14:45:31Z&sv=2021-06-08&sr=c&sig=QcE2kmp%2BztCq%2Brhs35KE%2Ft%2FNyDbA6sK1PWWU7dxAORM%3D"
    />
    <HelloWorld
      :msg="`Hi Mr. ${account}!`"
      :subject="'These are the list of resources created in resource group'"
    />

    <div v-for="(resource, index) in resources" :key="index">
      <ResourceItem :resource="resource" />
    </div>

    <hr />
    <p class="txt-subject">Data of persons table in my created db server</p>

    <div v-for="person in dbContent" :key="person.firstName">
      <PersonItem :person="person" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import ResourceItem from "@/components/ResourceItem.vue";
import PersonItem from "@/components/PersonItem.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ResourceItem,
    PersonItem,
  },
  data: () => ({
    resources: [],
    dbContent: [],
  }),
  computed: {
    ...mapState("auth", ["account"]),
  },
  async created() {
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}/display-resources-list-trigger`
      );
      this.resources = response.data;
    } catch (error) {
      console.error("error", error);
    }

    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}/display-database-trigger`
      );
      this.dbContent = response.data;
    } catch (error) {
      console.log("error", error);
    }
  },
};
</script>

<style scoped>
.txt-subject {
  font-weight: bold;
}
</style>
