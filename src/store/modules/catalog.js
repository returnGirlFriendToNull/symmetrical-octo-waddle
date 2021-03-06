import { fetchCatalogList } from '@/api/catalog'

const catalog = {
  state: {
    list: [],
    totalPage: 0,
    totalCount: 0
  },

  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
    },
    SET_TOTAL_PAGE: (state, num) => {
      state.totalPage = num
    },
    SET_TOTAL_COUNT: (state, num) => {
      state.totalCount = num
    }
  },

  actions: {
    FetchCatalogList({ commit }, { pageIndex, pageSize }) {
      return new Promise((resolve, reject) => {
        fetchCatalogList(pageIndex, pageSize)
          .then(response => {
            const data = response.data
            commit('SET_LIST', data.list)
            commit('SET_TOTAL_PAGE', data.totalPage)
            commit('SET_TOTAL_COUNT', data.totalCount)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
    // SearchProductInfo({ commit }, value) {
    //   return new Promise((resolve, reject) => {
    //     searchProductInfo(value).then(response => {
    //       console.log(response)
    //       const data = response.data
    //       commit('SET_LIST', data.list)
    //       commit('SET_TOTAL_PAGE', data.totalPage)
    //       commit('SET_TOTAL_COUNT', data.totalCount)
    //       resolve()
    //     }).catch(e => {
    //       reject(e)
    //     })
    //   })
    // }
  }
}

export default catalog
