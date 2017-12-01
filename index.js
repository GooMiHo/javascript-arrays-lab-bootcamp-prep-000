const app = "I don't do much."

function array() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  array().push(name);
  return array;

}
