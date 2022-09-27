<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
