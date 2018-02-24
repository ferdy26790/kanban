<template>
  <!-- Modal -->
<div v-if="detailDoing" class="modal fade" id="exampleModalDoing" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: black;" id="exampleModalLabel">Detail</h5>
      </div>
      <div style="color: black;" class="modal-body">
        <p>Title : <strong>{{detailDoing.title}}</strong></p>

        <p>Point: <strong>{{detailDoing.point}}</strong></p>

        <p>assignTo: <strong>{{detailDoing.assignTo}}</strong></p>
      </div>
      <div class="modal-footer row container">
        <button @click="moveTaskTodo" type="button" class="btn btn-warning" data-dismiss="modal">Todo</button>
        <button @click="deleteTask" type="button" data-dismiss="modal" class="btn btn-primary">Delete</button>
        <button @click="moveTaskDone" type="button" class="btn btn-success" data-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['detailDoing'],
  data () {
    return {

    }
  },
  methods: {
    deleteTask () {
      this.$emit('deleteTaskDoing')
    },
    moveTaskDone () {
      this.$emit('moveTaskTo', 'done')
    },
    moveTaskTodo () {
      this.$emit('moveTaskTo', 'todo')
    }
  }
}
</script>

<style lang="css">
</style>
