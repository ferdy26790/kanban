<template>
  <!-- Modal -->
<div v-if="detailBacklog" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: black;" id="exampleModalLabel">Detail</h5>
      </div>
      <div style="color: black;" class="modal-body">
        <p>Title : <strong>{{detailBacklog.title}}</strong></p>

        <p>Point: <strong>{{detailBacklog.point}}</strong></p>

        <p>assignTo: <strong>{{detailBacklog.assignTo}}</strong></p>
      </div>
      <div class="modal-footer row container">
        <button @click="deleteTask" type="button" data-dismiss="modal" class="btn btn-primary">Delete</button>
        <button @click="moveTask" type="button" class="btn btn-warning" data-dismiss="modal">Todo</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['detailBacklog'],
  methods: {
    deleteTask () {
      this.$emit('deleteTaskBacklog')
    },
    moveTask () {
      this.$emit('moveTask')
    }
  }
}
</script>

<style lang="css">
</style>
