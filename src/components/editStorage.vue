<template>
  <form id="frm-items" @submit.prevent="onSubmit">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="nickname">Название</label>
        <input v-model="name" class="form-control" id="nickname" type="text" required="">
      </div>
    </div>
    <button v-on:click="edit_item" class="btn btn-primary" type="submit">Изменить</button>
    <button v-on:click="delete_item" href="/main" class="btn btn-primary" type="submit">Удалить</button>
  </form>
</template>

<script>

export default {
  name: "edit_item",
  props: {
    id: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      name: "",
    }
  },
  methods: {
    edit_item() {
      let vm = this;
      fetch("http://localhost:8081/storages/" + vm.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'id': vm.id, 'name': vm.name})
      })
          .then((response) => {
            response.json()
          })
          .then((result) => {
            console.log('Success:', result);
          })
          .catch((error) => {
            console.log()
            console.error('Error:', error);
          });
    },
    delete_item() {
      let vm = this;
      fetch('http://localhost:8081/storages/' + vm.id, {
        method: 'DELETE',
      })
          .then(res => res.text())
          .then(res => console.log(res));

      fetch("http://localhost:8081/storage_item")
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            let sum = 0;
            data.forEach(props => {
              if (props.id_storage == vm.id) {
                fetch('http://localhost:8081/storage_item/' + props.id, {
                  method: 'DELETE',
                })
                    .then(res => res.text())
                    .then(res => console.log(res))
              }
            })
            vm.count = sum;
            console.log(vm.count_sort);
          })
          .catch(function (error) {
            console.error('Error:', error);
            throw "Can't load items";
          });
    },
    getData() {
      let vm = this;
      fetch("http://localhost:8081/storages/" + vm.id)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.info('Loaded');
            vm.name = data.name;
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