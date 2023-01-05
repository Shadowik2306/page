<template>
  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Count</th>
      <th scope="col">Первезти</th>
    </tr>
    </thead>
    <tbody>
    <StorageItem v-for="item in this.imageItems" :key="item.id"
                :item="item"/>
    </tbody>
  </table>

</template>

<script>
import StorageItem from "@/components/StorageItem.vue";

export default {
  name: "StorageItems",
  components: {StorageItem},
  props: {
    id: {
      type: String,
      default: "1"
    }
  },
  data () {
    return {
      imageItems: [],
      nameitem: ""
    }
  },
  methods: {
    getGoodDictionary(dct) {
      let res = {
        "id": dct.id,
        "id_item": 0,
        "name": this.nameItem,
        "count": 0
      }
      res.id_item = dct.id_item;
      res.count = dct.count;
      console.log(res);
      return res
    },
    getData() {
      let vm = this;
      fetch("http://localhost:8081/storage_item")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');

            let res = data;
            res.forEach(element => {
              if (element.id_storage == vm.id) {
                fetch("http://localhost:8081/items/" + element.id_item)
                    .then(function (response) {
                      return response.json();
                    })
                    .then(function (data) {
                      console.info('Loaded');
                      vm.nameItem = data.name
                      console.log(vm.nameItem)
                      vm.imageItems.push(vm.getGoodDictionary(element));
                    })
                    .catch(function (error) {
                      console.error('Error:', error);
                      throw "Can't load items";
                    });
              }

            });

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