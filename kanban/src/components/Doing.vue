<template>
  <div class="col-md-3 mt-3">
    <div class="card border-info mb-3  " style="max-width: 20rem;">
      <div class="card-header">Doing</div>
      <div class="card-body">
        <div v-for="task in doing" :key="task.id" class="card text-white bg-info mb-3" style="max-width: 20rem;">
            <div class="card-header">{{task.title}}</div>
            <div class="card-body left">
            <ul>
              <li>Point: {{task.point}}</li>
              <li>assign to: {{task.assignTo}}</li>
            </ul>
            <button @click="detailDoing(task)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalDoing">
              Show Detail
            </button>
          </div>
        </div>
      </div>
    </div>
    <detail-doing v-on:moveTaskTo="moveTask"  v-on:deleteTaskDoing="deleteTaskDoing" :detailDoing="doingTask"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DetailDoing from '@/components/DetailDoing'
export default {
  components: {
    DetailDoing
  },
  computed: {
    ...mapState([
      'doing'
    ])
  },
  data () {
    return {
      doingTask: null
    }
  },
  methods: {
    ...mapActions([
      'remove',
      'move'
    ]),
    detailDoing (task) {
      this.doingTask = task
    },
    deleteTaskDoing () {
      let payload = {
        collection: 'doing',
        id: this.doingTask.id
      }
      this.remove(payload)
    },
    moveTask (to) {
      let task = {
        title: this.doingTask.title,
        point: this.doingTask.point,
        assignTo: this.doingTask.assignTo
      }
      let payload = {
        collectionFrom: 'doing',
        collectionTo: to,
        id: this.doingTask.id,
        task: task
      }
      this.move(payload)
    }
  }
}
</script>

<style lang="css">

</style>
