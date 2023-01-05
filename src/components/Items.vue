<template>
  <p>
    <label for="NumberSort">Фильтр по колл-ву</label>
    <br>
    <input type="number" v-model="count_sort" id="NumberSort"/>
  </p>
  <p>
    <label for="NameSort">Фильтр по имени</label>
    <br>
    <input type="text" v-model="name_sort" id="NameSort"/>
  </p>
  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Count</th>
      <th scope="col">Изменить</th>
    </tr>
    </thead>
    <tbody>
      <one-item v-for="item in this.filteredList" :key="item.id"
      :item="item"/>
    </tbody>
  </table>
  <a href="/create_items">Добавить элемент</a>
</template>

<script>
import OneItem from "@/components/Item.vue";

export default {
  name: "AllItems",
  components: {OneItem},
  data() {
    return {
      imageItems: [],
      count: 0,
      count_sort: 0,
      name_sort: ''
    }
  },
  methods: {
    getGoodDictionary(dct){
      let res = {
        'id': dct.id,
        "name": dct.name,
        "count": 0
      }
      var count = 0;
      let vm = this;
      fetch("http://localhost:8081/storage_item")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            data.forEach(props => {
              if (props.id_item == res.id) {
                count += props.count;
              }
            })

            res.count = count;
            console.log(res);
            vm.imageItems.push(res);
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    },
    getData() {
      let vm = this;
      fetch("http://localhost:8081/items")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            data.forEach(props => {
              vm.getGoodDictionary(props)
            })

          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    }
  },
  mounted() {
    this.getData();
    console.log(this.imageItems);
  },
  computed: {
    filteredList: function(){
      let vm = this;
      return this.imageItems.filter(function (elem) {
        if (elem.count > vm.count_sort) {
          if (vm.name_sort != '') {
            return elem.name.includes(vm.name_sort);
          }
          return true
        }
      })
    }
  }
}
</script>

<style scoped>

</style>