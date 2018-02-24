<template>
  <!-- Modal -->
<div v-if="detailTodo" class="modal fade" id="exampleModalTodo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: black;" id="exampleModalLabel">Detail</h5>
      </div>
      <div style="color: black;" class="modal-body">
        <p>Title : <strong>{{detailTodo.title}}</strong></p>

        <p>Point: <strong>{{detailTodo.point}}</strong></p>

        <p>assignTo: <strong>{{detailTodo.assignTo}}</strong></p>
      </div>
      <div class="modal-footer row container">
        <button @click="moveTaskBacklog" type="button" class="btn btn-warning" data-dismiss="modal">Backlog</button>
        <button @click="deleteTask" type="button" data-dismiss="modal" class="btn btn-primary">Delete</button>
        <button @click="moveTaskDoing" type="button" class="btn btn-info" data-dismiss="modal">Doing</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['detailTodo'],
  data () {
    return {

    }
  },
  methods: {
    deleteTask () {
      this.$emit('deleteTaskTodo')
    },
    moveTaskDoing () {
      this.$emit('moveTaskTo', 'doing')
    },
    moveTaskBacklog () {
      this.$emit('moveTaskTo', 'backlog')
    }
  }
}
</script>

<style lang="css">
</style>
