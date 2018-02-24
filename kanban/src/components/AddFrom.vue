<template>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="container">
          <form>
            <fieldset>
              <legend>Add Task</legend>
              <div class="form-group container">
                <label for="exampleInputEmail1">Task Title :</label>
                <input v-model="title" type="text" aria-describedby="emailHelp" placeholder="enter task...">
              </div>
              <div class="form-group container">
                <label for="exampleInputPassword1">Assign To :</label>
                <input v-model="assignTo" type="text" placeholder="enter name...">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Points <span style="visibility: hidden;">asd</span>:</label>
                <input v-model="point" type="number" placeholder="enter point">
              </div>
              <div class="mb-3">
                <button  @click="addBacklog({title, assignTo, point})" type="button" class="btn btn-info" data-dismiss="modal">Add</button>
                <button data-dismiss="modal" type="button" class="btn btn-warning">cancel</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: null,
      point: null,
      assignTo: null
    }
  },
  methods: {
    ...mapActions([
      'addBacklog'
    ])
  }
}
</script>

<style lang="css">
</style>
