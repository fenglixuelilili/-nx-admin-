const state = {
  logs:[]
};
const mutations = {
  ADD_ERROR_LOG(state,log){
    state.logs.push(log)
  }
};

const actions = {
  addErrorLogs({commit},log){
    commit('ADD_ERROR_LOG',log)
  }
};
export default {
  state,
  mutations,
  actions
}
