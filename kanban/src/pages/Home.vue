<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h4> KANBAN </h4>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" data-toggle="modal" data-target=".bd-example-modal-lg" href="#"> AddTask <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="row">
        <back-log/>
        <Todo/>
        <doing/>
        <done/>
      </div>
    </div>
    <add-from/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddFrom from '@/components/AddFrom'
import BackLog from '@/components/BackLog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
export default {
  components: {
    AddFrom,
    BackLog,
    Todo,
    Doing,
    Done
  },
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'getdata',
      'addBacklog'
    ])
  },
  created () {
    this.getdata('backlog')
    this.getdata('todo')
    this.getdata('doing')
    this.getdata('done')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.left {
  text-align: left;
}
</style>
