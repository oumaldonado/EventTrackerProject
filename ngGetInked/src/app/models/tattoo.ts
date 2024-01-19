export class Tattoo {
  id: number;
  designName: String;
  artist: String;
  meaning: String;
  style: String;
  dateStarted: String;
  dateFinished: String;
  enabled: boolean;
  imageUrl: String;

  constructor(
    id: number = 0,
    designName: String = '',
    artist: String = '',
    meaning: String = '',
    style: String = '',
    dateStarted: String = '',
    dateFinished: String = '',
    enabled: boolean = false,
    imageUrl: String = ''
  ) {
    this.id = id;
    this.designName = designName;
    this.artist = artist;
    this.meaning = meaning;
    this.style = style;
    this.dateStarted = dateStarted;
    this.dateFinished = dateFinished;
    this.enabled = enabled;
    this.imageUrl = imageUrl;
  }
}
