<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td><a :href="'/storages_item/' + item.id" >{{ item.name }}</a></td>
    <td><a :href="'/edit_storage/' + item.id" >Изменить</a></td>
  </tr>
</template>

<script>
export default {
  name: "OneStorage",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>

</style>