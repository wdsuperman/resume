import axios from 'axios'

const state ={
  name:{}
}
const mutations ={
  xinxi(commit, shuju){
    state.name = shuju
  }
}
const actions = {
  cz({commit}){
    const uri = 'https://raw.githubusercontent.com/wdsuperman/resume/master/data/post/information.json'
    axios.get(uri).then(res=>{
      const shuju = res.data
      commit('xinxi', shuju)
    })
  }
}
export default{
  state,
  mutations,
  actions
}