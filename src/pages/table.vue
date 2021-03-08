<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        title="Films"
        :data="data"
        :columns="columns"
        row-key="name"
        no-data-label="Тут ничего пока нет. Самара еще хуярит бэк"
      ></q-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainTable',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Название',
          align: 'left'
        },
        { name: 'jenre', align: 'center', label: 'Жанр', field: 'jenre' },
        { name: 'year', label: 'Год выпуска', field: 'year', sortable: true },
        { name: 'producer', label: 'Режиссер', field: 'producer' }
      ],
      data: []
    }
  }
}
</script>
