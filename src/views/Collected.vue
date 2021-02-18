<template>
  <v-data-table
    :headers="headers"
    :options.sync="options"
    :items="records"
    :server-items-length="total"
    :loading="loading"
    :footer-props="{
      itemsPerPageOptions:recordsSize
    }"
    @pagination="getRecords"
  />
</template>
<script>
export default {
  name: 'Collected',
  data: () => {
    return {
      options: {
        page: 1,
        itemsPerPage: 10
      },
      total: 0,
      loading: true,
      records: [],
      recordsSize: [5, 10, 15, 20],
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        {
          text: 'jigId',
          sortable: false,
          value: 'jigId'
        },
        {
          text: 'code',
          sortable: false,
          value: 'code'
        },
        {
          text: 'seqId',
          sortable: false,
          value: 'seqId'
        },
        {
          text: 'description',
          sortable: false,
          value: 'description'
        }
      ]
    }
  },
  created() {
    this.getRecords()
  },
  methods: {
    getRecords() {
      this.loading = true
      this.$api.get('/api/test', {
        params: {
          page_size: this.options.itemsPerPage,
          page_number: this.options.page
        }
      }).then(
        (res) => {
          this.records = res.data.records
          this.total = res.data.total
          this.loading = false
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
