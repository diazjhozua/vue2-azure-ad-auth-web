<template>
  <div class="home">
    <img
      height="250"
      alt="Vue logo"
      src="https://vuewebappdiaz.azureedge.net/webvue2container/trendmicro-oghero.jpg?sp=r&st=2022-09-27T06:45:31Z&se=2022-11-30T14:45:31Z&sv=2021-06-08&sr=c&sig=QcE2kmp%2BztCq%2Brhs35KE%2Ft%2FNyDbA6sK1PWWU7dxAORM%3D"
    />
    <HelloWorld :msg="`Hi Mr. ${account}!`" />

    <div v-for="(resource, index) in resources" :key="index">
      <ResourceItem :resource="resource" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
import ResourceItem from "@/components/ResourceItem.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    ResourceItem,
  },
  data: () => ({
    resources: [],
  }),
  computed: {
    ...mapState("auth", ["account"]),
  },
  async created() {
    try {
      const response = await axios.get(
        "https://func-resources-diaz-jpeast-01.azurewebsites.net/api/display-resources-list-trigger"
      );
      this.resources = response.data;
    } catch (error) {
      console.error("error", error);
    }
  },
};
</script>
