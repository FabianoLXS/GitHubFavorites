//classe que vai conter a lógica dos dados
//como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.update()
  }
}

//classe qie vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
  }

  update() {
    this.removeAllTr()  

    const tr = ``
  }
  
  removeAllTr() {
    const tbody = this.root.querySelector("table tbody")
    tbody.querySelectorAll("tr").forEach(() => {tr.remove()})
  }
}