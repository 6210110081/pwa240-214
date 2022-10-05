let time = 0

self.onload = () => {
    document.getElementById('tiles-board').addEventListener('click', () => {
        document.getElementById('count').innerHTML = parseInt(document.getElementById('count').innerHTML) + 1
    })
}
