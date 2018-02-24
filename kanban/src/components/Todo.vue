<template>
  <div class="col-md-3 mt-3">
    <div class="card border-warning mb-3  " style="max-width: 20rem;">
      <div class="card-header">To-Do</div>
      <div class="card-body">
        <div v-for="task in todo" :key="task.id" class="card text-white bg-warning mb-3" style="max-width: 20rem;">
            <div class="card-header">{{task.title}}</div>
            <div class="card-body left">
            <ul>
              <li>Point: {{task.point}}</li>
              <li>assign to: {{task.assignTo}}</li>
            </ul>
            <button @click="detailTodo(task)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalTodo">
              Show Detail
            </button>
          </div>
        </div>
      </div>
    </div>
    <detail-todo v-on:moveTaskTo="moveTask"  v-on:deleteTaskTodo="deleteTaskTodo" :detailTodo="todoTask"/>
  </div>
</template>

<script>
import DetailTodo from '@/components/DetailTodo'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    DetailTodo
  },
  data () {
    return {
      todoTask: null
    }
  },
  computed: {
    ...mapState([
      'todo'
    ])
  },
  methods: {
    ...mapActions([
      'remove',
      'move'
    ]),
    detailTodo (task) {
      this.todoTask = task
    },
    deleteTaskTodo () {
      let payload = {
        collection: 'todo',
        id: this.todoTask.id
      }
      this.remove(payload)
    },
    moveTask (to) {
      let task = {
        title: this.todoTask.title,
        point: this.todoTask.point,
        assignTo: this.todoTask.assignTo
      }
      let payload = {
        collectionFrom: 'todo',
        collectionTo: to,
        id: this.todoTask.id,
        task: task
      }
      this.move(payload)
    }
  }
}
</script>

<style lang="css">

</style>
