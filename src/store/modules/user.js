export default {
  namespaced: true, //用于在全局引用此文件里的方法时标识这一个的文件名
  state: {
    userInfo: {
      // token: 'Tima eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySW5mbyI6IntcIkFBQUlkXCI6ODcsXCJhYWFUb2tlblwiOlwiYzQ4YmY1YTMtZDEyNC00MGNhLTg4ZTItNjdmOTBiNGU3ZWJjXCIsXCJhdXRoZW50aWNhdGlvblN0YXR1c1wiOjAsXCJjcmVhdGVkRGF0ZVwiOjE1MzYwMjkxODUwMDAsXCJkZWxldGVGbGFnXCI6XCIwXCIsXCJpZFwiOjk3LFwiaW5pdFVzZXJcIjowLFwibGFzdE1vZGlmaWVkRGF0ZVwiOjE1NTA0ODczMTMwMDAsXCJub1wiOlwiQUQwMjIwMTgwOTA0MTA0NjI1NTk5OTVcIixcInBlcnNvbmFsU2lnbmF0dXJlXCI6XCLkuKrmgKfnrb7lkI3vvJvkuKror7fnrb7lkI0xXCIsXCJwaG9uZVwiOlwiMTg2MjQzODEwNzRcIixcInJlYWxQaG9uZVwiOlwiMTg2KioqKjEwNzRcIixcInNleFwiOjEsXCJ1c2VyQ29kZVwiOlwiMTg2MjQzODEwNzRcIixcInVzZXJOYW1lXCI6XCLkuo7miJDpvpkxMjNcIixcInVzZXJTdGF0dXNcIjowLFwidXNlclR5cGVcIjpcIjAxXCJ9IiwiY3JlYXRlZCI6MTU2NTkyNTY4OTA5NiwidXNlck5vIjoiQUQwMjIwMTgwOTA0MTA0NjI1NTk5OTUiLCJ1c2VyVHlwZSI6IjAxIiwidXNlck5hbWUiOiLkuo7miJDpvpkxMjMiLCJleHAiOjE1NjY3ODk2ODksInVzZXJJZCI6OTd9.Hvl-RQvSRY3eTYUGRcpJ-BjdLQpRXuWpCzi2YXXq8NM'
    },
    isLogged: false
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = {
        ...state.userInfo,
        ...userInfo,
      }
      state.isLogged = !!state.userInfo.accessToken
    }
  }
}
