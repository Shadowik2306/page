<template>
  <tr>
    <th scope="row">{{ item.id_item }}</th>
    <td>{{ item.name }}</td>
    <td>{{ item.count }}</td>
    <td>
      <form>
        <label for="description">Склад</label>
        <input v-model="storage" class="form-control" id="description" type="number" required="">
        <button v-on:click="addNew" class="btn btn-primary" type="submit">Перевезти</button>
      </form>
    </td>
  </tr>
</template>

<script>
import item from "@/components/Item.vue";

export default {
  name: "StorageItem",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      storage: 0,
    }
  },
  methods: {
    addNew() {
      let vm = this;
      fetch("http://localhost:8081/storage_item/" + vm.item.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'id': vm.item.id, 'id_storage': vm.storage,
          'id_item': vm.item.id_item, 'count': vm.item.count})
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
    }
  },
  mounted() {
    console.log(item)
  }
}
</script>

<style scoped>

</style>