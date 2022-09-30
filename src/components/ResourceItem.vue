<template>
  <div class="item">
    <p class="item-txt">{{ resource.Name }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    resource: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  width: 40%;
  min-height: 40px;
  background: #3333;
}

.item-txt {
  margin: auto;
  color: black;
}
</style>
