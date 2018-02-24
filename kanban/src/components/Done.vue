<template>
  <div class="col-md-3 mt-3">
    <div class="card border-success mb-3  " style="max-width: 20rem;">
      <div class="card-header">Done</div>
      <div class="card-body">
        <div v-for="task in done" :key="task.id" class="card text-white bg-success mb-3" style="max-width: 20rem;">
            <div class="card-header">{{task.title}}</div>
            <div class="card-body left">
            <ul>
              <li>Point: {{task.point}}</li>
              <li>assign to: {{task.assignTo}}</li>
            </ul>
            <button @click="detailDone(task)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalDone">
              Show Detail
            </button>
          </div>
        </div>
      </div>
    </div>
    <detail-done v-on:moveTaskTo="moveTask"  v-on:deleteTaskDone="deleteTaskDone"  :detailDone="doneTask"/>
  </div>
</template>

<script>
import DetailDone from '@/components/DetailDone'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    DetailDone
  },
  data () {
    return {
      doneTask: null
    }
  },
  computed: {
    ...mapState([
      'done'
    ])
  },
  methods: {
    ...mapActions([
      'remove',
      'move'
    ]),
    detailDone (task) {
      this.doneTask = task
    },
    deleteTaskDone () {
      let payload = {
        collection: 'done',
        id: this.doneTask.id
      }
      this.remove(payload)
    },
    moveTask (to) {
      let task = {
        title: this.doneTask.title,
        point: this.doneTask.point,
        assignTo: this.doneTask.assignTo
      }
      let payload = {
        collectionFrom: 'done',
        collectionTo: to,
        id: this.doneTask.id,
        task: task
      }
      this.move(payload)
    }
  }
}
</script>

<style lang="css">

</style>
