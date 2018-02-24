import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD-uMpP0XPRyYG_ecwiQCbMrwp6kxzFqbY',
  authDomain: 'kanban-863bc.firebaseapp.com',
  databaseURL: 'https://kanban-863bc.firebaseio.com',
  projectId: 'kanban-863bc',
  storageBucket: 'kanban-863bc.appspot.com',
  messagingSenderId: '1031603540422'
}
firebase.initializeApp(config)

const dbKanban = firebase.database()
const backlogref = dbKanban.ref('backlog')

Vue.use(Vuex)

const state = {
  backlog: null,
  todo: null,
  doing: null,
  done: null
}

const mutations = {
  fetchBacklog (state, payload) {
    state.backlog = payload
    // console.log(state.backlog)
  },
  fetchTodo (state, payload) {
    state.todo = payload
  },
  fetchDoing (state, payload) {
    state.doing = payload
  },
  fetchDone (state, payload) {
    state.done = payload
  }
}

const actions = {
  getdata ({commit}, payload) {
    dbKanban.ref(payload).on('value', function (snapshot) {
      let a = []
      snapshot.forEach((snap) => {
        let obj = {
          id: snap.key,
          title: snap.val().title,
          point: snap.val().point,
          assignTo: snap.val().assignTo
        }
        a.push(obj)
      })
      if (payload === 'backlog') {
        commit('fetchBacklog', a)
      } else if (payload === 'todo') {
        commit('fetchTodo', a)
      } else if (payload === 'doing') {
        commit('fetchDoing', a)
      } else {
        commit('fetchDone', a)
      }
    })
  },
  addBacklog ({commit}, payload) {
    if (!payload.title || !payload.point || !payload.assignTo) {
      return alert("field can't be empty!!!")
    }
    backlogref.push({
      title: payload.title,
      point: payload.point,
      assignTo: payload.assignTo
    })
  },
  remove ({commit}, payload) {
    console.log(payload)
    dbKanban.ref(payload.collection).child(payload.id).remove()
  },
  move ({commit}, payload) {
    console.log(payload)
    dbKanban.ref(payload.collectionFrom).child(payload.id).remove()
    dbKanban.ref(payload.collectionTo).child(payload.id).set(payload.task)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
