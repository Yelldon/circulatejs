export const state = () => ({
  settings: {
    title: 'Circulate JS'
  },
  menu: [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Posts',
      link: '/posts/create'
    }
  ]
})

export const mutations = {
  addToMenu(state, newMenuLink) {
    state.menu = newMenuLink.name
    state.menu = newMenuLink.link
  }
}
