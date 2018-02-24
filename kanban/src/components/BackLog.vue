<template>
  <div class="col-md-3 mt-3">
    <div class="card border-danger mb-3 " style="max-width: 20rem;">
      <div class="card-header">BackLog</div>
      <div class="card-body">
        <div v-for="task in backlog" :key="task.id" class="card text-white bg-danger mb-3" style="max-width: 20rem;">
            <div class="card-header">{{task.title}}</div>
            <div class="card-body left">
            <ul>
              <li>Point: {{task.point}}</li>
              <li>assign to: {{task.assignTo}}</li>
            </ul>
            <button @click="detailBacklog(task)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Show Detail
            </button>
            <detail-backlog v-on:moveTask="moveTaskTo" v-on:deleteTaskBacklog="deleteTaskBacklog" :detailBacklog="backlogTask"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DetailBacklog from '@/components/DetailBacklog'
export default {
  components: {
    DetailBacklog
  },
  data () {
    return {
      backlogTask: null
    }
  },
  computed: {
    ...mapState([
      'backlog'
    ])
  },
  methods: {
    ...mapActions([
      'remove',
      'move'
    ]),
    detailBacklog (payload) {
      this.backlogTask = payload
    },
    deleteTaskBacklog () {
      let payload = {
        collection: 'backlog',
        id: this.backlogTask.id
      }
      this.remove(payload)
    },
    moveTaskTo () {
      let task = {
        title: this.backlogTask.title,
        point: this.backlogTask.point,
        assignTo: this.backlogTask.assignTo
      }
      let payload = {
        collectionTo: 'todo',
        collectionFrom: 'backlog',
        id: this.backlogTask.id,
        task: task
      }
      this.move(payload)
    }
  }
}
</script>

<style lang="css">
  .backlog {
    margin-top: 1rem;
    margin-left: 1rem;
  }
</style>
