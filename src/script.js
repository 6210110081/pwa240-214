let time = 0

self.onload = () => {
  time = new Date()
  document.getElementById('tiles-board').addEventListener('click', () => {
    let dTime = (new Date().getTime() - time.getTime()) / 1000
    time = new Date()
    document.getElementById('count').innerHTML = parseInt(document.getElementById('count').innerHTML) + 1
  })
}
