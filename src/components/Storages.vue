<template>
  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Редактировать</th>
    </tr>
    </thead>
    <tbody>
      <OneStorage v-for="item in this.imageItems" :key="item.id"
                  :item="item"/>
    </tbody>
  </table>
  <a href="create_storage">Создать хранилище</a>
</template>

<script>
import OneStorage from "@/components/Storage.vue";

export default {
  name: "AllStorages",
  components: {OneStorage},
  data() {
    return {
      imageItems: []
    }
  },
  methods: {
    getData() {
      let vm = this;
      fetch("http://localhost:8081/storages")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            console.log(data);
            vm.imageItems = data
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>

</style>