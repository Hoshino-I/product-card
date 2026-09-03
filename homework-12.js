class Film {
  constructor(title, director, year) {
    this.title = title
    this.director = director
    this.year = year
  }
  getinfo() {
    return `Фильм "${this.title}", Режиссер "${this.director}", "${this.year}" год`
  }
}

class Series extends Film {
  constructor(title, director, year, seasons) {
    super(title, director, year);

    this.seasons = seasons
  }
  getSeriesInfo() {
    return `${this.getinfo()} — Сериал содержит ${this.seasons} сезона(ов).`;
  }
}

const inception = new Film("Начало", "Кристофер Нолан", 2010);
console.log(inception.getinfo());

const sherlock = new Series("Шерлок", "Пол Макгиган", 2010, 4);
console.log(sherlock.getinfo());

console.log(sherlock.getSeriesInfo());