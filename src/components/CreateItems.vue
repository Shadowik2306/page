<template>
  <form id="frm-items" @submit.prevent="onSubmit">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nickname">Название</label>
        <input v-model="name" class="form-control" id="nickname" type="text" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="description">Колл-во</label>
        <input v-model="count" class="form-control" id="description" type="number" required="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="description">Склад</label>
        <input v-model="storage" class="form-control" id="description" type="number" required="">
      </div>
    </div>
    <button v-on:click="addNew" class="btn btn-primary" type="submit">Перевезти</button>
  </form>
</template>

<script>

export default {
  name: "CreateItems",
  data() {
    return {
      id: 0,
      name: "",
      count: 0,
      storage: 0
    }
  },
  methods: {
    addNew() {
      let vm = this;
      let id = 0;
      fetch("http://localhost:8081/items")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            console.log(data);
            vm.imageItems = data
            id = data.length + 1;
            fetch("http://localhost:8081/items",
                {
                  method: 'POST',
                  body: JSON.stringify({'id': id, 'name': vm.name}),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.info('Added');
                  console.log(data);
                  location.reload();
                })
                .catch(function (error) {
                  console.error('Error:', error);
                  throw "Can't add item";
                });
            fetch("http://localhost:8081/storage_item",
                {
                  method: 'POST',
                  body: JSON.stringify({'id': 0, 'id_storage': vm.storage, 'id_item': id, 'count': vm.count}),
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.info('Added');
                  console.log(data);
                  location.reload();
                })
                .catch(function (error) {
                  console.error('Error:', error);
                  throw "Can't add item";
                });
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });


      console.info('item-created')


    },
    mounted() {


    }
  }
}
</script>

<style scoped>

</style>