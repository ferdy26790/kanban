<template>
  <!-- Modal -->
<div v-if="detailDone" class="modal fade" id="exampleModalDone" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: black;" id="exampleModalLabel">Detail</h5>
      </div>
      <div style="color: black;" class="modal-body">
        <p>Title : <strong>{{detailDone.title}}</strong></p>

        <p>Point: <strong>{{detailDone.point}}</strong></p>

        <p>assignTo: <strong>{{detailDone.assignTo}}</strong></p>
      </div>
      <div class="modal-footer row container">
        <button @click="moveTaskDoing" type="button" class="btn btn-info" data-dismiss="modal">Doing</button>
        <button @click="deleteTask" type="button" data-dismiss="modal" class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['detailDone'],
  data () {
    return {

    }
  },
  methods: {
    deleteTask () {
      this.$emit('deleteTaskDone')
    },
    moveTaskDoing () {
      this.$emit('moveTaskTo', 'doing')
    }
  }
}
</script>

<style lang="css">
</style>
