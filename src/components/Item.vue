<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.name }}</td>
    <td>{{ item.count }}</td>
    <td><a :href="'edit_item/' + item.id">Изменить</a></td>
  </tr>
</template>

<script>
export default {
  name: "OneItem",
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