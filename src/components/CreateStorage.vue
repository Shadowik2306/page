<template>
  <form id="frm-items" @submit.prevent="onSubmit">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nickname">Название</label>
        <input v-model="name" class="form-control" id="nickname" type="text" required="">
      </div>
    </div>
    <button v-on:click="addNew" class="btn btn-primary" type="submit">Добавить новый склад</button>
  </form>
</template>

<script>
export default {
  name: "CreateStorage",
  data() {
    return {
      name: '',
    }
  },

  methods: {
    addNew() {
      let vm = this;
      let id = 0;
      fetch("http://localhost:8081/storages")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            console.log(data);
            vm.imageItems = data
            id = data.length + 1;
            fetch("http://localhost:8081/storages",
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
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    }
  }
}
</script>

<style scoped>

</style>